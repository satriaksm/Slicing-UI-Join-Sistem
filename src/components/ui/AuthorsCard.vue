<script setup>
import Facebook from '@/assets/images/Footer/Facebook.png';
import Twitter from '@/assets/images/Footer/Twitter.png';
import Instagram from '@/assets/images/Footer/Instagram.png';
import LinkedIn from '@/assets/images/Footer/LinkedIn.png';
defineProps({
    author: {
        type: Object,
        required: true
    }
});
</script>
<template>
            <div class="p-8 w-72 h-80 bg-lightgrey hover:bg-lightyellow transition duration-300 text-center">
                <img :src="author.image" alt="author1" class="mx-auto">
                <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mt-4">{{author.name}}</h3>
                <p class="font-inter text-body2 leading-body2 font-normal text-mediumgrey mt-1">{{author.job}}</p>
                <div class="flex gap-4 justify-center pt-4">
                    <a :href="author.facebook"><img :src="Facebook" alt="facebook"></a>
                    <a :href="author.twitter"><img :src="Twitter" alt="twitter"></a>
                    <a :href="author.instagram"><img :src="Instagram" alt="instagram"></a>
                    <a :href="author.linkedin"><img :src="LinkedIn" alt="linkedin"></a>
                </div>
            </div>
</template>