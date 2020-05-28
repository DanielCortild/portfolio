import React from 'react';
import {Row, Col} from 'reactstrap';

import cx from 'classnames';

import styles from './Project.module.css';

const Project = (props) => {
  const {image, title, description,  website, reverse} = props;
  return (
    <Row className={styles.project}>
      <Col xs={12} md={{size: 6, order: reverse ? 2 : 1}}>
        <h2 className="d-md-none d-block text-weight-bolder text-center">{title}</h2>
        <img src={process.env.PUBLIC_URL + "/images/" + image} alt="" />
      </Col>
      <Col xs={12} md={{size: 6, order: 1}}>
        <div className="pt-3 pt-md-0">
          <h2 className="d-none d-md-block text-weight-bolder">{title}</h2>
          <p className="mb-4">{description}</p>
          <a className="my-button" target="_blank" href={website}>Visit Website</a>
        </div>
      </Col>
    </Row>
  )
}

export default Project;