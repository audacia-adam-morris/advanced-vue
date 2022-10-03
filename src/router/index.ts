import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AccountView from "../views/AccountView.vue";
import ProfileView from "../views/ProfileView.vue";
import ExploreView from "../views/ExploreView.vue";
import BlogPostViewVue from "@/views/BlogPostView.vue";

// remember to import, use ctrl + f

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile/:username", // here 'username' is a parameter that is being added into the router information, multiple parameters can be passed in. It can also be called a 'segment'. 
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProfileView,
      // this is imported when the component is requested by the user
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
    },
    {
      path: "/blogPost/:blogPostName",
      name: "blogPost",
      component: BlogPostViewVue,
    },
  ],
});

export default router;
