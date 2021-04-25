import InfoOverview from './src/index.vue';

InfoOverview.install = function (Vue) {
  Vue.component(InfoOverview.name, InfoOverview);
};

export default InfoOverview;
