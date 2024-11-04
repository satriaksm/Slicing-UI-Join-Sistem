<script setup>
import Logo from '@/assets/images/logoLight.svg';
import Button from '@/components/ui/Button.vue';

</script>

<template>
    <div class="bg-darkblue ">
        <div class="px-16 py-8 flex justify-between max-w-screen-3xl mx-auto items-center">
            <a href="/"><img :src="Logo" alt="logo" width="117px"></a>
            <div>
                <ul class="flex gap-8">
                    <li ><router-link to="/" class="body1 text-white hover:text-yellow transition duration-300">Home</router-link></li>
                    <li ><router-link to="/blog" class="body1 text-white hover:text-yellow transition duration-300">Blog</router-link></li>
                    <li ><router-link to="/about" class="body1 text-white hover:text-yellow transition duration-300">About Us</router-link></li>
                    <li ><router-link to="/contact" class="body1 text-white hover:text-yellow transition duration-300">Contact Us</router-link></li>
                </ul>
            </div>
            <Button variant="contact"  @click="handlePrimaryClick">
                        Contact Us
            </Button>
        </div>
    </div>
</template>