import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/index.vue";
import Sendus from "./pages/sendus.vue";
import Apply from "./pages/apply.vue";
import Aboutus from "./pages/aboutus.vue";
import NotFound from "./pages/404.vue";
import Jacket from "./pages/jacket.vue";
import Shirt from "./pages/shirt.vue";
import Pant from "./pages/pant.vue";
import Shoes from "./pages/shoes.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/sendus",
    name: "Send Us",
    component: Sendus,
  },
  {
    path: "/apply",
    name: "Apply",
    component: Apply,
  },
  {
    path: "/aboutus",
    name: "About Us",
    component: Aboutus,
  },
  {
    path: "/jacket",
    name: "Jacket",
    component: Jacket,
  },
  {
    path: "/shirt",
    name: "Shirt",
    component: Shirt,
  },
  {
    path: "/pant",
    name: "Pant",
    component: Pant,
  },
  {
    path: "/shoes",
    name: "Shoes",
    component: Shoes,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
