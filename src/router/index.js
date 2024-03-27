import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/Courses.vue'
import HomePage from '@/components/HomePage.vue'
import LoginView from '@/views/Login.vue'
import QuestionsView from '@/views/Questions.vue'
import WebdevView from '@/views/Webdev.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/web-development',
      name: 'web-dev',
      component: WebdevView
    }



    
  ]
})

export default router
