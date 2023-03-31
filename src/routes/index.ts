import routes from './routes';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('accessToken');

  if (authRequired && !loggedIn) {
    next('/login');
  } else if (loggedIn && to.name === 'Login') {
    next('/home');
  } else {
    next();
  }
});

export { router };
