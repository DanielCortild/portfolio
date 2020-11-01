import React from 'react';
import ProjectCard from '../Components/ProjectCard';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'ProjectCard',
  component: ProjectCard
};

const Template = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: "amazon.png",
  title: "Amazon Clone",
  description: `This Amazon Clone is built using a ReactJS frontend, and an ExpressJS backend. 
                Both are hosted on Firebase using Firebase Hosting and Firebase Functions.`,
  url: "https://amazon.danielcortild.me"
}