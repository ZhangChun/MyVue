import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Recommend from '@/components/recommend'
import Search from '@/components/search'
import User from '@/components/user'

import Detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
  	{path: '/', redirect: '/index'},  //路由重定向
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {path: '/recommend',name: 'recommend',component: Recommend},
    {path: '/search',name: 'search',component: Search},
    {path: '/user',name: 'user',component: User},
    
    {path: '/detail',name: 'detail',component: Detail}
  ]
})
