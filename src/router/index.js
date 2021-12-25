import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Untitled-1";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
