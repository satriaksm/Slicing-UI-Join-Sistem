<script setup>
import Image1 from '@/assets/images/About/body1.png';
import Image2 from '@/assets/images/About/body2.png';
</script>
<template>
    <div class="max-w-screen-2xl mx-auto pb-36 md:px-20 lg:px-8">
        <div class="relative mb-36">
            <div class="grid grid-cols-2 gap-24 items-center">
            <div class="">
                <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue tracking-tighter mb-4">Our team of creatives</h2>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue  mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            <div class="mx-auto">
                <img :src="Image1" alt="">
            </div>
        </div>
        <div class="absolute bg-blue top-1/4 left-[52%] h-28 w-24 rounded-tl-[40px]">
        </div>
        </div>

        <div class="relative">
            <div class="grid grid-cols-2 gap-16 items-center">
            <div class="order-2">
                <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue tracking-tighter mb-4">Why we started this Blog</h2>
                <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue  mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            <div class="order-1 mx-auto">
                <img :src="Image2" alt="">
            </div>
        </div>
        <div class="absolute bg-yellow -bottom-8 left-24 h-16 w-16 rounded-full">
        </div>
        </div>
    </div>
</template>