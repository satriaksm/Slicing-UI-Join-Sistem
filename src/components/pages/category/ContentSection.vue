<script setup>
import { ref, computed } from 'vue';
import Post1 from '@/assets/images/component/post/post1.png';
import Icon1 from '@/assets/images/component/Categories icon/Business.png';
import Icon2 from '@/assets/images/component/Categories icon/Startup.png';
import Icon3 from '@/assets/images/component/Categories icon/Economy.png';
import Icon4 from '@/assets/images/component/Categories icon/Technology.png';
import Posts from '@/components/ui/HorizontalImagePost.vue';
import CategoryCard from '@/components/ui/CategoryCard.vue';

const props = defineProps({
  currentCategory: {
    type: String,
    required: true
  }
});

// All posts data
const allPosts = ref([
  {
    id: 1, 
    category: 'Business', 
    title: 'Design tips for designers that cover everything you need', 
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", 
    image: Post1,
    tags: ['Business', 'Marketing', 'Experience','Screen']
  },
  {
    id: 2, 
    category: 'Business', 
    title: 'How to build rapport with your web design clients', 
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", 
    image: Post1,
    tags: ['Business', 'Marketing', 'Life','Technology']
  },
  {
    id: 3, 
    category: 'Startup', 
    title: 'Starting your first startup', 
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", 
    image: Post1,
    tags: ['Startup', 'Technology', 'Business', 'Life','Technology']
  },
  {
    id: 4, 
    category: 'Technology', 
    title: 'Latest tech trends 2024', 
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", 
    image: Post1,
    tags: ['Technology', 'Screen', 'Experience', 'Startup']
  },
  {
    id: 5, 
    category: 'Economy', 
    title: 'Understanding market dynamics', 
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", 
    image: Post1,
    tags: ['Economy', 'Business', 'Marketing', 'Screen', 'Experience']
  },
]);

// Filter posts based on current category
const filteredPosts = computed(() => {
  return allPosts.value.filter(post => post.category.toLowerCase() === props.currentCategory.toLowerCase());
});

const categories = ref([
  {id:1, name: 'Business', icon: Icon1, link: '/category/business'},
  {id:2, name: 'Startup', icon: Icon2, link: '/category/startup'},
  {id:3, name: 'Economy', icon: Icon3, link: '/category/economy'},
  {id:4, name: 'Technology', icon: Icon4, link: '/category/technology'},
]);

// All possible tags
const allTags = ref([
  {id:1, name: 'Business'},
  {id:2, name: 'Experience'},
  {id:3, name: 'Screen'},
  {id:4, name: 'Technology'},
  {id:5, name: 'Marketing'},
  {id:6, name: 'Life'},
  {id:7, name: 'Startup'},
  {id:8, name: 'Economy'},
]);

// Filter tags based on current category posts
const filteredTags = computed(() => {
  // Get all tags from filtered posts
  const tagsFromPosts = filteredPosts.value.reduce((acc, post) => {
    return [...acc, ...post.tags];
  }, []);
  
  // Remove duplicates and create tag objects
  const uniqueTags = [...new Set(tagsFromPosts)];
  
  // Map to match the tag object structure
  return allTags.value.filter(tag => uniqueTags.includes(tag.name));
});
</script>

<template>
  <div class="grid grid-cols-12 max-w-screen-2xl mx-auto px-16 py-36">
    <div class="col-span-9">
      <Posts
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"/>
    </div>
    <div class="col-span-3 ps-16">
      <h2 class="h2 text-darkblue text-left mb-8">Categories</h2>
      <div class="flex justify-between flex-col gap-4 mb-16">
        <CategoryCard
          extraClass="flex gap-4 items-center"
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
      <h2 class="h2 text-darkblue text-left mb-8">All Tags</h2>
      <div class="flex flex-wrap gap-4">
        <div 
          v-for="tag in filteredTags" 
          :key="tag.id" 
          class="label text-mediumgrey border-2 rounded-full py-3 px-4 flex-grow text-center"
        >
          {{ tag.name }}
        </div>
      </div>
    </div>
  </div>
</template>