import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodItems from '@/components/FoodItems.vue'
import FruitView from '@/views/FruitView.vue'
import TodoList from '@/views/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/food',
      name: 'food',
      component: FoodItems,
    },

    {
      path: '/fruits',
      name: 'fruits',
      component: FruitView,
    },

    {
      path: '/todo',
      name: 'todo',
      component: TodoList,
    },
    
  ],
})

export default router
