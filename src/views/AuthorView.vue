<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import Header from '../components/pages/author/HeaderSection.vue';
import AuthorPost from '../components/pages/author/AuthorPostsSection.vue';
import Post1 from '@/assets/images/Author/Post-image.png';
import Floyd from '@/assets/images/Author/Floyd.png';
import Dianne from '@/assets/images/Author/Dianne.png';
import Eleanor from '@/assets/images/Author/Elanoar.png';
import Guy from '@/assets/images/Author/Guy.png';
import Jacob from '@/assets/images/Author/Jacob.png';
import Jenny from '@/assets/images/Author/Jenny.png';
import Leslie from '@/assets/images/Author/Leslie.png';
import Robert from '@/assets/images/Author/Robert.png';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const authorData = ref(null);

// Data author 
const authors = [
{
    id: 1,
    name: 'Floyd Miles',
    image: Floyd,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Startup",
        title: "How to succeed in the world of startups",
        content: "This article dives into the latest trends and strategies for a successful startup.",
        image: Post1
      },
      {
        id: 2,
        category: "Technology",
        title: "The future of AI technology",
        content: "Exploring the potential of AI and how it is shaping various industries.",
        image: Post1
      }
    ]
  },
  {
    id: 2,
    name: 'Dianne Russell',
    image: Dianne,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Economy",
        title: "Economic trends to watch in 2024",
        content: "A look at upcoming economic shifts and what they mean for investors.",
        image: Post1
      },
      {
        id: 2,
        category: "Business",
        title: "Effective business strategies for growth",
        content: "Key strategies that businesses can use to enhance productivity and growth.",
        image: Post1
      }
    ]
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    image: Jenny,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Business",
        title: "UI design trends in 2024",
        content: "A comprehensive guide to choosing the right font sizes in UI design.",
        image: Post1
      },
      {
        id: 2,
        category: "Technology",
        title: "The rise of sustainable technology",
        content: "Discussing how tech advancements contribute to a sustainable future.",
        image: Post1
      }
    ]
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    image: Leslie,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Economy",
        title: "How to build rapport with your clients",
        content: "This article discusses methods to enhance client relationships effectively.",
        image: Post1
      },
      {
        id: 2,
        category: "Startup",
        title: "Launching a startup: Steps to success",
        content: "Guiding you through essential steps for a successful startup launch.",
        image: Post1
      }
    ]
  },
  {
    id: 5,
    name: 'Guy Hawkins',
    image: Guy,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Startup",
        title: "How to succeed in the world of startups",
        content: "This article dives into the latest trends and strategies for a successful startup.",
        image: Post1
      },
      {
        id: 2,
        category: "Technology",
        title: "The future of AI technology",
        content: "Exploring the potential of AI and how it is shaping various industries.",
        image: Post1
      }
    ]
  },
  {
    id: 6,
    name: 'Eleanor Pena',
    image: Eleanor,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Economy",
        title: "Economic trends to watch in 2024",
        content: "A look at upcoming economic shifts and what they mean for investors.",
        image: Post1
      },
      {
        id: 2,
        category: "Business",
        title: "Effective business strategies for growth",
        content: "Key strategies that businesses can use to enhance productivity and growth.",
        image: Post1
      }
    ]
  },
  {
    id: 7,
    name: 'Robert Fox',
    image: Robert,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Business",
        title: "UI design trends in 2024",
        content: "A comprehensive guide to choosing the right font sizes in UI design.",
        image: Post1
      },
      {
        id: 2,
        category: "Technology",
        title: "The rise of sustainable technology",
        content: "Discussing how tech advancements contribute to a sustainable future.",
        image: Post1
      }
    ]
  },
  {
    id: 8,
    name: 'Jacob Jones',
    image: Jacob,
    job: "Content Writer @Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: [
      {
        id: 1,
        category: "Economy",
        title: "How to build rapport with your clients",
        content: "This article discusses methods to enhance client relationships effectively.",
        image: Post1
      },
      {
        id: 2,
        category: "Startup",
        title: "Launching a startup: Steps to success",
        content: "Guiding you through essential steps for a successful startup launch.",
        image: Post1
      }
    ]
  },
  // Tambahkan author lain di sini
];

onMounted(() => {
  // Mencari author berdasarkan id dari URL
  authorData.value = authors.find(author => author.id === parseInt(route.params.id));
});
</script>

<template>
  <div v-if="authorData">
    <Navbar />
    <Header 
      :name="authorData.name"
      :image="authorData.image"
      :description="authorData.description"
    />
    <AuthorPost :posts="authorData.posts" />
    <Footer />
  </div>
</template>