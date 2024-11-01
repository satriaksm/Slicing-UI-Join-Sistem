<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import JoinUs from '../components/JoinUsSection.vue';
import Categories from '../components/pages/blog/CategoriesSection.vue';
import Post from '../components/pages/blog/PostsSection.vue';
import Hero from '../components/pages/blog/HeroSection.vue';

</script>

<template>
  <Navbar/>
    <Hero/>
     <Post/>
     <Categories/>
     <JoinUs/>
  <Footer/>
</template>
