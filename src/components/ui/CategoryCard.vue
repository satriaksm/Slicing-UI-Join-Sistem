<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  baseClass: {
    type: String,
    default: ''
  },
  extraClass: {
    type: String,
    default: ''
  }
});

const defaultClass = 'p-8 border max-w-80 hover:bg-blue group transition duration-300';

const handleClick = (event) => {
  event.preventDefault();
  router.push(props.category.link);
};
</script>

<template>
  <a 
    :href="category.link" 
    :class="[baseClass || defaultClass, extraClass]"
    @click="handleClick"
  >
    <div>
      <img :src="category.icon" alt="" class="bg-lightyellow rounded-lg">
    </div>
    <div>
      <h3 class="h3 text-darkblue group-hover:text-white transition duration-300">{{ category.name }}</h3>
    </div>
    <div>
      <p class="body1 font-normal text-mediumgrey group-hover:text-white transition duration-300">{{category.description}}</p>
    </div>
  </a>
</template>