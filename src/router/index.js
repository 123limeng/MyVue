import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserManage from '@/views/UserManage/index'
import PersonInfo from '@/views/UserManage/personInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'UserManage',
      component: UserManage
    },
    {
      path: '/personInfo',
      name: 'PersonInfo',
      component: PersonInfo
    }
  ]
})
