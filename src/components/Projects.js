import React from 'react';
import { Row } from 'reactstrap';
import Card from './Cards/Card';


const Projects = () => {
  return (
    <section style={{background: "#ffffff"}} className="py-2 pb-5">
      <Row className="mt-5 mb-2 mb-md-3">
        <h1 className="m-auto text-center display-md-4 font-weight-bold" style={{color: "rgb(255, 103, 68)"}}>Previous Projects</h1>
        <h4 className="w-100 text-center font-weight-normal text-muted mt-4">Here is a collection of some of my projects</h4>
      </Row>

      <Card reverse
        image="amazon.jpg"
        title="Amazon Price Scraper"
        description="This project built in Python with Selenium scrapes all the prices of a certain research on Amazon, and creates a report allowing you to compare the different products."
        websites={[{link: "https://github.com/DanielCortild/AmazonPriceTracker"}]}/>

      <Card
        image="covid.png"
        title="Covid-19 Tracker"
        description="This project is build in ReactJS, using an API tracking the Covid-19 data and ChartJS2 for plotting the data."
        websites={[{link: "https://danielcortild.github.io/Covid19Tracker/"}]}/>

      <Card reverse
        image="airport.png"
        title="Airport Locator"
        description="This project fetches data from an external API, and places markers on a Leaflet WikiMedia Map."
        websites={[{link: "https://danielcortild.github.io/AirportLocator/"}]}/>

      <Card
        image="tictactoe.png"
        title="TicTacToe"
        description="Web interface of a Artificial IntelligenceTicTacToe Agent.<br /> The agents are training based on the following <a href='https://ia601402.us.archive.org/18/items/IA_dans_les_jeux/L_IA_dans_les_jeux%20%283%29.pdf'>article</a> (Only in French)."
        websites={[{link: "https://cssm-tictactoe.herokuapp.com/"}]}/>
    </section>
  )
}

export default Projects;
