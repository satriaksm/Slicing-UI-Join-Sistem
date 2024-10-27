<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Button from '@/components/ui/Button.vue';
import ProfilePic from '@/assets/images/Blog Post/profile_picture.png';
import PostImage from '@/assets/images/Blog Post/main_post.png';
import Icon1 from '@/assets/images/component/Categories icon/Startup.png';
import Post1 from '@/assets/images/Blog Post/post/post1.png';
import Post2 from '@/assets/images/Blog Post/post/post2.png';
import Post3 from '@/assets/images/Blog Post/post/post3.png';

</script>

<template>
  <Navbar/>
  <main>
    <!-- head post  -->
     <div class="max-w-screen-2xl mx-auto px-8 pt-36 pb-16 flex justify-center">
      <div class="max-w-[768px]">
        <div class="flex gap-4 items-center mb-6">
          <div>
          <img :src="ProfilePic" alt="profile-author">
          </div>
          <div>
            <h3 class="font-sen text-h3 leading-h3 font-bold text-yellow tracking-tight">Andrew Jonson</h3>
            <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Posted on 27th January 2022</p>
          </div>
        </div>
        <h1 class="font-sen text-h1 leading-h1 font-bold text-darkblue tracking-tighter mb-8">Step-by-step guide to choosing great font pairs</h1>
        <div class="flex items-center gap-2">
          <div>
          <img :src="Icon1" alt="categories">
          </div>
          <h4 class="font-sen text-h4 leading-h4 font-bold text-darkblue">Startup</h4>
        </div>
      </div>
     </div>
    <!-- end of head post  -->

    <!-- post image  -->
     <div class="max-w-screen-2xl mx-auto pb-16">
     <img :src="PostImage" alt="post-image" class="mx-auto">
     </div>
    <!-- end of post image  -->

    <!--post article  -->
    <article class="max-w-screen-2xl mx-auto pb-36">
      <div class="max-w-[843px] mx-auto">
        <h2 class="font-sen text-h2 leading-h2 text-darkblue font-bold tracking-tighter mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p class="font-inter text-body1 leading-body1 text-mediumgrey form-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2 class="font-sen text-h2 leading-h2 text-darkblue font-bold tracking-tighter mb-4 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p class="font-inter text-body1 leading-body1 text-mediumgrey form-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p class="font-inter text-body1 leading-body1 text-mediumgrey form-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul class="ms-4 mb-4">
          <li class="list-disc text-[#161722] opacity-75">
            <h4 class="font-sen text-h4 leading-h4 text-[#161722]   opacity-90 font-bold">Lorem ipsum dolor sit amet</h4>
          </li>
          <li class="list-disc text-[#161722] opacity-75">
            <h4 class="font-sen text-h4 leading-h4 text-[#161722]   opacity-90 font-bold">Non blandit massa enim nec scelerisque</h4>
          </li>
          <li class="list-disc text-[#161722] opacity-75">
            <h4 class="font-sen text-h4 leading-h4 text-[#161722]   opacity-90 font-bold">Neque egestas congue quisque egestas</h4>
          </li>
        </ul>
        <p class="font-inter text-body1 leading-body1 text-mediumgrey form-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2 class="font-sen text-h2 leading-h2 text-darkblue font-bold tracking-tighter mb-4 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p class="font-inter text-body1 leading-body1 text-mediumgrey form-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
      </div>

    </article>
    <!-- end of post article  -->

    <!-- post recomendation  -->
    <div class="max-w-screen-2xl mx-auto px-8 pb-20 border-b">
          <h2 class="font-sen text-h2 leading-h2 font-bold text-darkblue tracking-tighter mb-16">What to read next</h2>
          <div class="flex justify-between">
            <div class="max-w-[405px]">
              <img :src="Post1" alt="post1" class="">
              <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3 mt-6">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mb-4">A UX Case Study Creating a Studious Environment for Students: </h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div class="max-w-[405px]">
              <img :src="Post2" alt="post2" class="">
              <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3 mt-6">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mb-4">A UX Case Study Creating a Studious Environment for Students: </h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div class="max-w-[405px]">
              <img :src="Post3" alt="post3" class="">
              <p class="font-inter text-label leading-label font-normal text-darkgrey mb-3 mt-6">By <span class="text-yellow">John Deo</span>   l   Aug 23, 2021 </p>
              <h3 class="font-sen text-h3 leading-h3 font-bold text-darkblue tracking-tight mb-4">A UX Case Study Creating a Studious Environment for Students: </h3>
              <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
     </div>
    <!-- end of post recomendation  -->

    <!-- join us -->
        <div class="max-w-screen-2xl mx-auto px-8 py-36">
        <div class="text-center">
          <h2 class="font-sen text-h2 leading-h2 font-bold max-w-md mx-auto tracking-tight mb-6">Join our team to be a part of our story</h2>
          <p class="font-inter text-body1 leading-body1 font-normal text-mediumgrey max-w-md mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <Button variant="primary"  @click="handlePrimaryClick">
                        Join Now
            </Button>
        </div>
     </div>
    <!-- end of join us -->
  </main>
  <Footer/>
</template>
