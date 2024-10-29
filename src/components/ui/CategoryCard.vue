<script setup>


defineProps({
  category: {
    type: Object,
    required: true
  }
});
</script>
<template>
            <a href="#" class="p-8 border max-w-80 hover:bg-blue group transition duration-300">
              <img :src="category.icon" alt="icon1" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue group-hover:text-white mb-3 transition duration-300">{{ category.name }}</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey group-hover:text-white transition duration-300">{{category.description}}</p>
            </a>
</template>