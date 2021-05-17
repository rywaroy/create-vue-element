import Vue from 'vue';
import ElementUI from 'element-ui';
import vueHljs from 'vue-hljs';
import hljs from 'highlight.js';

import App from './App.vue';
import router from './router';
import ComponentContainer from './component/ComponentContainer';
import BaseContainer from './component/BaseContainer';

import InfoOverview from './packages/InfoOverview';
import InfoOverviewItem from './packages/InfoOverviewItem';
import InfoDetail from './packages/InfoDetail';
import InfoDetailRow from './packages/InfoDetailRow';
import InfoDetailItem from './packages/InfoDetailItem';
import Veui from './packages';

import dialogHelper from './plugins/dialog-helper';

import 'element-ui/lib/theme-chalk/index.css';
import 'vue-hljs/dist/style.css';
import './assets/reset.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(vueHljs, { hljs });
Vue.component('ComponentContainer', ComponentContainer);
Vue.component('BaseContainer', BaseContainer);

Vue.use(InfoOverview);
Vue.use(InfoOverviewItem);
Vue.use(InfoDetail);
Vue.use(InfoDetailRow);
Vue.use(InfoDetailItem);
Vue.use(Veui);

Vue.use(dialogHelper);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
