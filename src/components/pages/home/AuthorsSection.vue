<script setup>
import Author1 from '@/assets/images/component/List of Author/Author1.png';
import Author2 from '@/assets/images/component/List of Author/Author2.png';
import Author3 from '@/assets/images/component/List of Author/Author3.png';
import Author4 from '@/assets/images/component/List of Author/Author4.png';
import AuthorCard from '@/components/ui/AuthorsCard.vue'; 

import { ref} from 'vue';
// Data Author
const authors = ref([
  { id: 1, name: 'Floyd Miles', image: Author1, job: "Content Writer @Company", facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com', link: "/author"},
  { id: 2, name: 'Dianne Russell', image: Author2, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com', link: "/author" },
  { id: 3, name: 'Dianne Russell', image: Author3, job: "Content Writer @Company", facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com', link: "/author"},
  { id: 4, name: 'Leslie Alexander', image: Author4, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com', link: "/author" },
])

</script>
<template>
<div class="max-w-screen-2xl mx-auto px-16 pb-36">
          <h2 class="h2 text-darkblue text-center mb-8">Lists of Author</h2>
          <div class="flex justify-between">
            <AuthorCard 
            v-for="author in authors"
            :key="id"
            :author="author" />
          </div>
     </div>
</template>