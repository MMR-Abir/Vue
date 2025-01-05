import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodItems from '@/components/FoodItems.vue'
import FruitView from '@/views/FruitView.vue'
import TodoList from '@/views/TodoList.vue'
import RefPage from '@/views/RefPage.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import FormInputs from '@/views/FormInputs.vue'

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

    {
      path: '/ref',
      name: 'ref',
      component: RefPage,
    },

    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle,
    },

    {
      path: '/forminput',
      name: 'forminput',
      component: FormInputs,
    },
    
  ],
})

export default router
