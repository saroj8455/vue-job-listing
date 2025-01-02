import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

const app = createApp(App);
const options = {
	// You can set your default options here
};

// Install the store instance as a plugin
app.use(store);
app.use(router);
app.use(Toast, options);

app.mount('#app');
