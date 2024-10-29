<script setup>
import Hugging from '@/assets/images/Home/Hugging.png';
import Button from '@/components/ui/Button.vue';

</script>
<template>
         <div class="pb-36">
      <div class="relative bg-white max-w-screen-2xl px-8 mx-auto">
        <div class="w-full h-full bg-blue-500">
          <img :src="Hugging" alt="hugging">
        </div>

        <div class="absolute bottom-0 right-0 w-7/12 h-5/6 bg-white flex items-center justify-center p-24">
          <div class="max-w-screen-2xl mx-auto">
            <p class="font-inter text-h6 leasing-h6 font-regular text-darkblue uppercase tracking-widest mb-4">Why we started </p>
            <h1 class="font-sen text-display leasing-display font-bold text-darkblue mb-6 max-w-4xl">It started out as a simple idea and evolved into our passion</h1>
            <p class="font-inter text-body1 leasing-body1 font-normal text-mediumgrey mb-6 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button variant="primary"  @click="handlePrimaryClick">
              Discover our story >
            </Button>
          </div>
        </div>
      </div>
     </div>
</template>