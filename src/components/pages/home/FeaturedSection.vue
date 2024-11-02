<script setup>
import Mitra1 from '@/assets/images/Home/Mitra/Logo 1.png';
import Mitra2 from '@/assets/images/Home/Mitra/Logo 2.png';
import Mitra3 from '@/assets/images/Home/Mitra/Logo 3.png';
import Mitra4 from '@/assets/images/Home/Mitra/Logo 4.png';
import Mitra5 from '@/assets/images/Home/Mitra/Logo 5.png';
</script>
<template>
     <div class="max-w-screen-2xl mx-auto px-16 pb-36 flex justify-between gap-16">
      <div >
        <p class="body2 text-mediumgrey/60">We are</p>
        <h4 class="h4 text-mediumgrey">Featured in</h4>
      </div>
      <div class="flex items-center">
        <div class="flex gap-24 items-center opacity-80">
        <img :src="Mitra1" alt="mitra1" class="">
        <img :src="Mitra2" alt="mitra1" class="">
        <img :src="Mitra3" alt="mitra1" class="">
        <img :src="Mitra4" alt="mitra1" class="">
        <img :src="Mitra5" alt="mitra1" class="">
        </div>
      </div>
     </div>
</template>