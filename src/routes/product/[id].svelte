<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { Product } from '../../stores/products';
  
    let product: Product | null = null;
  
    onMount(async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${$page.params.id}`);
      product = await res.json();
    });
  </script>
  
  {#if product}
  <div class="p-4">
    <img src={product.image} alt={product.title} class="w-full h-48 object-cover"/>
    <h1 class="text-2xl font-bold">{product.title}</h1>
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
  {:else}
  <p>Loading...</p>
  {/if}
  