<script setup>
import Author1 from '@/assets/images/component/List of Author/Author1.png';
import Author2 from '@/assets/images/component/List of Author/Author2.png';
import Author3 from '@/assets/images/component/List of Author/Author3.png';
import Author4 from '@/assets/images/component/List of Author/Author4.png';
import Author5 from '@/assets/images/component/List of Author/Author5.png';
import Author6 from '@/assets/images/component/List of Author/Author6.png';
import Author7 from '@/assets/images/component/List of Author/Author7.png';
import Author8 from '@/assets/images/component/List of Author/Author8.png';
import AuthorCard from '@/components/ui/AuthorsCard.vue'; 
import { ref } from 'vue';

const authors = ref([
  { id: 1, name: 'Floyd Miles', image: Author1, job: "Content Writer @Company", facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com'},
  { id: 2, name: 'Dianne Russell', image: Author2, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com' },
  { id: 3, name: 'Dianne Russell', image: Author3, job: "Content Writer @Company", facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com'},
  { id: 4, name: 'Leslie Alexander', image: Author4, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com' },
  { id: 5, name: 'Guy Hawkins', image: Author5, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com' },
  { id: 6, name: 'Eleanor Pena', image: Author6, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com' },
  { id: 7, name: 'Robert Fox', image: Author7, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com' },
  { id: 8, name: 'Jacob Jones', image: Author8, job: "Content Writer @Company",facebook: 'https://www.facebook.com', twitter: 'https://www.x.com', instagram: 'https://www.instagram.com', linkedin: 'https://www.likedin.com' },
])
</script>
<template>
    <div class="max-w-screen-2xl mx-auto px-16 pb-36">
          <h2 class="h2 text-darkblue text-center mb-8">Lists of Author</h2>
          <div class="flex justify-between flex-wrap gap-4">
            <AuthorCard 
            v-for="author in authors"
            :key="id"
            :author="author" />
          </div>
     </div>
</template>