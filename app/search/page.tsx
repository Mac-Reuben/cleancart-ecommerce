import { enhancedSearch, EnhancedSearchOutput } from "@/ai/flows/enhanced-search.ts";
import { ProductCard } from "@/components/product-card";
import { getProductById } from "@/lib/products";
import type { Product } from "@/types";
import { Suspense } from 'react';

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

async function SearchResults({ query }: { query: string }) {
  let searchResults: EnhancedSearchOutput = [];
  try {
    searchResults = await enhancedSearch({ query });
  } catch (error) {
    console.error("AI search failed:", error);
  }

  // Enrich AI results with local stock data if available
  const enrichedResults: Product[] = searchResults.map(aiProduct => {
    const localProduct = getProductById(aiProduct.name.toLowerCase().replace(/ /g, '-')); // A simple way to try and match
    return {
      id: localProduct?.id || aiProduct.name.toLowerCase().replace(/ /g, '-'),
      name: aiProduct.name,
      description: aiProduct.description,
      category: aiProduct.category,
      price: aiProduct.price,
      imageUrl: localProduct?.imageUrl || 'https://placehold.co/600x400.png', // Fallback image
      stock: localProduct?.stock ?? 1, // Assume in stock if not found locally
    };
  });


  return (
    <>
      {enrichedResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {enrichedResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center col-span-full py-16 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No products found</h2>
          <p className="text-muted-foreground">
            We couldn't find any products matching your search for "{query}".
          </p>
        </div>
      )}
    </>
  );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">
        Search Results for "{query}"
      </h1>
      <Suspense fallback={<p>Loading search results...</p>}>
        {query ? <SearchResults query={query} /> : <p>Please enter a search term.</p>}
      </Suspense>
    </div>
  );
}
