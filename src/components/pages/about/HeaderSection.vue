<script setup>
import Header from '@/assets/images/About/Header.png';

</script>
<template>
    <div class="max-w-screen-2xl mx-auto py-36 px-16">
        <div class="relative">
            <div class="flex justify-around mb-20">
                <div class="basis-1/2">
                </div>
                <div class="basis-1/2 px-24">
                    <p class="body1 text-mediumgrey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div class="relative">
                <div>
                    <img :src="Header" alt="" class="mx-auto w-screen">
                </div>
                <div class="absolute bg-yellow h-8 w-2/3 bottom-0 left-[10%]">
                </div>
                <div class="absolute bg-blue h-44 w-6/12 bottom-8 left-[10%]">
                    <div class="flex justify-around">
                        <div class="p-8">
                            <h1 class="display text-white tracking-tighter">12+</h1>
                            <p class="body1 text-white">Blogs Published</p>
                        </div>
                        <div class="p-8">
                            <h1 class="display text-white tracking-tighter">18k+</h1>
                            <p class="body1 text-white">Views on Finsweet</p>
                        </div>
                        <div class="p-8">
                            <h1 class="display text-white tracking-tighter">30k+</h1>
                            <p class="body1 text-white">Total active Users</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row justify-evenly pb-16 pt-32 px-20 bg-lightergrey">
                    <div class="text-left me-20 basis-1/2">
                        <h3 class="cap1 uppercase tracking-widest mb-8">Our mision</h3>
                        <h2 class="h3 tracking-tight">
                            Creating valuable content for creatives all around the world
                        </h2>
                        <p class="body1 text-mediumgrey mt-4 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                    <div class="basis-1/2">
                        <h3 class="font-inter uppercase tracking-widest mb-8">Our Vision</h3>
                        <h2 class="h3 tracking-tight">
                            A platform that empowers individuals to improve
                        </h2>
                        <p class="body1 text-mediumgrey mt-4 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                </div>
        </div>
        </div>
        <div class="absolute bg-white w-[624px] h-[356px] top-[20%] right-1/2">
            <div class="p-16"> 
                <p class="body1 tracking-widest text-darkblue">ABOUT US</p>
                <h1 class="h1 tracking-tighter text-darkblue">We are a team of content writers who share their learnings</h1>
            </div>
        </div>
    </div>
</template>