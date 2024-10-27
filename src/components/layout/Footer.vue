<script setup>
import LogoFooter from '@/assets/images/LogoFooter.png';
import Facebook from '@/assets/images/Footer/Facebook.png';
import Twitter from '@/assets/images/Footer/Twitter.png';
import Instagram from '@/assets/images/Footer/Instagram.png';
import LinkedIn from '@/assets/images/Footer/LinkedIn.png';


import Button from '@/components/ui/Button.vue';
</script>

<template>
    <div class="bg-darkblue py-16">
        <div class="p-8 max-w-screen-2xl mx-auto">
            <div class="flex justify-between mb-14">
                <img :src="LogoFooter" alt="logo">
                <div>
                    <ul class="flex gap-8">
                        <li ><a href="/" class="font-inter text-body1 leasing-body1 text-white font-normal">Home</a></li>
                        <li ><a href="blog" class="font-inter text-body1 leasing-body1 text-white font-normal">Blog</a></li>
                        <li ><a href="about" class="font-inter text-body1 leasing-body1 text-white font-normal">About Us</a></li>
                        <li ><a href="contact" class="font-inter text-body1 leasing-body1 text-white font-normal">Contact Us</a></li>
                        <li ><a href="privacy-policy" class="font-inter text-body1 leasing-body1 text-white font-normal">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="bg-white/5 py-12 px-16 flex justify-between mb-14 ">
                <h2 class="font-sen text-white text-h2 leasing-h2 font-bold me-6 basis-1/2">Subscribe to our news letter to get latest updates and news</h2>
                <form action="">
                    <div class="flex gap-8 basis-1/2">
                        <input type="email" placeholder="Enter Your Email" class="w-96 bg-transparent p-3 border border-darkgrey text-white focus:outline-none" >
                        <Button variant="primary"  @click="handlePrimaryClick">
                            Subscribe
                        </Button>
                    </div>
                </form>
            </div>

            <div class="flex justify-between">
                <div>
                    <p class="font-inter text-body1 font-normal leasing-body1 text-white/70">Finstreet 118 2561 Fintown</p>
                    <p class="font-inter text-body1 font-normal leasing-body1 text-white/70">Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div class="flex gap-6">
                    <a href="#"><img :src="Facebook" alt="facebook"></a>
                    <a href="#"><img :src="Twitter" alt="twitter"></a>
                    <a href="#"><img :src="Instagram" alt="instagram"></a>
                    <a href="#"><img :src="LinkedIn" alt="linkedin"></a>
                </div>
            </div>
        </div>
    </div>
</template>