import { createApp } from 'vue'
import App from './App.vue'
import NavbarView from './components/NavbarView.vue';
import FormView from './components/FormView.vue';
import CardView from './components/CardView.vue';
const app = createApp(App);
app.component('NavbarView',NavbarView);
app.component('FormView',FormView);
app.component('CardView',CardView);
app.mount('#app')
