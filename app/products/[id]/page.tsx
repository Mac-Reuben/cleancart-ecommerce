
import { getProductById, getProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { AddToCartButton } from './add-to-cart-button';
import { Separator } from '@/components/ui/separator';

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const averageRating = product.reviews
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="aspect-square relative rounded-lg overflow-hidden border shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={`${product.category} ${product.name.split(' ')[0]}`}
            />
          </div>
          {/* A gallery could be implemented here */}
        </div>
        <div className="flex flex-col">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{product.category}</Badge>
            {product.reviews && product.reviews.length > 0 && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">{averageRating.toFixed(1)}</span>
                <span className="text-muted-foreground">({product.reviews.length} reviews)</span>
              </div>
            )}
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 flex-grow">{product.description}</p>
          
          <Separator className="my-6" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="text-3xl font-bold text-primary">
              GH₵{product.price.toFixed(2)}
            </div>
            <p className={`font-semibold text-lg ${product.stock > 0 ? 'text-green-600' : 'text-destructive'}`}>
              {product.stock > 10 && 'In stock'}
              {product.stock > 0 && product.stock <= 10 && `Low stock (${product.stock} left)`}
              {product.stock === 0 && 'Out of stock'}
            </p>
          </div>
          
          <AddToCartButton product={product} />
        </div>
      </div>
      
       <div className="mt-12 md:mt-16">
            <h3 className="font-headline text-2xl font-bold mb-6">Customer Reviews</h3>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center mb-2">
                       <div className="flex">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                       </div>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">There are no reviews for this product yet.</p>
            )}
        </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}
