
import { enhancedSearch, EnhancedSearchOutput } from "@/ai/flows/enhanced-search";
import { ProductCard } from "@/components/product-card";
import { getProductById, getProducts } from "@/lib/products";
import type { Product } from "@/types";
import { Suspense } from 'react';

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

async function SearchResults({ query }: { query: string }) {
  let aiResults: EnhancedSearchOutput = [];
  try {
    aiResults = await enhancedSearch({ query });
  } catch (error) {
    console.error("AI search failed:", error);
  }

  const allProducts = getProducts();
  const searchResults: Product[] = [];

  if (aiResults.length > 0) {
    // Find the full product details from our local data based on the name from the AI result.
    // This is more robust than relying on the AI to return every single field correctly.
    for (const aiProduct of aiResults) {
        const foundProduct = allProducts.find(p => p.name.toLowerCase() === aiProduct.name.toLowerCase());
        if(foundProduct) {
            searchResults.push(foundProduct);
        }
    }
  }


  return (
    <>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {searchResults.map((product) => (
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

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">
        Search Results {query && `for "${query}"`}
      </h1>
      <Suspense fallback={<p>Loading search results...</p>}>
        {query ? <SearchResults query={query} /> : <p>Please enter a search term.</p>}
      </Suspense>
    </div>
  );
}
