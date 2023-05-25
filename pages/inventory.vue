<template>
    <h1 v-if="loading">CHARGEMENT</h1>

    <div v-else class="products">
        <div class="products__wrapper">
            <ProductRow v-for="product in products" :key="product.id" :product="product" @add-to-cart="handleAddToCart" />
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import ProductRow from '@/components/ProductRow.vue';

definePageMeta({
    layout: 'base'
});

const products = ref([]);
const cart = ref([]);
const loading = ref(false);

const fetchProducts = async () => {
    try {
        loading.value = true;
        const productsData = await fetch('https://fakestoreapi.com/products');
        const productsResponse = await productsData.json();
        products.value = productsResponse;
        loading.value = false;
    } catch (error) {
        console.error('Erreur lors du chargement des produits', error);
        loading.value = false;
    }
};

const handleAddToCart = (product) => {
    cart.value.push(product);
};

onMounted(() => {
    fetchProducts();
});
</script>
  
<style>
/* Vos styles CSS ici */
</style>
  