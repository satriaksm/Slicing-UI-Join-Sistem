<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="bg-lightergrey">
    <div class="max-w-screen-2xl mx-auto">
      <div class="relative flex gap-12 max-w-7xl mx-auto py-32">
        <div>
          <img :src="image" :alt="name">     
        </div>
        <div>
          <h1 class="h1 text-darkblue mb-6 max-w-4xl tracking-tighter">
            Hey there, I'm {{ name }} and welcome to my Blog
          </h1>
          <p class="body1 text-mediumgrey mb-10 max-w-3xl">{{ description }}</p>
        </div>
        <div class="absolute bg-yellow h-6 w-full bottom-0 left-0"></div>
      </div>
    </div>
  </div>
</template>