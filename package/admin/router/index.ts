import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@stores/user.stores.ts';
import { Logger } from '@utils/Logger.ts';
import { routes } from './routes';
import { App } from 'vue';

const logger = new Logger('Router');
const router = createRouter({
  routes,
  history: createWebHistory(),
});

let isLogin = true;

router.beforeEach(async (to, _, next) => {
  setDocTitle((to.meta.title) as string || '');

  if (!isLogin && !to.fullPath.includes('auth')) {
    logger.info('检测用户登录');
    const user = useUserStore();

    if (!user.token) {
      logger.info('未登录，跳转到登录页面。');
      return next({ path: '/auth/login' });
    }

    if (user.accessIsExpires) {
      logger.info('登录过期，跳转到登录页面。');
      return next({ path: '/auth/login' });
    }
  }

  next();
});

function setDocTitle(title = '') {
  if (title) {
    document.title = `${title} ${window.__CONFIG__.titleSuffix}`;
  } else {
    document.title = `${window.__CONFIG__.title}`;
  }
}

export default router;

export async function useRoutes(app: App<Element>) {
  app.use(router);
  await router.isReady();
  return app;
}
