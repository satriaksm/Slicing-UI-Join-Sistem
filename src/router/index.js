import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Blog from '@/views/BlogView.vue'
import BlogPost from '@/views/BlogPostView.vue'

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

  ]
})

export default router
