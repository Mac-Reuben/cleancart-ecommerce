
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/products';
import type { Product } from '@/types';

export default function Home() {
  const products = getProducts();
  const categories = [
    { name: 'IT equipment', id: 'it-equipment' },
    { name: 'phones', id: 'phones' },
    { name: 'accessories', id: 'accessories' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Welcome to Achetait</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Discover the latest in tech. High-quality IT equipment, smartphones, and accessories all in one place.</p>
      </section>

      {categories.map((category) => {
        const categoryProducts = products.filter((p) => p.category.toLowerCase().replace(' ', '-') === category.id);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="mb-16 scroll-mt-20">
            <h2 className="font-headline text-3xl font-bold mb-6 border-b-2 border-primary pb-2 capitalize">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
