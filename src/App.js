import React from 'react';

import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Jobs from './Components/Jobs';
import Teaching from './Components/Teaching';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';

const projects = [
  {
    image: 'messenger.png',
    title: 'Realtime Message App',
    description:
      'This project uses Realtime Firebase Firestore database to store messages. The app is built using ReactJS on the front-end, using ReactFlipMove for animations.',
    url: 'https://messenger.danielcortild.me',
    lastUpdated: '6th of November 2020',
  },
  {
    image: 'covid.png',
    title: 'Covid-19 Tracker',
    description:
      'This project is build in ReactJS, using the <a href="https://www.disease.sh" target="_blank">disease.sh</a> API tracking the Covid-19 data and ChartJS2 for plotting the data.',
    url: 'https://covid.danielcortild.me',
    lastUpdated: '30st of October 2020',
  },
  {
    image: 'amazon.png',
    title: 'Amazon Clone',
    description:
      'This Amazon Clone is built using a ReactJS frontend and an ExpressJS backend, and deployed on Firebase. It has full e-commerce functionality, including Stripe payment. ',
    url: 'https://amazon.danielcortild.me',
    lastUpdated: '23rd of October 2020',
  },
  {
    image: 'airport.png',
    title: 'Airport Locator',
    description:
      'The Airport Locator is built using plain HTML/CSS/JS. It fetches data from an external API, and places markers on a Leaflet WikiMedia Map.',
    url: 'https://airport.danielcortild.me',
    lastUpdated: '6th of June 2020',
  },
  {
    image: 'tictactoe.png',
    title: 'TicTacToe',
    description:
      'Web interface of an Artificial Intelligence TicTacToe Agent.<br /> The agents are training based on the following <a href="https://ia601402.us.archive.org/18/items/IA_dans_les_jeux/L_IA_dans_les_jeux%20%283%29.pdf">article</a> (Only in French).',
    url: 'https://cssm-tictactoe.herokuapp.com/',
    lastUpdated: '27th of April 2020',
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <About />
        <Experience />
        <Jobs />
        <Projects projects={projects} />
        <Teaching />
        <Contact />
        <Copyright />
      </div>
    </React.Fragment>
  );
}

export default App;
