import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Meals from '@/views/Meals.vue';
import Restaurants from '@/views/Restaurants.vue';
import Final from '@/views/Final.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/final',
    name: 'Final',
    component: Final
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
