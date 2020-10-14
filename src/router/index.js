import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'

import fetchStatus from '../helpers/api'
import courses from '../helpers/courses'

let apiRes = {}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      openTime: apiRes.open,
      closeTime: apiRes.close,
      courses,
    },
  },
  {
    path: '/soon',
    name: 'Soon',
    component: () => import(/* webpackChunkName: "soon" */ '../views/Soon.vue'),
  },
  {
    path: '/thankyou',
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "thankyou" */ '../views/ThankYou.vue'),
  },
  {
    path: '/closed',
    name: 'Closed',
    component: () => import(/* webpackChunkName: "closed" */ '../views/Closed.vue'),
  },
  {
    path: '*',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (to, from, next) => {
  apiRes = await fetchStatus()

  if (to.name === 'Home') {
    if (apiRes.status === 412 && apiRes.debug !== true) {
      if (apiRes.message === 'Coming Soon.') return next({ name: 'Soon' })
      return next({ name: 'Closed' })
    }
  } else if (to.name === 'Soon') {
    if (apiRes.status !== 412 && apiRes.debug !== true) return next({ name: 'Home' })
    if (apiRes.message === 'Closed.') return next({ name: 'Closed' })
  } else if (to.name === 'Thanks' && apiRes.debug !== true) {
    if (apiRes.status === 412 && apiRes.debug !== true) {
      if (apiRes.message === 'Coming Soon.') return next({ name: 'Soon' })
      return next({ name: 'Closed' })
    }
    if (from.name !== 'Home') return next({ name: 'Home' })
  } else if (to.name === 'Closed') {
    if (apiRes.status !== 412 && apiRes.debug !== true) return next({ name: 'Home' })
    if (apiRes.message === 'Coming Soon.' && apiRes.debug !== true) return next({ name: 'Soon' })
  }
  return next()
})

export default router
