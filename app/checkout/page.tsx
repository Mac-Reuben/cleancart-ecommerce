
"use client";

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PaymentDialog } from '@/components/payment-dialog';

const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  city: z.string().min(2, "City must be at least 2 characters."),
  country: z.string().min(2, "Country must be at least 2 characters."),
  paymentMethod: z.enum(['momo', 'card', 'delivery']).refine((val) => val !== undefined, {
    message: "You need to select a payment method.",
  }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormValues | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      city: "Accra",
      country: "Ghana",
      paymentMethod: "momo",
    },
  });

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading checkout...</p>
      </div>
    );
  }
  
  const shippingCost = items.length > 0 ? 15.00 : 0;
  const total = totalPrice + shippingCost;

  const handleSuccessfulOrder = () => {
    console.log("Order submitted:", formData, items);
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. Your order is being processed.",
    });
    clearCart();
    router.push('/');
  };

  const onSubmit = (data: CheckoutFormValues) => {
    setFormData(data);
    if (data.paymentMethod === 'delivery') {
      handleSuccessfulOrder();
    } else {
      setIsPaymentDialogOpen(true);
    }
  };

  if (items.length === 0) {
      return (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Checkout</h1>
          <p className="mb-4">Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
          <Button asChild>
            <Link href="/">Return to Shop</Link>
          </Button>
        </div>
      )
  }

  return (
    <>
    {formData && (
        <PaymentDialog
            isOpen={isPaymentDialogOpen}
            onOpenChange={setIsPaymentDialogOpen}
            paymentMethod={formData.paymentMethod}
            totalAmount={total}
            onPaymentSuccess={handleSuccessfulOrder}
        />
    )}
    <div className="container mx-auto px-4 py-8">
       <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Shipping Information</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                     <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Tech Lane" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Accra" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="Ghana" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Separator />

                  <div className="space-y-4">
                     <h3 className="text-lg font-medium">Payment Method</h3>
                     <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                               <RadioGroup 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                               >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="momo" id="momo" className="peer sr-only" />
                                  </FormControl>
                                  <FormLabel htmlFor="momo" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                    MTN MoMo
                                  </FormLabel>
                                </FormItem>
                                 <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                  </FormControl>
                                  <FormLabel htmlFor="card" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                    Visa/Mastercard
                                  </FormLabel>
                                </FormItem>
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                                  </FormControl>
                                  <FormLabel htmlFor="delivery" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                    Pay on Delivery
                                  </FormLabel>
                                </FormItem>
                               </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                  <Button type="submit" className="w-full" size="lg">Place Order</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
           <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                    {items.map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                           <div className="flex items-center gap-2">
                             <div className="relative h-12 w-12 rounded-md overflow-hidden">
                                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                             </div>
                             <div>
                                <span>{item.name}</span>
                                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                             </div>
                           </div>
                           <span>GH₵{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>GH₵{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>GH₵{shippingCost.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>GH₵{total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
    </>
  );
}
