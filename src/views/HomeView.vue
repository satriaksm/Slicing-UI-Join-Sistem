<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Hero from '../components/pages/home/HomeHero.vue';
import Post from '../components/pages/home/HomePost.vue';
import About from '../components/pages/home/HomeAbout.vue';
import Categories from '../components/pages/home/Categories.vue';
import WhyWeStarted from '../components/pages/home/WhyWeStarted.vue';
import Authors from '../components/pages/home/Authors.vue';
import Featured from '../components/pages/home/Featured.vue';
import Testimonials from '../components/pages/home/Testimonials.vue';
import JoinUs from '../components/JoinUs.vue';
</script>

<template>
  <Navbar/>
    <!-- hero section  -->
    <hero/>

    <!-- post  -->
    <Post/>

     <!-- about us  -->
    <About/>

    <!-- categories  -->
    <Categories/>

    <!-- why we started  -->
    <WhyWeStarted/>

    <!-- list of authors  -->
    <Authors/>

    <!-- featured/mitra  -->
    <Featured/>

    <!-- testimonials  -->
    <Testimonials/>

    <!-- join us -->
    <JoinUs/>

  <Footer/>
</template>
