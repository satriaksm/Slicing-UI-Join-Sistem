<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import JoinUs from '../components/JoinUs.vue';
import PostRecomendation from '../components/pages/blogpost/PostRecomendation.vue';
import Post from '../components/pages/blogpost/PostBody.vue';



</script>

<template>
  <Navbar/>
    <!-- post  -->
    <Post/>

    <!-- post recomendation  -->
     <PostRecomendation/>

    <!-- join us -->
     <JoinUs/>
  <Footer/>
</template>
