<script setup>
import Icon1 from '@/assets/images/component/Categories icon/Business.png';
import Icon2 from '@/assets/images/component/Categories icon/Startup.png';
import Icon3 from '@/assets/images/component/Categories icon/Economy.png';
import Icon4 from '@/assets/images/component/Categories icon/Technology.png';

import CategoryCard from '@/components/ui/CategoryCard.vue'; 
import { ref } from 'vue';

const categories = ref([
  {id:1, name: 'Business', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', link: '/category/business', icon: Icon1},
  {id:2, name: 'Startup', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', link: '/category/startup', icon: Icon2},
  {id:3, name: 'Economy', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', link: '/category/economy', icon: Icon3},
  {id:4, name: 'Technology', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', link: '/category/technology', icon: Icon4},
  // Tambahkan penulis lainnya sesuai kebutuhan
]);
</script>
<template>
         <div class="max-w-screen-2xl mx-auto px-16 pb-36">
          <h2 class="h2 text-darkblue text-center mb-8">Choose A Catagory</h2>
          <div class="flex justify-between">
            <CategoryCard
              extraClass="flex flex-col gap-3"
              v-for="category in categories"
              :key="category.id"
              :category="category"
            />
          </div>
     </div>
</template>