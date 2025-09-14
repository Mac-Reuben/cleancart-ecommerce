// enhanced-search.ts
'use server';
/**
 * @fileOverview An AI-powered product search flow that intelligently retrieves relevant products from all categories.
 *
 * - enhancedSearch - A function that handles the enhanced product search process.
 * - EnhancedSearchInput - The input type for the enhancedSearch function.
 * - EnhancedSearchOutput - The return type for the enhancedSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getProducts } from '@/lib/products';

const EnhancedSearchInputSchema = z.object({
  query: z.string().describe('The user search query.'),
});
export type EnhancedSearchInput = z.infer<typeof EnhancedSearchInputSchema>;

const ProductSchema = z.object({
  name: z.string().describe('The name of the product.'),
  description: z.string().describe('A short description of the product.'),
  category: z.string().describe('The category the product belongs to.'),
  price: z.number().describe('The price of the product.'),
  imageUrl: z.string().describe('URL of the product image.'),
});

const EnhancedSearchOutputSchema = z.array(ProductSchema);
export type EnhancedSearchOutput = z.infer<typeof EnhancedSearchOutputSchema>;

export async function enhancedSearch(input: EnhancedSearchInput): Promise<EnhancedSearchOutput> {
  return enhancedSearchFlow(input);
}

const productList = getProducts();

const prompt = ai.definePrompt({
  name: 'enhancedSearchPrompt',
  input: {schema: EnhancedSearchInputSchema},
  output: {schema: EnhancedSearchOutputSchema},
  prompt: `You are an expert product search assistant for an e-commerce website.

You will receive a user query and a list of products with their details. Your task is to identify the products that are most relevant to the query from all categories.

Products:
${productList.map(product => `- Name: ${product.name}, Description: ${product.description}, Category: ${product.category}, Price: ${product.price}`).join('\n')}

Query: {{{query}}}

Return a JSON array of the most relevant products based on the user's query. Consider product name, description, and category when determining relevance. Prioritize products that closely match the query keywords.
`,
});

const enhancedSearchFlow = ai.defineFlow(
  {
    name: 'enhancedSearchFlow',
    inputSchema: EnhancedSearchInputSchema,
    outputSchema: EnhancedSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
