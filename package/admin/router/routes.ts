import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [{
  name: 'Home',
  path: '/',
  redirect: '/dashboard',
  component: () => import(/* webpackChunkName: "home"*/ '@admin/home/index.vue'),
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    meta: { title: '仪表盘' },
    component: () => import(/* webpackChunkName: "dashboard" */ '@admin/pages/dashboard/index.vue'),
  }],
}, {
  name: 'Auth',
  path: '/auth',
  redirect: '/auth/login',
  component: () => import(/* webpackChunkName: "auth"*/ '@admin/auth/index.vue'),
  children: [{
    path: 'login',
    name: 'AuthLogin',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "auth" */ '@admin/auth/login.vue'),
  }, {
    path: 'register',
    name: 'AuthRegister',
    meta: { title: '注册' },
    component: () => import(/* webpackChunkName: "auth" */ '@admin/auth/register.vue'),
  }],
}];
