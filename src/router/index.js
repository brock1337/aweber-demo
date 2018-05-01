import Vue from 'vue'
import Router from 'vue-router'
import AweberSignup from '@/components/AweberSignup'
import AweberDashboard from '@/components/AweberDashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: AweberDashboard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: AweberSignup
    }
  ]
})
