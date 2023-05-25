<script >
export default {
    props: ["items"],
    data: () => ({
        isOpen: ref(false),
       

    }),

    computed: {
        total() {
            return this.items.reduce((total, item) => total + item.price, 0);
        }
    },

};


</script>

<template>
    <div class="panier">
        <UButton label="Panier" @click="isOpen = true" />
        <USlideover v-model="isOpen">
            <div v-for="item in items" :key="item.id" class="panier__item">
                <p class="panier__item__title">{{ item.title }}</p>
                <p class="panier__item__price">{{ item.price }}</p>
            </div>

            <p class="panier__total">Total : {{ total }}</p>
        </USlideover>
    </div>
</template>




<style  scoped>
.panier {
    position: fixed;
    top: 0;
    right: 10rem;

    z-index: 1;

}

.panier__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>