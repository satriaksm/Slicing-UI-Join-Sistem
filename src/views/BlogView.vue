<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Hero from '@/assets/images/Blog/header.png';
import Button from '@/components/ui/Button.vue';
import Icon1 from '@/assets/images/component/Categories icon/Business.png';
import Icon2 from '@/assets/images/component/Categories icon/Startup.png';
import Icon3 from '@/assets/images/component/Categories icon/Economy.png';
import Icon4 from '@/assets/images/component/Categories icon/Technology.png';
import Post1 from '@/assets/images/component/post/post1.png';
import Post2 from '@/assets/images/component/post/post2.png';
import Post3 from '@/assets/images/component/post/post3.png';
import Post4 from '@/assets/images/component/post/post4.png';

</script>

<template>
  <Navbar/>
  <main>
    <!-- hero  -->
     <div class="bg-lightergrey">
      <div class="flex max-w-screen-2xl mx-auto px-8 py-32">
        <div class="basis-1/2">
          <p class="font-inter text-h6 leasing-h6 font-regular text-darkblue uppercase tracking-widest mb-4">Featured Post</p>
              <h1 class="font-sen text-h2 leasing-h2 font-bold text-darkblue mb-6 max-w-4xl">Step-by-step guide to choosing great font pairs</h1>
              <p class="font-inter text-body1 leasing-body1 font-normal text-darkblue mb-6">By <span class="text-secondary">John Doe</span> |  May 23, 2022 </p>
              <p class="font-inter text-body1 leasing-body1 font-normal text-mediumgrey mb-10 max-w-3xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <Button variant="primary"  to="/post">
                          Read More >
              </Button>
        </div>

        <div class="basis-1/2 m-auto">
          <img :src="Hero" alt="hero" class="mx-auto">
        </div>
      </div>
     </div>
    <!-- end of hero  -->

    <!-- all post -->
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
    <!-- end of all post  -->

    <!-- categories  -->
    <div class="max-w-screen-2xl mx-auto px-8 pb-36">
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue  mb-8">All Catagories</h2>
          <div class="flex justify-between">
            <div class="p-8 border max-w-80">
              <img :src="Icon1" alt="icon1" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue mb-3">Business</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div class="p-8 border max-w-80 bg-blue">
              <img :src="Icon2" alt="icon2" class="bg-lightyellow rounded-lg mb-3 p-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-white mb-3">Startup</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div class="p-8 border max-w-80">
              <img :src="Icon3" alt="icon3" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue mb-3">Economy</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div class="p-8 border max-w-80">
              <img :src="Icon4" alt="icon4" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue mb-3">Technology</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
          </div>
     </div>
    <!-- end of categories  -->

    <!-- join us -->
        <div class="max-w-screen-2xl mx-auto px-8 pb-36">
        <div class="text-center">
          <h2 class="font-sen text-h2 leading-h2 font-bold max-w-md mx-auto tracking-tight mb-6">Join our team to be a part of our story</h2>
          <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey max-w-md mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <Button variant="primary"  @click="handlePrimaryClick">
                        Join Now
            </Button>
        </div>
     </div>
    <!-- end of join us -->
  </main>
  <Footer/>
</template>
