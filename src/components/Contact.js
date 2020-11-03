import React from 'react';
import {Row} from 'reactstrap';

const Contact = () => {
  return (
    <section style={{background: "rgb(255, 103, 68)"}} className="text-center pt-3 pb-5">

      <Row className="mt-5 mb-md-3">
        <h1 className="m-auto text-center display-md-4 font-weight-bold text-white">Interested in working with me?</h1>
        <h4 className="w-100 text-center font-weight-normal text-white mt-3">I am currently available</h4>
      </Row>
      <div className="mt-5 mb-3">
        <a className="my-button border-white" href="mailto:daniel.cortild@gmail.com">Start Now</a>
      </div>
    </section>
  )
}

export default Contact;
