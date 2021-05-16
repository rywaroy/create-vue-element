import ListActionBar from './src/index.vue';

ListActionBar.install = function (Vue) {
  Vue.component(ListActionBar.name, ListActionBar);
};

export default ListActionBar;
