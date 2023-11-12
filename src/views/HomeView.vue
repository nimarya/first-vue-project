<script setup>
import { useStorage } from '../composables/useStorage'

let name = useStorage('name');
let hometown = useStorage('hometown');

</script>

<template>
  <main>
    <p>
      What is your name? <input type="text" v-model="name">
      <p>My name is {{ name ? name : 'Maria' }}.</p>
    </p>
    <p>
      What is your hometown? <input type="text" v-model="hometown">
      <p>My hometown is {{ hometown ? hometown : 'Moscow' }}.</p>
    </p>

  </main>
</template>
