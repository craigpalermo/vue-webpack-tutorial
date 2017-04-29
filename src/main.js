import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message/Message.vue';
import Home from './Home.vue';
import Input from './Message/Input.vue';
import Users from './Users.vue';

// Define our components
Vue.component('app-message', Message);
Vue.component('app-input', Input);

// Use packages
Vue.use(VueRouter);

// Define our routes
const routes = [
  {
    path: '/message',
    component: Message,
  },
  {
    path: '/users/:teamId',
    component: Users,
  },
  {
    path: '/',
    component: Home,
  }
];

// Create the router
const router = new VueRouter({
  mode: 'history',
  routes,
});

// Create the root component
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
