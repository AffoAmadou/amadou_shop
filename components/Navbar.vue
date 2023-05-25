<template>
    <Nav class="nav">
        <div class="nav__wrapper">
            <!-- <nuxt-link to="/">Home</nuxt-link> -->
            <nuxt-link to="/products">Products</nuxt-link>
            <nuxt-link to="/inventory">Inventory</nuxt-link>
        </div>

    </Nav>
</template>

<script setup>
const emailCookie = useCookie('email')

const myMail = emailCookie.value

</script>


<style scoped>
.nav {
    width: 100vw;
    height: 4rem;

    background-color: rgb(0, 0, 0);

    position: fixed;
    top: 0;
    left: 0;

}
.nav__wrapper {
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: white;
}
</style>