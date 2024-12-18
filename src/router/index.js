import { createRouter, createWebHistory } from 'vue-router';
import JoinView from '../views/JoinView.vue';
import LoginView from '../views/LoginView';
import JoinSecondView from '../views/JoinSecondView';
import Section from '../components/Section.vue';

const routes = [
  {
    path : '/',
    component : Section
  },
  {
    path : '/Login',
    component : LoginView
  },
  {
    path : '/Join',
    component : JoinView
  },
  {
    path : '/JoinSecond',
    component : JoinSecondView
  }
];

const router = createRouter({
<<<<<<< HEAD
  history : createWebHistory('/gov/'),
=======
  history : createWebHistory('/'),
>>>>>>> 2f78274e78f826f0689cb8adfa7538b20e1b8971
  routes
});

export default router;