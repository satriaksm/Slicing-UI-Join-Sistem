<script setup>
import Button from '@/components/ui/Button.vue';

defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>
<template>
    <div class="border p-8 border-mediumgrey/10">
        <img :src="post.image" alt="post-image">
        <p class="font-inter text-label leading-label font-normal text-darkgrey my-6">By <span class="text-yellow">{{ post.author }}</span>   l   {{post.date}}</p>
        <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue mb-6">{{ post.title }}</h3>
        <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey mb-10">{{post.content}}</p>
        <Button variant="primary"  @click="handlePrimaryClick">
                Read More >
        </Button>
  </div>
</template>

