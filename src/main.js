import Vue from 'vue';
import ElementUI from 'element-ui';
import vueHljs from 'vue-hljs';
import hljs from 'highlight.js';

import App from './App.vue';
import router from './router';
import ComponentContainer from './component/ComponentContainer/index.vue';
import InfoOverview from './packages/InfoOverview';
import InfoOverviewItem from './packages/InfoOverviewItem';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-hljs/dist/style.css';
import './assets/reset.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(vueHljs, { hljs });
Vue.component('ComponentContainer', ComponentContainer);

Vue.use(InfoOverview);
Vue.use(InfoOverviewItem);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
