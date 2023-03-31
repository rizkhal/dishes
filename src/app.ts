import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes';
import { layout } from './hooks/useLayout';
import './assets/css/app.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');

layout(app);
