import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Blog from '@/views/BlogView.vue'
import BlogPost from '@/views/BlogPostView.vue'
import About from '@/views/AboutUsView.vue'
import Author from '@/views/AuthorView.vue'
import Category from '@/views/CategoryView.vue'
import Contact from '@/views/ContactView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/post',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/author/:id',
      name: 'Author',
      component: Author,
      props: true // Ini memungkinkan kita untuk menerima id sebagai prop
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/category/:categoryName',
      name: 'category',
      component: Category,
      props: true
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicy
    },

  ]
})

export default router
