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
                    <li ><a href="/" class="body1 text-white hover:text-yellow transition duration-300">Home</a></li>
                    <li ><a href="/blog" class="body1 text-white hover:text-yellow transition duration-300">Blog</a></li>
                    <li ><a href="/about" class="body1 text-white hover:text-yellow transition duration-300">About Us</a></li>
                    <li ><a href="/contact" class="body1 text-white hover:text-yellow transition duration-300">Contact Us</a></li>
                </ul>
            </div>
            <Button variant="contact"  @click="handlePrimaryClick">
                        Contact Us
            </Button>
        </div>
    </div>
</template>