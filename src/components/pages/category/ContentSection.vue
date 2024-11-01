<script setup>
import Post1 from '@/assets/images/component/post/post1.png';
import Icon1 from '@/assets/images/component/Categories icon/Business.png';
import Icon2 from '@/assets/images/component/Categories icon/Startup.png';
import Icon3 from '@/assets/images/component/Categories icon/Economy.png';
import Icon4 from '@/assets/images/component/Categories icon/Technology.png';

import Posts from '@/components/ui/HorizontalImagePost.vue'; 
import { ref } from 'vue';
const posts = ref([
  {id: 1, category: 'Business', title: 'Design tips for designers that cover everything you need', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
  {id: 2, category: 'Business', title: 'How to build rapport with your web design clients', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
  {id: 3, category: 'Business', title: 'Logo design trends to avoid in 2022', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
  {id: 4, category: 'Business', title: '8 Figma design systems you can download for free today', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
  {id: 5, category: 'Business', title: 'Font sizes in UI design: The complete guide to follow', content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", image: Post1},
])

import CategoryCard from '@/components/ui/CategoryCard.vue'; 
const categories = ref([
  {id:1, name: 'Business',icon: Icon1, link: '/category'},
  {id:2, name: 'Startup',  icon: Icon2, link: '/category'},
  {id:3, name: 'Economy',  icon: Icon3, link: '/category'},
  {id:4, name: 'Technology',  icon: Icon4, link: '/category'},
  // Tambahkan penulis lainnya sesuai kebutuhan
]);

const tags = ref([
    {id:1, name: 'Business'},
    {id:2, name: 'Experience'},
    {id:3, name: 'Screen'},
    {id:4, name: 'Technology'},
    {id:5, name: 'Marketing'},
    {id:6, name: 'Life'},
]);
</script>
<template>
    <div class="grid grid-cols-12 max-w-screen-2xl mx-auto px-8 py-36">
        <div class="col-span-9">
            <Posts
            v-for="post in posts"
            :key="id"
            :post="post"/>
        </div>
        <div class="col-span-3 ps-16">
          <h2 class="h2 text-darkblue text-left mb-8">Catagories</h2>
          <div class="flex justify-between flex-col gap-4 mb-16">
            <CategoryCard
              extraClass="flex gap-4 items-center"
              v-for="category in categories"
              :key="category.id"
              :category="category"
            />
          </div>
          <h2 class="h2 text-darkblue text-left mb-8">All Tags</h2>
          <div class="flex flex-wrap gap-4">
            <div v-for="tag in tags" :key="tag.id" class="label text-mediumgrey border-2 rounded-full py-3 px-4 flex-grow text-center">{{ tag.name }}</div>
          </div>
        </div>
    </div>
</template>