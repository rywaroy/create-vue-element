import InfoOverviewItem from './src/index.vue';

InfoOverviewItem.install = function (Vue) {
  Vue.component(InfoOverviewItem.name, InfoOverviewItem);
};

export default InfoOverviewItem;
