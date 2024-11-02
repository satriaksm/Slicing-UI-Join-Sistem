<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot> 
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'; 

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  to: {
    type: String,
    default: null,
  },
});

const router = useRouter();

const buttonClass = props.variant === 'primary' 
  ? 'bg-primary h6 text-white py-4 px-12 hover:bg-secondary transition duration-300' 
  : 'bg-primary text-white h6 py-3 px-8 rounded-full hover:bg-secondary transition duration-300';

const handleClick = (event) => {
  if (props.to) {
    router.push(props.to);
  }
  props.onClick(event);
};
</script>
