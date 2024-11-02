<script setup>
import Hugging from '@/assets/images/Home/Hugging.png';
import Button from '@/components/ui/Button.vue';

</script>
<template>
         <div class="pb-36">
      <div class="relative bg-white max-w-screen-2xl px-16 mx-auto">
        <div class="w-full h-full bg-blue-500">
          <img :src="Hugging" alt="hugging">
        </div>

        <div class="absolute bottom-0 right-0 w-7/12 h-5/6 bg-white flex items-center justify-center p-24">
          <div class="max-w-screen-2xl mx-auto">
            <p class="h6 text-darkblue uppercase tracking-widest mb-4">Why we started </p>
            <h1 class="display text-darkblue mb-6 max-w-4xl">It started out as a simple idea and evolved into our passion</h1>
            <p class="body1 text-mediumgrey mb-6 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button variant="primary" to="#">
              Discover our story >
            </Button>
          </div>
        </div>
      </div>
     </div>
</template>