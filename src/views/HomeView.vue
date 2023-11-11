<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue';

let name = ref(localStorage.getItem('name'));
let hometown = ref(localStorage.getItem('hometown'));

function write(key, value) {
  localStorage.setItem(key, value);
}

</script>

<template>
  <main>
    <p>
      What is your name? <input type="text" v-model="name" @input="write('name', name)">
      <p>My name is {{ name ? name : 'Maria' }}.</p>
    </p>

    <p>
      What is your hometown? <input type="text" v-model="hometown" @input="write('hometown', hometown)">
      <p>I am from {{ hometown ? hometown : 'Moscow' }}.</p>
    </p>
  </main>
</template>
