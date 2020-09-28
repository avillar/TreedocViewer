import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import Datatable from 'vue2-datatable-component';
import BootstrapVue from 'bootstrap-vue';
import msplit from 'msplit';
import App from './App.vue';
import TreeViewItem from './components/TreeViewItem.vue';
import { codemirror } from 'vue-codemirror-lite';

Vue.config.productionTip = false;
Vue.use(Datatable);
Vue.use(BootstrapVue);
Vue.use(msplit);
Vue.component('tree-view-item', TreeViewItem);
Vue.component('codemirror', codemirror);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
