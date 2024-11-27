import { createRouter, createWebHistory } from 'vue-router'
import Votacions from '../components/VotacionsScreen.vue'
import Login from '../components/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/votacions',
      name: 'votacions',
      component: Votacions,
    },
  ],
})

export default router
