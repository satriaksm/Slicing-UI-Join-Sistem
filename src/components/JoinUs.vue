<script setup>
import Button from '@/components/ui/Button.vue';

</script>
<template>
         <div class="max-w-screen-2xl mx-auto px-8 pb-36">
        <div class="text-center">
          <h2 class="font-sen text-h2 leading-h2 font-bold max-w-md mx-auto tracking-tight mb-6">Join our team to be a part of our story</h2>
          <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey max-w-md mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <Button variant="primary"  @click="handlePrimaryClick">
                        Join Now
            </Button>
        </div>
     </div>
</template>