import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Projects from '../Components/Projects';

export default {
  title: 'Projects',
  component: Projects
};

const Template = (args) => <Projects {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  projects: [
    {
      image: "amazon.png",
      title: "Amazon Clone",
      description: `This Amazon Clone is built using a ReactJS frontend, and an ExpressJS backend. 
                    Both are hosted on Firebase using Firebase Hosting and Firebase Functions.`,
      url: "https://amazon.danielcortild.me"
    },
    {
      image: "tictactoe.png",
      title: "TicTacToe",
      description: `Web interface of a Artificial IntelligenceTicTacToe Agent.<br /> The agents are training based on the following <a href='https://ia601402.us.archive.org/18/items/IA_dans_les_jeux/L_IA_dans_les_jeux%20%283%29.pdf'>article</a> (Only in French).`,
      url: "https://cssm-tictactoe.herokuapp.com/"
    },
    {
      image: "covid.png",
      title: "Covid-19 Tracker",
      description: `This project is build in ReactJS, using an API tracking the Covid-19 data and ChartJS2 for plotting the data.`,
      url: "https://danielcortild.github.io/Covid19Tracker/"
    },
    {
      image: "airport.png",
      title: "Airport Locator",
      description: `This project fetches data from an external API, and places markers on a Leaflet WikiMedia Map.`,
      url: "https://danielcortild.github.io/AirportLocator/"
    }
  ]
}