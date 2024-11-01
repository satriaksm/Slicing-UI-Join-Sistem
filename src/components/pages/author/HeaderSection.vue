<script setup>
import ProfilePicture from '@/assets/images/Author/Author.png';
import {ref} from 'vue';

</script>
<template>
    <div class="bg-lightergrey">
      <div class="max-w-screen-2xl mx-auto ">
        <div class="relative flex gap-12 max-w-7xl mx-auto py-32">
            <div>
                <img :src="ProfilePicture" alt="author-image">     
            </div>
            <div>
                <h1 class="h1 text-darkblue mb-6 max-w-4xl tracking-tighter">Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
                <p class="body1 text-mediumgrey mb-10 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
            </div>
            <div class="absolute bg-yellow h-6 w-full bottom-0 left-0"></div>
        </div>
      </div>
     </div>
</template>