<script setup>
import Hero from '@/assets/images/Blog/header.png';
import Button from '@/components/ui/Button.vue';

</script>
<template>
         <div class="bg-lightergrey">
      <div class="flex max-w-screen-2xl mx-auto px-8 py-32">
        <div class="basis-1/2">
          <p class="h6 text-darkblue uppercase tracking-[3px] mb-4">Featured Post</p>
              <h1 class="h2 text-darkblue mb-6 max-w-4xl">Step-by-step guide to choosing great font pairs</h1>
              <p class="body1 font-normal text-darkblue mb-6">By <span class="text-secondary">John Doe</span> |  May 23, 2022 </p>
              <p class="body1 font-normal text-mediumgrey mb-10 max-w-3xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <Button variant="primary"  to="/post">
                          Read More >
              </Button>
        </div>

        <div class="basis-1/2 m-auto">
          <img :src="Hero" alt="hero" class="mx-auto">
        </div>
      </div>
     </div>
</template>