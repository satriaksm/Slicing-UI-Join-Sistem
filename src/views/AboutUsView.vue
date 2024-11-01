<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import JoinUs from '../components/JoinUsSection.vue';
import Authors from '../components/pages/about/AuthorsSection.vue';
import Header from '../components/pages/about/HeaderSection.vue';
import Content from '../components/pages/about/ContentSection.vue';


</script>
<template>
    <Navbar/>
        <Header/>
        <Content/>
        <Authors/>
        <JoinUs/>
    <Footer/>
</template>