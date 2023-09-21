import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './react/index.jsx';
import HelloVue from './vue/index.vue';
import { createApp } from 'vue';

const vueApp = createApp(HelloVue);

vueApp.mount('#vueApp');
