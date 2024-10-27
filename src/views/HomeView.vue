<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Button from '@/components/ui/Button.vue';
import HeroImage from '@/assets/images/Home/Hero.png';
import Overlay from '@/assets/images/Home/Hero_Overlay.png';
import Hugging from '@/assets/images/Home/Hugging.png';
import Mitra1 from '@/assets/images/Home/Mitra/Logo 1.png';
import Mitra2 from '@/assets/images/Home/Mitra/Logo 2.png';
import Mitra3 from '@/assets/images/Home/Mitra/Logo 3.png';
import Mitra4 from '@/assets/images/Home/Mitra/Logo 4.png';
import Mitra5 from '@/assets/images/Home/Mitra/Logo 5.png';
import Icon1 from '@/assets/images/component/Categories icon/Business.png';
import Icon2 from '@/assets/images/component/Categories icon/Startup.png';
import Icon3 from '@/assets/images/component/Categories icon/Economy.png';
import Icon4 from '@/assets/images/component/Categories icon/Technology.png';
import Author1 from '@/assets/images/component/List of Author/Author1.png';
import Author2 from '@/assets/images/component/List of Author/Author2.png';
import Author3 from '@/assets/images/component/List of Author/Author3.png';
import Author4 from '@/assets/images/component/List of Author/Author4.png';
import Facebook from '@/assets/images/Footer/Facebook.png';
import Twitter from '@/assets/images/Footer/Twitter.png';
import Instagram from '@/assets/images/Footer/Instagram.png';
import LinkedIn from '@/assets/images/Footer/LinkedIn.png';
import FeaturedPost from '@/assets/images/Home/Buildings.png';
import Testimonial1 from '@/assets/images/Home/Testimonial1.png';

</script>

