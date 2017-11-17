import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '/login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    },

  ]
})
