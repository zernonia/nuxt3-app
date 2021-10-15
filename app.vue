<template>
  <div class="">
    <div class="p-8">
      <h1 class="py-0 my-0 text-4xl font-bold">Hi</h1>
      <h2 class="text-2xl font-bold">Supabase async function:</h2>
      <p>
        {{ response }}
      </p>

      <h2 class="text-2xl font-bold">$fetch async function</h2>
      <p>
        {{ responseTodo }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from "./supabase"

const response = await useAsyncData("country", () => supabase.from("countries").select("*"))

const responseTodo = await useAsyncData("todo", () => $fetch("https://jsonplaceholder.typicode.com/todos/1"))
</script>
