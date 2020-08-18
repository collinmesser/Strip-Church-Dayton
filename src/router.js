import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: 'team',
    name: 'Our Team',
    component: Home,
  },
  {
    path: 'outreach',
    name: 'Outreach',
    component: Home,
  },
  {
    path: 'mission',
    name: 'Our Mission',
    component: Home,
  },
  {
    path: 'support',
    name: 'How to Support',
    component: Home,
  },
  {
    path: 'dancers',
    name: 'For Dancers',
    component: Home,
  },
];

const router = new VueRouter({
  routes
})

export default router
