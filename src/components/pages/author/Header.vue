<script setup>
import ProfilePicture from '@/assets/images/Author/Author.png';

</script>
<template>
    <div class="bg-lightergrey">
      <div class="max-w-screen-2xl mx-auto ">
        <div class="relative flex gap-12 max-w-7xl mx-auto py-32">
            <div>
                <img :src="ProfilePicture" alt="author-image">     
            </div>
            <div>
                <h1 class="font-sen text-h1 leasing-h1 font-bold text-darkblue mb-6 max-w-4xl tracking-tighter">Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
                <p class="font-inter text-body1 leasing-body1 font-normal text-mediumgrey mb-10 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
            </div>
            <div class="absolute bg-yellow h-6 w-full bottom-0 left-0"></div>
        </div>
      </div>
     </div>
</template>