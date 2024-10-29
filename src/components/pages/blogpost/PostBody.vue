<script setup> 
import ProfilePic from '@/assets/images/Blog Post/profile_picture.png';
import PostImage from '@/assets/images/Blog Post/main_post.png';
import Icon1 from '@/assets/images/component/Categories icon/Startup.png';

</script>
<template>

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
</template>