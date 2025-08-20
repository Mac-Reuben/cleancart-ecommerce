
"use client";

import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { useCart } from '@/hooks/use-cart';
import { useEffect, useState } from 'react';
import { SearchBar } from './search-bar';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const { totalItems } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#it-equipment', label: 'IT Equipment' },
    { href: '/#phones', label: 'Phones' },
    { href: '/#accessories', label: 'Accessories' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center px-8">
            <SearchBar />
        </div>


        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/auth">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {isMounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="/" className="mb-8 block">
                     <Logo />
                  </Link>
                  <div className="mb-8">
                    <SearchBar />
                  </div>
                  <nav className="flex flex-col space-y-4">
                     {navLinks.map(link => (
                       <Link key={link.href} href={link.href} className="text-lg transition-colors hover:text-primary">
                         {link.label}
                       </Link>
                     ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
