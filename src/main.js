import { createApp } from 'vue';
import App from './App.vue';
import CanvasJS from '@canvasjs/vue-charts';

const app = createApp(App);

app.use(CanvasJS);
app.mount('#app');