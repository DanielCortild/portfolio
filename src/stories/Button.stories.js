import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../Components/Button';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args}>Hello</Button>;

export const Primary = Template.bind({});
Primary.args = {
  href: "https://www.google.com",
  target: "_blank"
}