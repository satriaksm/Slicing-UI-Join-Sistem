<script setup>
import Post1 from '@/assets/images/component/post/post1.png';
import Post2 from '@/assets/images/component/post/post2.png';
import Post3 from '@/assets/images/component/post/post3.png';
import Post4 from '@/assets/images/component/post/post4.png';
import Posts from '@/components/ui/HorizontalImagePost.vue'; 
import { ref, computed } from 'vue';

// Data posts
const posts = ref([
  {id: 1, category: 'Startup', title: 'Design tips for designers that cover everything you need', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
  {id: 2, category: 'Business', title: 'How to build rapport with your web design clients', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post2},
  {id: 3, category: 'Startup', title: 'Logo design trends to avoid in 2022', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post3},
  {id: 4, category: 'TECHNOLOGY', title: '8 Figma design systems you can download for free today', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post4},
  {id: 5, category: 'ECONOMY', title: 'Font sizes in UI design: The complete guide to follow', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
  {id: 6, category: 'Business', title: 'How to build rapport with your web design clients', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post2},
]);

// Pagination configuration
const itemsPerPage = 3;
const currentPage = ref(1);

// Computed properties for pagination
const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage));

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return posts.value.slice(start, end);
});

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === totalPages.value);

// Navigation methods
const nextPage = () => {
  if (!isLastPage.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (!isFirstPage.value) {
    currentPage.value--;
  }
};
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-16 py-36">
    <div class="border-b pb-10">
      <h1 class="h1 text-darkblue tracking-tighter">All posts</h1>
    </div>
    
    <div class="pt-14 pe-16 flex flex-col">
      <Posts
        v-for="post in paginatedPosts"
        :key="post.id"
        :post="post"
      />
    </div>
    
    <div class="flex justify-center items-center gap-8 mt-16">
      <button 
        @click="prevPage"
        :class="[
          'font-bold',
          isFirstPage ? 'h4 text-mediumgrey' : 'h3 text-darkblue'
        ]"
      >
        &lt; Prev
      </button>
      
      <button 
        @click="nextPage"
        :class="[
          'font-bold',
          isLastPage ? 'h4 text-mediumgrey' : 'h3 text-darkblue'
        ]"
      >
        Next &gt;
      </button>
    </div>
  </div>
</template>