import PageLayout from './PageLayout';
import SearchForm from './SearchForm';

const components = [
  PageLayout,
  SearchForm,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  PageLayout,
  SearchForm,
};
