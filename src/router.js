import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
  },
  {
    path: '/team',
    name: 'Our Team',
    component: App,
  },
  {
    path: '/outreach',
    name: 'Outreach',
    component: App,
  },
  {
    path: '/mission',
    name: 'Our Mission',
    component: App,
  },
  {
    path: '/support',
    name: 'How to Support',
    component: App,
  },
  {
    path: '/dancers',
    name: 'For Dancers',
    component: App,
  },
];

const router = new VueRouter({
  routes
})

export default router
