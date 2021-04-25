import FlexBox from './src/index.vue';

FlexBox.install = function (Vue) {
  Vue.component(FlexBox.name, FlexBox);
};

export default FlexBox;
