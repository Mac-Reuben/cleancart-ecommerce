
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
  const { toast } = useToast();

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const product = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      category: formData.get('category'),
      stock: formData.get('stock'),
    };
    console.log('New Product:', product);
    toast({
      title: "Product Added",
      description: `${product.name} has been added to the store.`,
    });
    (event.target as HTMLFormElement).reset();
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome, info@achetait.com</p>
        </div>
        <Button>Log Out</Button>
      </div>

      <Tabs defaultValue="products">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="settings">Site Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Manage Orders</CardTitle>
              <CardDescription>View and manage customer orders and payments.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Order management interface will be here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>Fill in the details below to add a new product.</CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleAddProduct} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" name="name" placeholder="e.g. iPhone 15 Pro" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" placeholder="A short description of the product" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (GH₵)</Label>
                    <Input id="price" name="price" type="number" step="0.01" placeholder="e.g. 1199.00" required />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input id="stock" name="stock" type="number" placeholder="e.g. 25" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category" required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it-equipment">IT Equipment</SelectItem>
                        <SelectItem value="phones">Phones</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input id="imageUrl" name="imageUrl" placeholder="https://placehold.co/600x400.png" defaultValue="https://placehold.co/600x400.png" required />
                  </div>
                <Button type="submit">Add Product</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Accounts</CardTitle>
                <CardDescription>Update the social media links that appear in the footer.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input id="facebook" placeholder="https://facebook.com/yourpage" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter URL</Label>
                  <Input id="twitter" placeholder="https://twitter.com/yourhandle" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input id="instagram" placeholder="https://instagram.com/yourprofile" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/yourcompany" />
                </div>
                <Button>Save Social Links</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Options</CardTitle>
                <CardDescription>Enable or disable available payment methods.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">MTN MoMo</Label>
                    <p className="text-sm text-muted-foreground">Accept payments via MTN Mobile Money.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Visa/Mastercard</Label>
                     <p className="text-sm text-muted-foreground">Accept credit and debit card payments.</p>
                  </div>
                   <Switch defaultChecked />
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Pay on Delivery</Label>
                    <p className="text-sm text-muted-foreground">Allow customers to pay upon delivery.</p>
                  </div>
                   <Switch />
                </div>
                 <Button>Save Payment Settings</Button>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Update your business contact details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="info@achetait.com" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="phone">Phone Numbers</Label>
                    <Input id="phone" defaultValue="0204744300 / 0542716433" />
                  </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Office Location</Label>
                    <Textarea id="address" defaultValue="123 Tech Lane, Accra, Ghana" />
                </div>
                <Button>Save Contact Info</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
