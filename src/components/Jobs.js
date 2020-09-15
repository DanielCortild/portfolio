import React from 'react';
import { Row } from 'reactstrap';
import Card from './Cards/Card';


export default () => {
  return (
    <section style={{background: "#d4d4d4"}} className="py-2 pb-5">
      <Row className="mt-5 mb-2 mb-md-3">
        <h1 className="m-auto text-center display-md-4 font-weight-bold" style={{color: "rgb(255, 103, 68)"}}>Previous Jobs</h1>
        <h4 className="w-100 text-center font-weight-normal text-muted mt-4">These are some companies I have worked for in the past</h4>
      </Row>

      <Card reverse
        image="edifly.png"
        title="EDIfly"
        description="I designed EDIfly's current homepage. This landing page is designed in ReactJS, using a RoR backend server for file management."
        websites={[{link: "http://www.edifly.com"}]}/>

    </section>
  )
}