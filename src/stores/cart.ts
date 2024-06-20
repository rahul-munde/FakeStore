import { writable } from 'svelte/store';
import type { Product } from './products';

export interface CartItem extends Product {
  quantity: number;
}

const storedCart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

export const cart = writable<CartItem[]>(storedCart);

cart.subscribe(value => {
  localStorage.setItem('cart', JSON.stringify(value));
});

export function addToCart(product: Product) {
  cart.update(items => {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    return items;
  });
}

export function removeFromCart(productId: number) {
  cart.update(items => items.filter(item => item.id !== productId));
}
