<script setup>
import Post1 from '@/assets/images/Blog Post/post/post1.png';
import Post2 from '@/assets/images/Blog Post/post/post2.png';
import Post3 from '@/assets/images/Blog Post/post/post3.png';

</script>
<template>
        <div class="max-w-screen-2xl mx-auto px-8 pb-20 border-b mb-16">
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue tracking-tighter mb-16">What to read next</h2>
          <div class="flex justify-between">
            <div class="max-w-[405px]">
              <img :src="Post1" alt="post1" class="">
              <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3 mt-6">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mb-4">A UX Case Study Creating a Studious Environment for Students: </h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div class="max-w-[405px]">
              <img :src="Post2" alt="post2" class="">
              <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3 mt-6">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mb-4">A UX Case Study Creating a Studious Environment for Students: </h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div class="max-w-[405px]">
              <img :src="Post3" alt="post3" class="">
              <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3 mt-6">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mb-4">A UX Case Study Creating a Studious Environment for Students: </h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
     </div>
</template>