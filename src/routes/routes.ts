export default [
  {
    name: 'Welcome',
    path: '/',
    component: () => import('~/pages/Welcome.vue'),
    meta: {
      layout: 'GuestLayout',
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('~/pages/auth/Login.vue'),
    meta: {
      layout: 'GuestLayout',
    },
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('~/pages/Home.vue'),
  },
  {
    name: 'Product',
    path: '/products',
    component: () => import('~/pages/product/Product.vue'),
  },
];
