<script setup>
import Logo from '@/assets/images/logoLight.svg';
import Button from '@/components/ui/Button.vue';

</script>

<template>
    <div class="bg-darkblue ">
        <div class="p-8 flex justify-between max-w-screen-2xl mx-auto items-center">
            <a href="/"><img :src="Logo" alt="logo" width="117px"></a>
            <div>
                <ul class="flex gap-8">
                    <li ><a href="/" class="font-inter text-body1 leasing-body1 text-white font-normal">Home</a></li>
                    <li ><a href="/blog" class="font-inter text-body1 leasing-body1 text-white font-normal">Blog</a></li>
                    <li ><a href="/about" class="font-inter text-body1 leasing-body1 text-white font-normal">About Us</a></li>
                    <li ><a href="/contact" class="font-inter text-body1 leasing-body1 text-white font-normal">Contact Us</a></li>
                </ul>
            </div>
            <Button variant="contact"  @click="handlePrimaryClick">
                        Contact Us
            </Button>
        </div>
    </div>
</template>