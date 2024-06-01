import { createRouter, createWebHashHistory } from 'vue-router'
import AddZakl from '@/components/AddZakl.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import News from '@/components/News.vue'
import CardZakl from '@/components/CardZakl.vue'
import Instruction from '@/components/Instruction.vue'

const routes = [
    {
      path: '/AddZakl',
      name: 'AddZakl',
      component: AddZakl
    },
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/CardZakl',
      name: 'CardZakl',
      component: CardZakl
    },
    {
      path: '/Instruction',
      name: 'Instruction',
      component: Instruction
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  