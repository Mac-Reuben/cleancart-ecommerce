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

const productList = [
  {
    name: 'Dell XPS 15',
    description: 'Powerful laptop for professionals.',
    category: 'IT equipment',
    price: 1799.99,
    imageUrl: 'https://example.com/dell_xps_15.jpg',
  },
  {
    name: 'iPhone 14 Pro',
    description: 'The latest smartphone from Apple.',
    category: 'phones',
    price: 1199.00,
    imageUrl: 'https://example.com/iphone_14_pro.jpg',
  },
  {
    name: 'Logitech MX Master 3',
    description: 'Ergonomic wireless mouse.',
    category: 'accessories',
    price: 99.99,
    imageUrl: 'https://example.com/logitech_mx_master_3.jpg',
  },
  {
    name: 'Samsung Galaxy S23',
    description: 'High-end Android smartphone with advanced features.',
    category: 'phones',
    price: 999.00,
    imageUrl: 'https://example.com/samsung_galaxy_s23.jpg',
  },
  {
    name: 'HP Envy Printer',
    description: 'All-in-one printer for home and office use.',
    category: 'IT equipment',
    price: 249.00,
    imageUrl: 'https://example.com/hp_envy_printer.jpg',
  },
  {
    name: 'Apple AirPods Pro',
    description: 'Premium wireless earbuds with noise cancellation.',
    category: 'accessories',
    price: 249.00,
    imageUrl: 'https://example.com/apple_airpods_pro.jpg',
  },
  {
    name: 'Dell XPS 17',
    description: 'Powerful laptop for professionals.',
    category: 'IT equipment',
    price: 2799.99,
    imageUrl: 'https://example.com/dell_xps_17.jpg',
  },
  {
    name: 'iPhone 15 Pro',
    description: 'The latest smartphone from Apple.',
    category: 'phones',
    price: 1299.00,
    imageUrl: 'https://example.com/iphone_15_pro.jpg',
  },
  {
    name: 'Logitech MX Keys',
    description: 'Ergonomic wireless keyboard.',
    category: 'accessories',
    price: 129.99,
    imageUrl: 'https://example.com/logitech_mx_keys.jpg',
  },
  {
    name: 'Samsung Galaxy S24',
    description: 'High-end Android smartphone with advanced features.',
    category: 'phones',
    price: 1099.00,
    imageUrl: 'https://example.com/samsung_galaxy_s24.jpg',
  },
  {
    name: 'HP LaserJet Printer',
    description: 'All-in-one printer for home and office use.',
    category: 'IT equipment',
    price: 349.00,
    imageUrl: 'https://example.com/hp_laserjet_printer.jpg',
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Premium smartwatch with health tracking features.',
    category: 'accessories',
    price: 349.00,
    imageUrl: 'https://example.com/apple_watch_series_9.jpg',
  },
];

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
