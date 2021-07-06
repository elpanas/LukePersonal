import React from 'react';
import { Card, CardTitle, CardText, Button, Col } from 'reactstrap';

const BoxPortfolio = (props) => {
  return (
    <Col sm="4">
      <Card body inverse color="dark" className="mb-3">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardText>
          {props.subtitle}
          <br />
          {props.text}
        </CardText>
        <Button>{props.techs}</Button>
      </Card>
    </Col>
  );
};

export default BoxPortfolio;
