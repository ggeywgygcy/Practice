import { createRouter, createWebHashHistory } from 'vue-router'
import AddZakl from '@/components/AddZakl.vue'

const routes = [
    {
      path: '/AddZakl',
      name: 'AddZakl',
      component: AddZakl
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router