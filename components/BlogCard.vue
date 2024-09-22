<template>
  <div class="bg-[#2a3534] p-4 rounded-lg shadow-lg transition-transform duration-300 w-[300px] hover:scale-105">
    <img :src="blog.img" alt="Blog Image" class="w-full h-40 object-cover rounded-t-lg" />
    <h3 class="text-xl font-bold mt-2">{{ blog.title }}</h3>
    <p class="text-gray-300 mt-1">{{ blog.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blog: {
    title: string;
    img: string;
    description: string;
  };
}>();
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
