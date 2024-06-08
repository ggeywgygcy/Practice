import { createRouter, createWebHashHistory } from 'vue-router'
import AddZakl from '@/components/AddZakl.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import CardZakl from '@/components/CardZakl.vue'
import News from '@/components/News.vue'
import Instruction from '@/components/Instruction.vue'
import ListStaff from '@/views/ListStaff.vue'

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
      path: '/ListStaff',
      name: 'CardZakl',
      component: CardZakl
    },
    {
      path: '/CardZakl',
      name: 'ListStaff',
      component: ListStaff
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
  