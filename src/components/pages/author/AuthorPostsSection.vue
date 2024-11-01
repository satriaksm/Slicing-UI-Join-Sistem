<script setup>
import Post1 from '@/assets/images/Author/Skyscraper.png';
import Post2 from '@/assets/images/Author/Post-image.png';
import Posts from '@/components/ui/HorizontalImagePost.vue'; 

import {ref} from 'vue';

const posts=ref([
    {id:1, category:"BUSINESS", title:"Font sizes in UI design: The complete guide to follow", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image:Post1},
    {id:2, category:"ECONOMY", title:"How to build rapport with your web design clients", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image:Post2}
])
</script>
<template>
     <div class="max-w-screen-2xl mx-auto p-32">
        <h1 class="h1 text-darkblue tracking-tighter pb-14">My Posts</h1>
        <div class="flex flex-col gap-16">
            <Posts
                v-for="post in posts"
                :key="post.id"
                :post="post"
            />
        </div>
     </div>
</template>