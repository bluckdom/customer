import Vue from 'vue'
import Router from 'vue-router'
import allCustomer from '@/components/RightContent/allCustomer'
import newCustomer from '@/components/RightContent/newCustomer'
import myCustomer from '@/components/RightContent/myCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/allCustomer',
      name: 'allCustomer',
      component: allCustomer
    },
    {
      path: '/newCustomer',
      name: 'newCustomer',
      component: newCustomer
    },
    {
      path: '/myCustomer',
      name: 'myCustomer',
      component: myCustomer
    },
    {
      path: '/',
      redirect: 'allCustomer'
    }
  ]
})
