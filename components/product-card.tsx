
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation when clicking the button
    e.stopPropagation(); // Stop event bubbling
    addItem(product);
  }

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg h-full group">
       <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${product.category} ${product.name.split(' ')[0]}`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="font-headline text-lg mb-2 leading-tight">
              {product.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto">
          <p className="text-lg font-bold text-primary">GH₵{product.price.toFixed(2)}</p>
          <Button onClick={handleAddToCart} size="icon" aria-label={`Add ${product.name} to cart`}>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
