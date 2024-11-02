<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>
<template>
            <a href="#" class="max-w-[405px] hover:bg-lightyellow p-8 transition duration-300 ">
              <img :src="post.image" :alt="post.image" class="">
              <p class="label text-darkgrey mb-3 mt-6">By <span class="text-yellow">{{post.author}}</span>   l   {{post.date}} </p>
              <h3 class="h3 text-darkblue tracking-tight mb-4">{{post.title}}</h3>
              <p class="body1 text-mediumgrey">{{post.content}}</p>
            </a>
</template>