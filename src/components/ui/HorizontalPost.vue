<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>
<template>
            <a href="#" class="flex flex-col gap-0 mt-10 hover:bg-lightyellow transition duration-300">
              <div class="p-4">
                <p class="label text-darkgrey mb-3">By <span class="text-yellow">{{ post.author }}</span>   l   {{post.date}}</p>
                <h4 class="h4 text-darkblue max-w-[369px]">{{post.title}}</h4>
              </div>
            </a>
</template>