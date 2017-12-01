import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import breadcrumb from '../components/supervise/breadcrumb.vue'
import list_supervisor from '../components/supervise/list_supervisor.vue'
import supervisor_list from '../components/supervise/supervisor_list.vue'

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
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: breadcrumb
    },
    {
      path: '/list_supervisor',
      name: 'list_supervisor',
      component: list_supervisor
    },
    {
      path: '/supervisor_list',
      name: 'supervisor_list',
      component: supervisor_list
    },
  ]
})
