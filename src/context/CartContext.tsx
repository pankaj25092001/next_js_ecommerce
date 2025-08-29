"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.slug === product.slug);
      if (existing) {
        // Increase quantity if already in cart
        return prevItems.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      // Add new product with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(slug: string) {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
