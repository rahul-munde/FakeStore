<!-- src/App.svelte
<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { fetchProducts, products } from './stores/products';
    import ProductGrid from './components/ProductGrid.svelte';
    import Cart from './components/Cart.svelte';
    import type { Product } from './stores/products';

    // Define productList with correct type
    let productList: Product[] = [];

    onMount(async () => {
        try {
            const data = await fetchProducts(); // Assuming fetchProducts returns Promise<Product[]>
            products.set(data); // Set fetched products into the writable store
        } catch (error) {
            console.error('Error fetching products:', error);
        }

        const unsubscribe = products.subscribe(value => {
            productList = value;
        });

        onDestroy(() => {
            unsubscribe(); // Unsubscribe from products store
        });
    });
</script>

<div>
    <ProductGrid {products=$products} />
    <Cart />
</div>

<style>
    /* Your global styles here */
</style> -->
