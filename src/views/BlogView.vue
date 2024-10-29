<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import JoinUs from '../components/JoinUs.vue';
import Categories from '../components/pages/home/Categories.vue';
import Post from '../components/pages/blog/BlogPost.vue';
import Hero from '../components/pages/blog/BlogHero.vue';

</script>

<template>
  <Navbar/>
  <main>
    <!-- hero  -->
    <Hero/>

    <!-- all post -->
     <Post/>

    <!-- categories  -->
     <Categories/>

    <!-- join us -->
     <JoinUs/>
  </main>
  <Footer/>
</template>
