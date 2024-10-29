<script setup>
import HeroImage from '@/assets/images/Home/Hero.png';
import Overlay from '@/assets/images/Home/Hero_Overlay.png';
import Button from '@/components/ui/Button.vue';

</script>
<template>
         <div>
      <div
      :style="{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="h-[89vh] relative"
    >
      <!-- Overlay untuk efek pada background, tapi tidak menutupi teks -->
      <div
        class="absolute inset-0 opacity-50"
        :style="{
        backgroundImage: `url(${Overlay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }"
      ></div>

      <!-- Konten yang berada di atas overlay -->
      <div class="relative z-10 max-w-screen-2xl mx-auto px-8 py-36">
        <p class="font-inter text-h6 leasing-h6 font-regular text-white uppercase tracking-widest mb-4">
          Posted on <span class="font-bold">startup</span>
        </p>
        <h1 class="font-sen text-display leasing-display font-bold text-white mb-12 max-w-4xl">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="font-inter text-body1 leasing-body1 font-normal text-white mb-8">
          By <span class="text-primary">James West</span> | May 23, 2022
        </p>
        <p class="font-inter text-body1 leasing-body1 font-normal text-white mb-12 max-w-3xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Button variant="primary" to="/post">
          Read More &gt;
        </Button>
      </div>
     </div>
     </div>
</template>