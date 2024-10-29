<script setup>
import Post1 from '@/assets/images/Author/Skyscraper.png';
import Post2 from '@/assets/images/Author/Post-image.png';
</script>
<template>
     <div class="max-w-screen-2xl mx-auto p-32">
        <h1 class="font-sen text-h1 leading-h1 text-darkblue tracking-tighter font-bold pb-14">My Posts</h1>
        <div class="flex flex-col gap-16">
            <div class="flex items-center gap-8">
                <div>
                    <img :src="Post1" alt="">
                </div>
                <div>
                    <p class="font-inter text-body1 leading-body1 text-yellow tracking-widest pb-2 font-semibold">BUSINESS</p>
                    <h2 class="font-sen text-h2 leading-h2 text-darkblue tracking-tighter font-bold pb-4">Font sizes in UI design: The complete guide to follow</h2>
                    <p class="font-inter text-body1 leading-body1 text-mediumgrey pb-2 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="flex items-center gap-8">
                <div>
                    <img :src="Post2" alt="">
                </div>
                <div>
                    <p class="font-inter text-body1 leading-body1 text-yellow tracking-widest pb-2 font-semibold">ECONOMY</p>
                    <h2 class="font-sen text-h2 leading-h2 text-darkblue tracking-tighter font-bold pb-4">How to build rapport with your web design clients</h2>
                    <p class="font-inter text-body1 leading-body1 text-mediumgrey pb-2 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
     </div>
</template>