<template>
  <Navbar/>
  <main>
    <!-- hero section  -->
     <div>
      <div
      :style="{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="h-[89vh] relative"
    >
      <!-- Overlay untuk efek pada background, tapi tidak menutupi teks -->
      <div
        class="absolute inset-0 opacity-50"
        :style="{
        backgroundImage: `url(${Overlay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }"
      ></div>

      <!-- Konten yang berada di atas overlay -->
      <div class="relative z-10 max-w-screen-2xl mx-auto px-8 py-36">
        <p class="font-inter text-h6 leasing-h6 font-regular text-white uppercase tracking-widest mb-4">
          Posted on <span class="font-bold">startup</span>
        </p>
        <h1 class="font-sen text-display leasing-display font-bold text-white mb-12 max-w-4xl">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="font-inter text-body1 leasing-body1 font-normal text-white mb-8">
          By <span class="text-primary">James West</span> | May 23, 2022
        </p>
        <p class="font-inter text-body1 leasing-body1 font-normal text-white mb-12 max-w-3xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Button variant="primary" to="/post">
          Read More &gt;
        </Button>
      </div>
     </div>
     </div>
    <!-- end of hero section  -->

    <!-- post  -->
     <div class="max-w-screen-2xl mx-auto px-8 py-36">
        <div class="flex gap-8">
          <div class="basis-8/12">
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-10">Featured Post</h2>
            <div class="border p-8 border-mediumgrey/10">
              <img :src="FeaturedPost" alt="featuredpost-image">
              <p class="font-inter text-label leading-label font-normal text-darkgrey my-6">By <span class="text-yellow">John Doe</span>   l   May 23, 2022</p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey mb-10">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <Button variant="primary"  @click="handlePrimaryClick">
                        Read More >
            </Button>
            </div>
          </div>
          <div class="basis-4/12">
            <div class="flex justify-between items-center">
            <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue">All Post</h2>
            <a href="" class="font-inter text-body1 leading-body1 font-normal text-yellow">View All</a>
            </div>
            <a href="#" class="flex flex-col gap-0 mt-10 hover:bg-lightyellow transition duration-300">
              <div class="p-8">
                <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue max-w-[369px]">8 Figma design systems that you can download for free today.</h4>
              </div>
            </a>
            <a href="#" class="flex flex-col  hover:bg-lightyellow transition duration-300">
              <div class="p-8">
                <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue max-w-[369px]">8 Figma design systems that you can download for free today.</h4>
              </div>
            </a>
            <a href="#" class="flex flex-col hover:bg-lightyellow transition duration-300">
              <div class="p-8">
                <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue max-w-[369px]">8 Figma design systems that you can download for free today.</h4>
              </div>
            </a>
            <a href="#" class="flex flex-col hover:bg-lightyellow transition duration-300">
              <div class="p-8">
                <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue max-w-[369px]">8 Figma design systems that you can download for free today.</h4>
              </div>
            </a>
          </div>
        </div>
     </div>
     <!-- end of post  -->

     <!-- about us  -->
     <div class="max-w-screen-2xl mx-auto px-8 pb-36">
        <div class="flex flex-col ">
          <div class="flex flex-row">
            <div class="bg-white w-2/12 h-5"></div>
            <div class="bg-yellow w-7/12 h-5"></div>
            <div class="bg-blue w-3/12 h-5"></div>
          </div>
          <div class="flex flex-row justify-evenly py-24 px-20 bg-lightergrey">
            <div class="text-left me-20 basis-1/2">
              <h3 class="font-inter uppercase tracking-widest font-semibold mb-8">About Us</h3>
              <h2 class="font-sen leading-h2 text-h2 font-bold">
                We are a community of content writers who share their learnings
              </h2>
              <p class="font-inter text-mediumgrey mt-4 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="font-sen text-yellow leading-[32px] text-[18px] font-bold">Read More ></a>
            </div>
            <div class="basis-1/2">
              <h3 class="font-inter uppercase tracking-widest font-semibold mb-8">Our mission</h3>
              <h2 class="font-sen leading-h3 text-h3 font-bold">
                Creating valuable content for creatives all around the world
              </h2>
              <p class="font-inter text-mediumgrey mt-4 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
     </div>
    <!-- end of about us  -->

    <!-- categories  -->
     <div class="max-w-screen-2xl mx-auto px-8 pb-36">
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue text-center mb-8">Choose A Catagory</h2>
          <div class="flex justify-between">
            <a href="#" class="p-8 border max-w-80 hover:bg-blue group transition duration-300">
              <img :src="Icon1" alt="icon1" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue group-hover:text-white mb-3 transition duration-300">Business</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey group-hover:text-white transition duration-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </a>
            <a href="#" class="p-8 border max-w-80 hover:bg-blue group transition duration-300">
              <img :src="Icon2" alt="icon2" class="bg-lightyellow rounded-lg mb-3 p-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold  mb-3 text-darkblue group-hover:text-white transition duration-300">Startup</h3>
              <p class="font-inter text-body1 leading-body1 font-normal  text-mediumgrey group-hover:text-white transition duration-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </a>
            <a href="#" class="p-8 border max-w-80 hover:bg-blue group transition duration-300">
              <img :src="Icon3" alt="icon3" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue group-hover:text-white mb-3 transition duration-300">Economy</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey group-hover:text-white transition duration-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </a>
            <a href="#" class="p-8 border max-w-80 hover:bg-blue group transition duration-300">
              <img :src="Icon4" alt="icon4" class="bg-lightyellow rounded-lg mb-3">
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue group-hover:text-white mb-3 transition duration-300">Technology</h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey group-hover:text-white transition duration-300">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </a>
          </div>
     </div>
    <!-- end of categories  -->

    <!-- why we started  -->
     <div class="pb-36">
      <div class="relative bg-white max-w-screen-2xl px-8 mx-auto">
        <div class="w-full h-full bg-blue-500">
          <img :src="Hugging" alt="hugging">
        </div>

        <div class="absolute bottom-0 right-0 w-7/12 h-5/6 bg-white flex items-center justify-center p-24">
          <div class="max-w-screen-2xl mx-auto">
            <p class="font-inter text-h6 leasing-h6 font-regular text-darkblue uppercase tracking-widest mb-4">Why we started </p>
            <h1 class="font-sen text-display leasing-display font-bold text-darkblue mb-6 max-w-4xl">It started out as a simple idea and evolved into our passion</h1>
            <p class="font-inter text-body1 leasing-body1 font-normal text-mediumgrey mb-6 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button variant="primary"  @click="handlePrimaryClick">
              Discover our story >
            </Button>
          </div>
        </div>
      </div>
     </div>
    <!-- end of why we started  -->

    <!-- list of authors  -->
    <div class="max-w-screen-2xl mx-auto px-8 pb-36">
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue text-center mb-8">Lists of Author</h2>
          <div class="flex justify-between">
            <div class="p-8 w-72 h-80 bg-lightgrey hover:bg-lightyellow transition duration-300 text-center">
                <img :src="Author1" alt="author1" class="mx-auto">
                <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mt-4">Floyd Miles</h3>
                <p class="font-inter text-body2 leading-body2 font-normal text-mediumgrey mt-1">Content Writer @Company</p>
                <div class="flex gap-4 justify-center pt-4">
                    <a href="#"><img :src="Facebook" alt="facebook"></a>
                    <a href="#"><img :src="Twitter" alt="twitter"></a>
                    <a href="#"><img :src="Instagram" alt="instagram"></a>
                    <a href="#"><img :src="LinkedIn" alt="linkedin"></a>
                </div>
            </div>
            <div class="p-8 w-72 h-80 bg-lightgrey hover:bg-lightyellow transition duration-300 text-center">
                <img :src="Author2" alt="author2" class="mx-auto">
                <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mt-4">Dianne Russell</h3>
                <p class="font-inter text-body2 leading-body2 font-normal text-mediumgrey mt-1">Content Writer @Company</p>
                <div class="flex gap-4 justify-center pt-4">
                    <a href="#"><img :src="Facebook" alt="facebook"></a>
                    <a href="#"><img :src="Twitter" alt="twitter"></a>
                    <a href="#"><img :src="Instagram" alt="instagram"></a>
                    <a href="#"><img :src="LinkedIn" alt="linkedin"></a>
                </div>
            </div>
            <div class="p-8 w-72 h-80 bg-lightgrey hover:bg-lightyellow transition duration-300 text-center">
                <img :src="Author3" alt="author3" class="mx-auto">
                <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mt-4">Jenny Wilson</h3>
                <p class="font-inter text-body2 leading-body2 font-normal text-mediumgrey mt-1">Content Writer @Company</p>
                <div class="flex gap-4 justify-center pt-4">
                    <a href="#"><img :src="Facebook" alt="facebook"></a>
                    <a href="#"><img :src="Twitter" alt="twitter"></a>
                    <a href="#"><img :src="Instagram" alt="instagram"></a>
                    <a href="#"><img :src="LinkedIn" alt="linkedin"></a>
                </div>
            </div>
            <div class="p-8 w-72 h-80 bg-lightgrey hover:bg-lightyellow transition duration-300 text-center">
                <img :src="Author4" alt="author1" class="mx-auto">
                <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mt-4">Leslie Alexander</h3>
                <p class="font-inter text-body2 leading-body2 font-normal text-mediumgrey mt-1">Content Writer @Company</p>
                <div class="flex gap-4 justify-center pt-4">
                    <a href="#"><img :src="Facebook" alt="facebook"></a>
                    <a href="#"><img :src="Twitter" alt="twitter"></a>
                    <a href="#"><img :src="Instagram" alt="instagram"></a>
                    <a href="#"><img :src="LinkedIn" alt="linkedin"></a>
                </div>
            </div>
          </div>
     </div>
     <!-- end of list of authors  -->

    <!-- featured/mitra  -->
     <div class="max-w-screen-2xl mx-auto px-8 pb-36 flex justify-between gap-16">
      <div >
        <p class="font-inter font-normal text-body2 leading-body2 text-mediumgrey/60">We are</p>
        <h4 class="font-sen font-bold text-h4 leading-h4 text-mediumgrey">Featured in</h4>
      </div>
      <div class="flex items-center">
        <div class="flex gap-32 items-center opacity-80">
        <img :src="Mitra1" alt="mitra1" class="">
        <img :src="Mitra2" alt="mitra1" class="">
        <img :src="Mitra3" alt="mitra1" class="">
        <img :src="Mitra4" alt="mitra1" class="">
        <img :src="Mitra5" alt="mitra1" class="">
        </div>
      </div>
     </div>
    <!-- end of featured/mitra  -->

    <!-- testimonials  -->
     <div class="max-w-screen-2xl mx-auto px-8 mb-36">
      <div class=" bg-lightyellow">
        <div class="flex">
        <div class="basis-4/12 ps-24 py-24">
          <div class="pe-24 border-r-2 border-mediumgrey/40">
          <h6 class="font-inter text-h6 leading-h6 font-semibold text-darkblue uppercase mb-3">Testimonials</h6>
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4">What people say about our blog</h2>
          <p class="font-inter text-body1 leading-body1 font-normal text-darkblue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        </div>
        <div class="basis-8/12 p-24 flex flex-col justify-between h-[310]">
          <div>
            <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue max-w-[469px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div class="flex justify-between">
            <div class="flex gap-3">
              <div>
                <img :src="Testimonial1" alt="testimonial1">
              </div>
              <div>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue">Jonathan Vallem</h4>
                <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">New york, USA</p>
              </div>
            </div>
            <div class="flex">
              <button class="bg-white rounded-full px-6 me-3 text-darkblue"><</button>
              <button class="bg-darkblue rounded-full px-6  text-white">></button>
            </div>
          </div>
        </div>
      </div>
      </div>

     </div>
    <!-- end of testimonials  -->

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
