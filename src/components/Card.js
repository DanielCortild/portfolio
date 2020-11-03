import React from 'react';
import {Row, Col} from 'reactstrap';

import styles from './Card.module.css';

const Card = (props) => {
  const {image, title, description, websites, reverse} = props;
  console.log(websites)
  return (
    <Row className={styles.card}>
      <Col xs={12} md={{size: 6, order: reverse ? 2 : 1}} className="px-5">
        <h2 className="d-md-none d-block text-weight-bolder text-center">{title}</h2>
        <img src={process.env.PUBLIC_URL + "/images/" + image} alt="" />
      </Col>
      <Col xs={12} md={{size: 6, order: 1}} className="px-5">
        <div className="pt-3 pt-md-0">
          <h2 className="d-none d-md-block text-secondary" style={{fontWeight: "700"}}>{title}</h2>
          <p className="mb-4 text-secondary" 
             style={{fontSize: "1.2em", fontWeight: "450"}} 
             dangerouslySetInnerHTML={{__html: description}}></p>
          <div className="text-center text-md-left d-flex flex-column flex-md-row">
            {websites ?
            websites.map( ({link, alias}, index) => 
              <a className="my-button mb-3 mb-md-0 mr-md-3" target="_blank" rel="noopener noreferrer" href={link}>{alias ? alias : 'Visit Website'}</a>)
            : ''}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Card;
