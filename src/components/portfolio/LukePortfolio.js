import React from 'react';
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { SiDocker, SiFlutter, SiMongodb, SiMysql, SiNodeDotJs, SiOctave, SiPhp, SiTelegram, SiXamarin } from 'react-icons/si';
import '../../styles/resfont.css';
import './portfolio.css';

const LukePortfolio = () => {
  return (
    <div>        
        <Container>
        <h1 className="display-4">Portfolio</h1> 
        <hr className="my-2" />
          <Row>
          <Col sm="4">
            <Card body inverse color="dark">
              <CardTitle tag="h5">Code Hunting Games</CardTitle>
              <CardText>Bachelor's Degree Thesis Project<br/>
              This project is a fusion of the CodyRoby teaching 
              technique with the most famous "hunting game". 
              It is part of the CodeWeek campaign and 
              It represents my thesis project developed during the internship.
              </CardText>
              <Button><SiFlutter /> - <SiNodeDotJs /> - <SiMongodb /> - <SiDocker /></Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body inverse color="dark">
              <CardTitle tag="h5">Coach@Home</CardTitle>
              <CardText>A mobile app which enables one to search personal trainer for home training in a radius of 20 Km.</CardText>
              <Button><SiFlutter /> - <SiNodeDotJs /> - <SiMongodb /></Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body inverse color="dark">
              <CardTitle tag="h5">BeachU</CardTitle>
              <CardText>A mobile app composed of a client (Bot Telegram) which communicates 
                with a web service implemented in PHP. It allows you to check umbrellas availability 
                of a bathing establishment, just using your position or the name of the place where 
                the establishment is.</CardText>
              <Button><SiXamarin /> / <SiTelegram /> - <SiPhp /> - <SiMysql/></Button>
            </Card>
          </Col>
          </Row>
          <Row>
            <Col sm="4">
            <Card body inverse color="dark">
              <CardTitle tag="h5">OrdKrig</CardTitle>
              <CardText>Geological Modeling Project<br/>
                Calculates ordinary Kriging in a set of P points 
                which have known coordinates in the form of (Px, Py)
              </CardText>
              <Button><SiOctave /></Button>
            </Card>
          </Col>
          </Row>
        </Container>  
    </div>
  );
};

export default LukePortfolio;
