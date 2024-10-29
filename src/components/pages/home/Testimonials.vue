<script setup>
import Testimonial1 from '@/assets/images/Home/Testimonial1.png';
import ArrowLeft from '@/assets/images/Home/ArrowKiri.png';
import ArrowRight from '@/assets/images/Home/ArrowKanan.png';

</script>
<template>
         <div class="max-w-screen-2xl mx-auto px-8 mb-36">
      <div class=" bg-lightyellow">
        <div class="flex">
        <div class="basis-4/12 ps-24 py-24">
          <div class="pe-24 border-r-2 border-mediumgrey/40">
          <h6 class="font-inter text-h6 leading-h6 font-semibold text-darkblue uppercase mb-3">Testimonials</h6>
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue mb-4">What people say about our blog</h2>
          <p class="font-inter text-body1 leading-body1 font-normal text-darkblue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        </div>
        <div class="basis-8/12 p-24 flex flex-col justify-between h-[310]">
          <div>
            <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue max-w-[469px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div class="flex justify-between">
            <div class="flex gap-3">
              <div>
                <img :src="Testimonial1" alt="testimonial1">
              </div>
              <div>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue">Jonathan Vallem</h4>
                <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">New york, USA</p>
              </div>
            </div>
            <div class="flex items-center">
              <button class="bg-white rounded-full px-3 py-4 me-4 text-darkblue"><img :src="ArrowLeft" alt=""></button>
              <button class="bg-darkblue rounded-full px-3.5 py-5  text-white"><img :src="ArrowRight" alt=""></button>
            </div>
          </div>
        </div>
      </div>
      </div>
     </div>
</template>