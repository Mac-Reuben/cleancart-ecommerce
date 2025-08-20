
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface PaymentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  paymentMethod: 'momo' | 'card' | 'delivery';
  totalAmount: number;
  onPaymentSuccess: () => void;
}

export function PaymentDialog({ isOpen, onOpenChange, paymentMethod, totalAmount, onPaymentSuccess }: PaymentDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [momoNumber, setMomoNumber] = useState("");

  const handlePayment = () => {
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      onPaymentSuccess();
    }, 2000); // 2-second delay
  };

  const renderMomoForm = () => (
    <div className="space-y-4">
      <DialogDescription>
        You will receive a payment prompt on your phone. Please enter your PIN to complete the payment of <strong>GH₵{totalAmount.toFixed(2)}</strong>.
      </DialogDescription>
      <div className="space-y-2">
        <Label htmlFor="momo-number">MTN Mobile Money Number</Label>
        <Input id="momo-number" type="tel" placeholder="024xxxxxxx" value={momoNumber} onChange={(e) => setMomoNumber(e.target.value)} />
      </div>
    </div>
  );

  const renderCardForm = () => (
    <div className="space-y-4">
        <DialogDescription>
            Please enter your card details to pay <strong>GH₵{totalAmount.toFixed(2)}</strong>. This is a simulation, do not enter real card information.
        </DialogDescription>
        <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="**** **** **** 1234" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
            </div>
        </div>
    </div>
  );
  
  const isMomo = paymentMethod === 'momo';

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isMomo ? 'MTN MoMo Payment' : 'Card Payment'}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {isMomo ? renderMomoForm() : renderCardForm()}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>Cancel</Button>
          <Button onClick={handlePayment} disabled={isLoading || (isMomo && !momoNumber)}>
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                </>
            ) : isMomo ? 'Confirm Payment' : `Pay GH₵${totalAmount.toFixed(2)}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

