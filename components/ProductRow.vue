<template>
    <div class="product__row">
        <p class="product__id">{{ product.id + " - " + product.title }}</p>
        <div class="product__update">
            <button @click="increaseQuantity">+</button>
            <input type="text" v-model="quantity">
            <button @click="decreaseQuantity">-</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ["product"],
    data() {
        return {
            quantity: ref(0),
        };
    },
    methods: {
        increaseQuantity() {
            this.quantity++;
            this.saveQty();
        },
        decreaseQuantity() {
            if (this.quantity > 0) {
                this.quantity--;
                this.saveQty();
            }
        },
        async saveQty() {
            try {
                const nuxtApp = useNuxtApp()
                const { $redis } = nuxtApp

                await $redis.set(this.product.id, this.quantity);
                console.log("Quantité enregistrée dans Redis avec succès");
            } catch (error) {
                console.error("Erreur lors de l'enregistrement de la quantité dans Redis", error);
            }
        },
        async loadQty() {
            try {
                const nuxtApp = useNuxtApp()
                const { $redis } = nuxtApp

                const value = await $redis.get(this.product.id);
                if (value !== null) {
                    this.quantity = parseInt(value);
                }
            } catch (error) {
                console.error("Erreur lors du chargement de la quantité depuis Redis", error);
            }
        }
    },
    mounted() {
        this.loadQty();
    },
};
</script>

<style scoped>
.product__row {
    display: flex;
    justify-content: space-between;

    width: 70%;
}

input {
    color: black;
    width: 6rem;
    margin: 0 2rem;
}

button {
    color: black;
    width: 2rem;
    background: white;
    border-radius: .5rem;
}
</style>
