import CustomLabelFormItem from './src/index.vue';

CustomLabelFormItem.install = function (Vue) {
  Vue.component(CustomLabelFormItem.name, CustomLabelFormItem);
};

export default CustomLabelFormItem;
