<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Hero from '../components/pages/home/HeroSection.vue';
import Post from '../components/pages/home/PostSection.vue';
import About from '../components/pages/home/AboutSection.vue';
import Categories from '../components/pages/home/CategoriesSection.vue';
import WhyWeStarted from '../components/pages/home/WhyWeStartedSection.vue';
import Authors from '../components/pages/home/AuthorsSection.vue';
import Featured from '../components/pages/home/FeaturedSection.vue';
import Testimonials from '../components/pages/home/TestimonialsSection.vue';
import JoinUs from '../components/JoinUsSection.vue';
</script>

<template>
  <Navbar/>
    <hero/>
    <Post/>
    <About/>
    <Categories/>
    <WhyWeStarted/>
    <Authors/>
    <Featured/>
    <Testimonials/>
    <JoinUs/>
  <Footer/>
</template>
