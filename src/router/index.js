import { createRouter, createWebHashHistory } from 'vue-router'
import AddZakl from '@/components/AddZakl.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import News from '@/components/News.vue'
import CardZakl from '@/components/CardZakl.vue'

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
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router