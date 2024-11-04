<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>
<template>
    <div class="flex items-center hover:bg-lightyellow mb-0 p-8  transition duration-200">
          <img :src="post.image" alt="post1">
          <div class="p-8 max-w-5xl">
            <h6 class="h6 text-yellow tracking-widest uppercase mb-4">{{post.category}}</h6>
            <h2 class="h2 text-darkblue mb-4 tracking-tighter ">{{post.title}}</h2>
            <p class="body1 text-mediumgrey">{{post.content}}</p>
          </div>
        </div>
</template>