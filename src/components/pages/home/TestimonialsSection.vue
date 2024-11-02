
<script setup>
import { ref } from 'vue';
import Testimonial1 from '@/assets/images/Home/Testimonial1.png';
import Testimonial2 from '@/assets/images/Home/Testimonial2.png';
import Testimonial3 from '@/assets/images/Home/Testimonial3.png';

const testimonials = ref([
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jonathan Vallem",
    location: "New york, USA",
    image: Testimonial1
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Sarah Johnson",
    location: "Los Angeles, USA",
    image: Testimonial2  
  },
  {
    id: 3,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Michael Chen",
    location: "Chicago, USA",
    image: Testimonial3  
  }
]);

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prev = () => {
  currentIndex.value = currentIndex.value === 0 
    ? testimonials.value.length - 1 
    : currentIndex.value - 1;
};
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-16 mb-36">
    <div class="bg-lightyellow">
      <div class="flex">
        <div class="basis-4/12 ps-24 py-24">
          <div class="pe-24 border-r-2 border-mediumgrey/40">
            <h6 class="h6 text-darkblue uppercase mb-3 tracking-[3px]">Testimonials</h6>
            <h2 class="h2 text-darkblue mb-4">What people say about our blog</h2>
            <p class="body1 text-darkblue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        
        <div class="basis-8/12 p-24 flex flex-col justify-between h-[310]">
          <div>
            <h4 class="h4 text-darkblue max-w-[469px]">
              {{ testimonials[currentIndex].text }}
            </h4>
          </div>
          
          <div class="flex justify-between h-24">
            <div class="flex gap-3 items-center">
              <div>
                <img :src="testimonials[currentIndex].image" alt="testimonial">
              </div>
              <div>
                <h4 class="h4 text-darkblue">{{ testimonials[currentIndex].name }}</h4>
                <p class="body1 text-mediumgrey">{{ testimonials[currentIndex].location }}</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <button 
                @click="prev"
                class="rounded-full hover:px-5 hover:pt-5 hover:pb-4 bg-white pt-3 pb-2 px-3 me-4 transition-all duration-300"
              >
                <box-icon name='arrow-back'></box-icon>
              </button>
              
              <button 
                @click="next"
                class="bg-darkblue rounded-full hover:px-5 hover:pt-5 hover:pb-4 pt-3 pb-2 px-3 me-4 transition-all duration-300"
              >
                <box-icon name='arrow-back' rotate='180' color="white"></box-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>