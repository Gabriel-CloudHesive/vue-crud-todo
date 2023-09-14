import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/todos",
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("../views/Todos.vue"),
  },
  {
    path: "/todos/create",
    name: "todos-create",
    component: () => import("../views/TodoCreate.vue"),
  },
  {
    path: "/todos/:id/update",
    name: "todos-update",
    component: () => import("../views/TodoUpdate.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
