<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, watch } from 'vue';

let name = ref(localStorage.getItem('name'));
let hometown = ref(localStorage.getItem('hometown'));

watch(name, (value) => {
  write('name', value);
});

watch(hometown, (value) => {
  write('hometown', value);
});

function write(key, value) {
  localStorage.setItem(key, value);
}

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
