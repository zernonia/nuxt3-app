<template>
  <div>
    <div class="bg-dark-300">
      <h1 class="py-0 my-0 text-4xl font-bold">Hi</h1>
      <input type="text" v-model="name" placeholder="name" class="text-2xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
const name = ref("123")
</script>
