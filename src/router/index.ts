import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    component:login
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
