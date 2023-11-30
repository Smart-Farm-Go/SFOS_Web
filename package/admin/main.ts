import 'element-plus/theme-chalk/index.css';
import * as ElementPlus from 'element-plus';
import logger from '@utils/Logger.ts';
import { useRoutes } from './router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@src/App.vue';

async function bootstrap() {
  const app = createApp(App);
  app.use(createPinia());
  await useRoutes(app);
  app.use(ElementPlus);
  app.mount('#app');
}

window.__CONFIG__ = {
  tags: 'web',
  title: 'SFOS后台管理',
  titleSuffix: '- SFOS后台管理',
  //
  log: true,
  api: {
    port: 9871,
    baseApi: '/api',
    host: '127.0.0.1',
    timeout: 1000 * 60 * 10, // 10分钟
    headers: {
      'Content-Type': 'application/json; utf8',
    },
  },
};

Object.freeze(window.__CONFIG__);

bootstrap().then(() => {
  logger.log('SFOS_Web 是 SFOS 的 web 端将提供 UI 查看以及交互。');
});
