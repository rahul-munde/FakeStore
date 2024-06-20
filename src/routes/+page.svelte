<script lang="ts">
    import { products, categories, fetchProducts, fetchCategories } from '../stores/products';
    import ProductGrid from '../components/ProductGrid.svelte';
    import { onMount } from 'svelte';
    import type { Product } from '../stores/products';
  
    let selectedCategory = 'all';
    let searchQuery = '';
    let productList: Product[] = [];
  
    onMount(() => {
        fetchProducts();
        fetchCategories();
    });
  
    products.subscribe(value => {
        productList = value;
    });
  
    $: filteredProducts = productList.filter(product =>
        (selectedCategory === 'all' || product.category === selectedCategory) &&
        (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
</script>
  
<div>
    <input
        type="text"
        placeholder="Search products..."
        bind:value={searchQuery}
        class="mb-4 p-2 border"
    />
    <select bind:value={selectedCategory} class="mb-4">
        <option value="all">All Categories</option>
        {#each $categories as category}
            <option value={category}>{category}</option>
        {/each}
    </select>
  
    <ProductGrid products={filteredProducts} />
</div>
