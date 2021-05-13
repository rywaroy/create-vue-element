import SearchForm from './src/index.vue';

SearchForm.install = function (Vue) {
  Vue.component(SearchForm.name, SearchForm);
};

export default SearchForm;
