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
            <a :href="author.link" class="p-8 w-72 h-80 bg-lightgrey hover:bg-lightyellow transition duration-300 text-center mt-4">
                <img :src="author.image" alt="author1" class="mx-auto">
                <h3 class="h3 text-darkblue tracking-tight mt-4">{{author.name}}</h3>
                <p class="body2 text-mediumgrey mt-1">{{author.job}}</p>
                <div class="flex gap-4 justify-center pt-4">
                    <a :href="author.facebook"><img :src="Facebook" alt="facebook" class="hover:w-5"></a>
                    <a :href="author.twitter"><img :src="Twitter" alt="twitter" class="hover:w-5"></a>
                    <a :href="author.instagram"><img :src="Instagram" alt="instagram" class="hover:w-5"></a>
                    <a :href="author.linkedin"><img :src="LinkedIn" alt="linkedin" class="hover:w-5"></a>
                </div>
            </a>
</template>