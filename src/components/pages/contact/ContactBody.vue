<script setup>
import Button from '@/components/ui/Button.vue';

</script>
<template>
        <div class="mx-auto max-w-[768px] text-center py-36">
                <div class="pb-16">
                        <p class="font-inter text-body1 leading-body1 text-darkblue tracking-widest uppercase font-black mb-2">Contact us</p>
                        <h1 class="font-sen text-h1 leading-h1 text-darkblue font-bold tracking-tighter mb-8">Let’s Start a Conversation</h1>
                        <p class="font-inter text-body1 leading-body1 text-mediumgrey font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </div>
                <div class="grid grid-cols-2 p-16 gap-16 bg-yellow mb-8">
                        <div class="text-left">
                                <div>
                                <p class="font-inter text-body2 leading-body2 text-darkgrey/60 font-normal pb-4 border-b border-darkgrey/10">Working hours</p>
                                </div>
                                <h5 class="font-sen text-h5 leading-h5 text-darkgrey font-bold py-4">Monday To Friday <br>
                                        9:00 AM to 8:00 PM </h5>
                                <p class="font-inter text-body1 leading-body1 text-darkgrey/60 font-normal">Our Support Team is available 24/7</p>
                        </div>
                        <div class="text-left">
                                <div>
                                <p class="font-inter text-body2 leading-body2 text-darkgrey/60 font-normal pb-4 border-b border-darkgrey/10">Contact Us</p>
                                </div>
                                <h5 class="font-sen text-h5 leading-h5 text-darkgrey font-bold py-4">020 7993 2905</h5>
                                <p class="font-inter text-body1 leading-body1 text-darkgrey/60 font-normal">hello@finsweet.com</p>
                        </div>
                </div>    
                <div>
                        <form action="">
                                <div class="flex flex-col gap-4">
                                        <input type="text" name="name" id="name" placeholder="Full Name" class="border-mediumgrey/60 border p-6">
                                        <input type="email" name="email" id="email" placeholder="Your Email" class="border-mediumgrey/60 border p-6">
                                        <div class="grid grid-cols-2 gap-4">
                                                <select name="province" id="province" class="border-mediumgrey/60 border p-6">
                                                        <option value="" selected>Province</option>
                                                        <option value=""></option>
                                                        <option value=""></option>
                                                </select>
                                                <select name="city" id="city" class="border-mediumgrey/60 border p-6">
                                                        <option value="" selected>City</option>
                                                        <option value=""></option>
                                                        <option value=""></option>
                                                </select>
                                        </div>
                                        <textarea name="message" id="message" placeholder="Message" class="border-mediumgrey/60 border p-6"></textarea>
                                        <Button variant="primary"  @click="handlePrimaryClick">
                                                Send Message
                                        </Button>
                                </div>
                                
                        </form>
                </div>     
        </div>
</template>