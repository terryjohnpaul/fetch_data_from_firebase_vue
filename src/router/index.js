import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import addsmoothie from "@/components/addsmoothie";
import editsmoothie from "@/components/editsmoothie";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/add-smoothie",
      name: "addsmoothie",
      component: addsmoothie
    },
    {
      path: "/edit-smoothie/:smoothie_slug",
      name: "editsmoothie",
      component: editsmoothie
    }
  ]
});
