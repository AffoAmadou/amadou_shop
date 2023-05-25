<template>
  <div class="product">
    <figure class="product__media">
      <img :src=product.image alt="" class="product__media__image">
    </figure>
    <h2 class="product__title">{{ product.title }}</h2>
    <p class="product__description">{{ product.description }}</p>
    <div class="product__price__wrapper">
      <button class="product__btn" @click="addToCart">ADD TO CARD</button>
      <p class="product__price">{{ product.price }}</p>
    </div>
  </div>
</template>


<script >

export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
    }
  }


}


</script>



<style scoped>
.product {
  height: 40rem;
  width: 15rem;

  border: 1px solid black;
  flex-basis: 1;

  padding: 3rem;


  flex: 0 0 calc(33.3333% - 1rem);
  margin: .5rem;
  color: black;

}

.product__media {
  height: 15rem;
  width: 100%;

  position: relative;
}

.product__media__image {
  height: 100%;
  width: 100%;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
}

.product__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1rem 0;
  height: 4rem;
}

.product__price__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product__description{
  font-size: .9rem;
  border: 1px solid black;
  line-height: 1.2rem;

  height: 11rem;
  margin-bottom: .7rem;
}

.product__btn {
  background-color: black;
  color: white;
  padding: .5rem 1rem;
  border: none;
  border-radius: 5px;
}


</style>