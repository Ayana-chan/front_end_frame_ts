import App from './App.vue';
import router from './router';
import pinia from './stores';

// global css
import 'normalize.css';
import 'animate.css';
import 'hover.css';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
