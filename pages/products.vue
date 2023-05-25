<template>
    <div>
        <Slideover :items="cart" />

        <h1 v-if="loading">CHARGEMENT</h1>

        <div v-else class="products">
            <div class="mail">{{ mail }}</div>
            <input class="search" type="text" v-model="searchQuery" placeholder="Recherche" />
            <div class="products__wrapper">
                <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"
                    @add-to-cart="handleAddToCart" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import Slideover from '@/components/Slideover.vue';


definePageMeta({
    layout: 'base'
});

const products = ref([]);
const cart = ref([]);
const loading = ref(false);
const searchQuery = ref('');

const cookieMail = useCookie('email');
const mail = ref(cookieMail.value);


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

const filteredProducts = computed(() => {
    return products.value.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>
  
<style scoped>
.products {
    display: grid;
    place-items: center;
    background-color: white;

    color: black;

    padding-top: 9rem;
}

.products__wrapper {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.search {
    border: 1px solid black;

    color: black;
}
</style>
  