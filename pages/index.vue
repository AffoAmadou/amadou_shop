<template>
  <div class="email grid min-h-screen place-content-center">
    <div class="text-center text-gray-400">
      <UInput appearance="white" size="xl" placeholder="Email" type="email" @keyup.enter="setCookie(emailInput)"
        v-model="emailInput" name="email" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emailInput = ref('');
const routes = useRouter();
const emailCookie = useCookie('email');

function setCookie(cookie) {
  emailCookie.value = cookie;
  console.log(emailCookie.value);
  navigateTo('/products');
}
</script>


<style>
.email{
  background-color: lightcyan;
}

</style>