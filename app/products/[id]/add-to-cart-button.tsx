
"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
    const { addItem } = useCart();

    return (
        <Button 
            size="lg" 
            onClick={() => addItem(product)} 
            disabled={product.stock === 0}
            className="w-full md:w-auto"
        >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
    );
}
