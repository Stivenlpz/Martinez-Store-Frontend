"use client";

import { useEffect, useState } from "react";
import CartView from "@/components/cart/cart-view";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import { CartType } from "@/types/types";
import { PageLoader } from "@/components/layout/page-loader";

export default function CartPage() {
  const [cart, setCart] = useState<CartType | null>(null);

  const fetchCart = async () => {
    try {
      const data = await apiFetch("/users/me");
      setCart(data.cart);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching user cart.");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CartView cart={cart} />
    </div>
  );
}
