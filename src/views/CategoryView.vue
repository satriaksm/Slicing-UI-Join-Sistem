<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Body from '../components/pages/category/ContentSection.vue';
import Header from '../components/pages/category/HeaderSection.vue';

const route = useRoute();
const categoryName = computed(() => route.params.categoryName || 'Business');

const categoryDescriptions = {
  business: 'Stay updated with the latest trends and insights in the business world.',
  technology: 'Explore the world of technology with the latest news and innovations.',
  economy: 'Discover articles on health, wellness, and self-care.',
  startup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
};

const categoryDescription = computed(() => categoryDescriptions[categoryName.value] || 'Explore our articles.');
</script>

<template>
  <Navbar/>
  <Header :category-name="categoryName" :category-description="categoryDescription"/>
  <Body :current-category="categoryName"/>
  <Footer/>
</template>
