import { Fragment } from 'react';
import { Container as Component } from './Container';

export default {
  title: 'Components/Container',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Container = Template.bind({});
Container.args = {
  title: 'Airline scheduling',
  className: 'container-test',
  children: 'Lorem ipsum',
}
