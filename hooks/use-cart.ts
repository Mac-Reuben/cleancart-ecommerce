"use client"

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CartItem, Product } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string, removeAll?: boolean) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (product.stock === 0) {
          toast({ title: "Item is out of stock", variant: "destructive" });
          return;
        }

        let updatedItems;
        if (existingItem) {
          if (existingItem.quantity >= product.stock) {
            toast({ title: "Cannot add more than available in stock", variant: "destructive" });
            return;
          }
          updatedItems = currentItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          toast({ title: "Item quantity updated" });
        } else {
          updatedItems = [...currentItems, { ...product, quantity: 1 }];
          toast({ title: "Item added to cart" });
        }
        
        set((state) => ({
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        }));
      },

      removeItem: (productId: string, removeAll: boolean = false) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find((item) => item.id === productId);

        if (!itemToRemove) return;

        let updatedItems: CartItem[];
        if (itemToRemove.quantity > 1 && !removeAll) {
          updatedItems = currentItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
           set((state) => ({
              items: updatedItems,
              totalItems: state.totalItems - 1,
              totalPrice: state.totalPrice - itemToRemove.price
            }));
          toast({ title: "Item quantity updated" });
        } else {
          updatedItems = currentItems.filter((item) => item.id !== productId);
           set((state) => ({
              items: updatedItems,
              totalItems: state.totalItems - itemToRemove.quantity,
              totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
            }));
          toast({ title: "Item removed from cart" });
        }
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
        toast({ title: "Cart cleared" });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const newTotalItems = state.items.reduce((total, item) => total + item.quantity, 0);
          const newTotalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
          state.totalItems = newTotalItems;
          state.totalPrice = newTotalPrice;
        }
      },
    }
  )
);

export const useCart = useCartStore;
