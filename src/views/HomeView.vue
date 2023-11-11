<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue';

let name = ref();
let hometown = ref();

</script>

<template>
  <main>
    <p>
      What is your name? <input type="text" v-model="name">
      <p>My name is {{ name ? name : 'Maria' }}.</p>
    </p>

    <p>
      What is your hometown? <input type="text" v-model="hometown">
      <p>I am from {{ hometown ? hometown : 'Moscow' }}.</p>
    </p>
  </main>
</template>
