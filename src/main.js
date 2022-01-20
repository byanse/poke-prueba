import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Image from 'primevue/image';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Image', Image);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Card', Card);

app.mount('#app');
