<script setup>
import Posts from '@/components/ui/HorizontalImagePost.vue';

defineProps({
  posts: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="max-w-screen-2xl mx-auto p-32">
    <h1 class="h1 text-darkblue tracking-tighter pb-14">My Posts</h1>
    <div class="flex flex-col gap-4">
      <Posts
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>
