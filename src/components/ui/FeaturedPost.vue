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
        <p class="label text-darkgrey my-6">By <span class="text-yellow">{{ post.author }}</span>   l   {{post.date}}</p>
        <h3 class="h3 text-darkblue mb-6">{{ post.title }}</h3>
        <p class="body1 text-mediumgrey mb-10">{{post.content}}</p>
        <Button variant="primary"  @click="handlePrimaryClick">
                Read More >
        </Button>
  </div>
</template>

