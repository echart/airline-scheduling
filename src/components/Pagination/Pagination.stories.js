import { Pagination as Component } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const AllButtonsAvailabile = Template.bind({});
AllButtonsAvailabile.args = {
  currentPage: 3,
  total: 8,
}

export const BackDisabled = Template.bind({});
BackDisabled.args = {
  currentPage: 1,
  total: 8,
}

export const NextDisabled = Template.bind({});
NextDisabled.args = {
  currentPage: 8,
  total: 8,
}
