// src/stores/products.ts
import { writable } from 'svelte/store';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export const products = writable<Product[]>([]);
export const categories = writable<string[]>([]);

export async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data: Product[] = await res.json();
    products.set(data);
}

export async function fetchCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data: string[] = await res.json();
    categories.set(data);
}
