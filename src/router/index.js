import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import fetchStatus from '../helpers/api'
import courses from '../helpers/courses'

Vue.use(VueRouter)
let apiRes = {}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      courses,
    },
  },
  {
    path: '/soon',
    name: 'Coming Soon',
    component: () => import(/* webpackChunkName: "soon" */ '../views/Soon.vue'),
  },
  {
    path: '/thankyou',
    name: 'Thank You',
    component: () => import(/* webpackChunkName: "thankyou" */ '../views/ThankYou.vue'),
  },
  {
    path: '/closed',
    name: 'Closed',
    component: () => import(/* webpackChunkName: "closed" */ '../views/Closed.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {
  apiRes = await fetchStatus()

  console.log(apiRes)
  if (to.name === 'Home') {
    console.log('Home')
  } else if (to.name === 'Coming Soon') {
    console.log('Coming Soon')
  } else if (to.name === 'Thank You') {
    console.log('Thank You')
  } else if (to.name === 'Closed') {
    console.log('Closed')
  }
  next()
})

export default router
