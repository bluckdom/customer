import Vue from 'vue'
import Router from 'vue-router'
import myCustomer from '@/components/RightContent/myCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/myCustomer',
      name: 'myCustomer',
      component: myCustomer
    }
  ]
})
