import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Image from 'primevue/image';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Image', Image);

app.mount('#app');
