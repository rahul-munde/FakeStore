<script lang="ts">
  import type { Product } from '../stores/products';

  export let products: Product[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {#each products as product (product.id)}
      <div class="border p-4">
          <img src={product.image} alt={product.title} class="w-full h-48 object-cover"/>
          <h2 class="text-lg font-bold">{product.title}</h2>
          <p>${product.price}</p>
      </div>
  {/each}
</div>
