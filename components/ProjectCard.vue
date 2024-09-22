<template>
  <div class="bg-[#2a3b3a] justify-between p-4 flex flex-col gap-1 rounded-lg shadow-lg grow-0 flex-1 basis-[300px] transition-transform mix-blend-luminosity hover:mix-blend-normal duration-300 hover:scale-105">
    <div>
      <NuxtImg :src="project.img" :alt="project.description" class="w-full h-32 object-cover rounded-t-md" />
      <h3 class="text-xl font-semibold mt-2">{{ project.title }}</h3>
      <p class="text-sm description">{{ project.description }}</p>
    </div>
    <NuxtLink :to="project.link" class="text-cyan-500 align-bottom hover:underline mt-2 inline-block transition-colors duration-300">Read More</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
// Define props properly
const props = defineProps<{
  project: {
    title: string;
    img: string;
    description: string;
    link: string
  }
}>();
</script>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis */
}

.hover\:scale-105:hover {
  transform: scale(1.05); /* Scale up on hover */
}

.transition-transform {
  transition: transform 0.3s ease; /* Smooth transition for scaling */

}

.transition-colors {
  transition: color 0.3s ease; /* Smooth transition for color changes */
}
</style>
