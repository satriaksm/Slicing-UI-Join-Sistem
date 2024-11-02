<script setup>
defineProps({
  categoryName: {
    type: String,
    required: true
  },
  categoryDescription: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="bg-lightergrey">
    <div class="max-w-screen-2xl mx-auto px-16 py-20">
      <div class="text-center">
        <h1 class="display text-darkblue mb-4 capitalize">{{ categoryName }}</h1>
        <p class="body1 text-mediumgrey mb-10 max-w-[515px] mx-auto">{{ categoryDescription }}</p>
        <p class="body1 text-darkblue uppercase tracking-widest">Blog > {{ categoryName }}</p>
      </div>
    </div>
  </div>
</template>
