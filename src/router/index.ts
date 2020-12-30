import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Full from "../views/Full.vue";
import Home from "../views/Home.vue";
import Sets from "../views/Sets.vue";
import Comunidad from "../views/Comunidad.vue";
import Delivery from "../views/Delivery.vue";
import Spotify from "../views/Spotify.vue";
import Mundos from "../views/Mundos.vue";
import Privacidad from "../views/Privacidad.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/sitio/',
    name: 'Full',
    redirect: '/sitio/mundos-exclusivos',
    component: Full,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'sets',
        name: 'Sets',
        component: Sets
      },
      {
        path: 'comunidad',
        name: 'Comunidad',
        component: Comunidad
      },
      {
        path: 'mundos-exclusivos',
        name: 'Mundos',
        component: Mundos
      },
      {
        path: 'instant-delivery',
        name: 'Instant',
        component: Delivery
      },
      {
        path: 'spotify',
        name: 'Spotify',
        component: Spotify
      },
      {
        path: 'privacidad',
        name: 'Privacidad',
        component: Privacidad
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: '',
  scrollBehavior: () => ({y: 0, x: 0}),
  routes
});

export default router;
