<script setup>
import FeaturedPostImage from '@/assets/images/Home/Buildings.png';

import { ref,computed } from 'vue';
import PostCard from '@/components/ui/HorizontalPost.vue'; 
import FeaturedPost from '@/components/ui/FeaturedPost.vue'; 



// Data post
const allPosts = ref([
  { id: 1, author: 'John Doe', date: 'May 23, 2022', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', image: FeaturedPostImage },
  { id: 2, author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
  { id: 3, author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
  { id: 4, author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
  { id: 5, author: 'John Doe', date: 'Aug 23, 2021', title: '8 Figma design systems that you can download for free today.' },
  // Tambahkan penulis lainnya sesuai kebutuhan
]);

const featuredPost = computed(() => allPosts.value[0]);
const posts = computed(() => allPosts.value.slice(1));

</script>
<template>
     <div class="max-w-screen-2xl mx-auto px-16 py-36">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-8">
            <h2 class="h2 text-darkblue mb-10">Featured Post</h2>
            <FeaturedPost v-if="featuredPost" :post="featuredPost"/>
          </div>
          <div class="col-span-4">
            <div class="flex justify-between items-center">
            <h2 class="h2 font-bold text-darkblue">All Post</h2>
            <a href="" class="body1 font-normal text-yellow">View All</a>
            </div>
            <PostCard
              v-for="post in posts"
              :key="post.id"
              :post="post"
            />
          </div>
        </div>
     </div>
</template>