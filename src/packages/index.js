import PageLayout from './PageLayout';
import SearchForm from './SearchForm';
import ListActionBar from './ListActionBar';
import TableLink from './TableLink';
import TableLinkGroup from './TableLinkGroup';

const components = [
  PageLayout,
  SearchForm,
  ListActionBar,
  TableLink,
  TableLinkGroup,
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
  ListActionBar,
  TableLinkGroup,
};
