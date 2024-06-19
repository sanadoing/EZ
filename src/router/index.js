import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/signin",
      name: "SignIn",
      component: () => import("@/components/login/SignIn.vue"),
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("@/components/login/SignUp.vue"),
    },
  ],
});

export default router;
