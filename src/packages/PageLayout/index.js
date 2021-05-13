import PageLayout from './src/index.vue';

PageLayout.install = function (Vue) {
  Vue.component(PageLayout.name, PageLayout);
};

export default PageLayout;
