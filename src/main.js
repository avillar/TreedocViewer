import Vue from 'vue';
import Datatable from 'vue2-datatable-component';

import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Datatable);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');