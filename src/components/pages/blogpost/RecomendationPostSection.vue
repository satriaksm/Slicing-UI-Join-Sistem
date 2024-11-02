<script setup>
import Post1 from '@/assets/images/Blog Post/post/post1.png';
import Post2 from '@/assets/images/Blog Post/post/post2.png';
import Post3 from '@/assets/images/Blog Post/post/post3.png';

import Posts from '@/components/ui/VerticalImagePost.vue'; 
import { ref } from 'vue';
const posts=ref([
  {id:1, author: "John Deo", date: "Aug 23, 2021", title: "A UX Case Study Creating a Studious Environment for Students:", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", image: Post1 },
  {id:2, author: "John Deo", date: "Aug 23, 2021", title: "A UX Case Study Creating a Studious Environment for Students:", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", image: Post2 },
  {id:3, author: "John Deo", date: "Aug 23, 2021", title: "A UX Case Study Creating a Studious Environment for Students:", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", image: Post3 },
])
</script>
<template>
        <div class="max-w-screen-2xl mx-auto px-16 pb-20 border-b mb-16">
          <h2 class="h2 text-darkblue tracking-tighter mb-16">What to read next</h2>
          <div class="flex justify-between">
            <Posts 
            v-for="post in posts"
            :key="post.id"
            :post="post" />
          </div>
     </div>
</template>