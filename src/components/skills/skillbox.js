import React from 'react';
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import './skills.css';

const BoxSkill = (props) => {

  return (    
    <Col sm="3">
      <Card body inverse color="dark" className="mb-3">
        <CardTitle className="text-center" tag="h5">{props.skillname}</CardTitle>
        <CardText>
            <ul>
              {props.skillset.map((value, index) => {
                return <li>{value}</li>
              })}
            </ul>
        </CardText>
      </Card>
    </Col>
  );
};

export default BoxSkill;