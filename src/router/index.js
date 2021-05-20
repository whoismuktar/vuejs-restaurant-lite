import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/meals",
    name: "Meals",
    component: () => import("../views/Meals.vue"),
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: () => import("../views/Restaurants.vue"),
  },
  {
    path: "/final",
    name: "Final",
    component: () => import("../views/Final.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
