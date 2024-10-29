<script setup>
import Post1 from '@/assets/images/component/post/post1.png';
import Post2 from '@/assets/images/component/post/post2.png';
import Post3 from '@/assets/images/component/post/post3.png';
import Post4 from '@/assets/images/component/post/post4.png';
</script>
<template>
         <div class="max-w-screen-2xl mx-auto px-8 py-36">
      <div class="border-b pb-10">
        <h1 class="font-sen text-h1 leading-h1 font-bold text-darkblue tracking-tighter">All posts</h1>
      </div>
      <div class="pt-14 pe-16 flex flex-col">
        <div class="flex items-center mb-14">
          <img :src="Post1" alt="post1">
          <div class="p-8 max-w-5xl">
            <h6 class="font-inter text-h6 leading-h6 font-semibold text-yellow tracking-widest uppercase mb-4">Startup</h6>
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4 tracking-tighter ">Design tips for designers that cover everything you need</h2>
            <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div class="flex items-center mb-14">
          <img :src="Post2" alt="post2">
          <div class="p-8 max-w-5xl">
            <h6 class="font-inter text-h6 leading-h6 font-semibold text-yellow tracking-widest uppercase mb-4">BUSINESS</h6>
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4 tracking-tighter ">How to build rapport with your web design clients</h2>
            <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div class="flex items-center mb-14">
          <img :src="Post3" alt="post3">
          <div class="p-8 max-w-5xl">
            <h6 class="font-inter text-h6 leading-h6 font-semibold text-yellow tracking-widest uppercase mb-4">Startup</h6>
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4 tracking-tighter ">Logo design trends to avoid in 2022</h2>
            <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div class="flex items-center mb-14">
          <img :src="Post4" alt="post4">
          <div class="p-8 max-w-5xl">
            <h6 class="font-inter text-h6 leading-h6 font-semibold text-yellow tracking-widest uppercase mb-4">TECHNOLOGY</h6>
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4 tracking-tighter ">8 Figma design systems you can download for free today</h2>
            <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div class="flex items-center ">
          <img :src="Post1" alt="post5">
          <div class="p-8 max-w-5xl">
            <h6 class="font-inter text-h6 leading-h6 font-semibold text-yellow tracking-widest uppercase mb-4">ECONOMY</h6>
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4 tracking-tighter ">Font sizes in UI design: The complete guide to follow</h2>
            <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-8 mt-16">
        <a href="#" class="font-sen text-h4 leading-h4 font-bold text-mediumgrey">< Prev</a>
        <a href="#" class="font-sen text-h3 leading-h3 font-bold text-darkblue">Next ></a>
      </div>
     </div>
</template>