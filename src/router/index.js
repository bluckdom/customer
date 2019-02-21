import Vue from 'vue'
import Router from 'vue-router'
import myCustomer from '@/components/RightContent/myCustomer'
import newCustomer from '@/components/RightContent/newCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/myCustomer',
      name: 'myCustomer',
      component: myCustomer
    },
    {
      path: '/newCustomer',
      name: 'newCustomer',
      component: newCustomer
    },
    {
      path: '/',
      redirect: 'myCustomer'
    }
  ]
})
