<!-- 
<script lang="ts">
    import { cart, removeFromCart } from '../stores/cart';
    import type { Product } from '../stores/products';
    import { onDestroy } from 'svelte';

    let cartItems: Product[] = [];

    // Subscribe to the cart store
    const unsubscribe = cart.subscribe(value => {
        cartItems = value;
    });

    // Clean up the subscription when the component is destroyed
    onDestroy(unsubscribe);
</script>

<div>
    <h2>Shopping Cart</h2>
    <ul>
        {#each cartItems as item (item.id)}
            <li>
                {item.title} - Quantity: {item.quantity}
                <button on:click={() => removeFromCart(item.id)}>Remove</button>
            </li>
        {/each}
    </ul>
</div> -->
