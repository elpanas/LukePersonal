import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HomePage.css';
import '../../styles/resfont.css'

const HomePage = () => {

  return (
    <div>      
        <Container> 
          <Row >
            <Col><h1 id="titlename" className="display-3">Luca Panariello</h1></Col>
          </Row>          
          <Row className="justify-content-center">            
            <Col xs="auto" sm="2"><img src="images/profile.png" className="photo rounded-circle img-thumbnail shadow" alt="50%50" /><br/><br/> </Col> 
            <Col sm="10"><p className="lead subtext ">Hi, I'm Luca. I am a software engineer living in Italy.
                I got my Bachelor's Degree in February 2021 with a thesis
                on mobile development applied to digital education.
                I'm currently enrolled in the Master's Degree course in 
                Applied Computer Science at the University of Urbino. 
                I attend online courses in order to deepen languages, technologies and acquire new skills.
                Actually I'm looking for an internship in data science or development,
                because I want to learn, improve and make practice.<br/>                
                </p>
                <blockquote class="blockquote text-right">
                  <p class="mb-0 quote">Do. Or do not. There is no try.</p>
                  <footer class="blockquote-footer subquote">Yoda Master <cite title="Source Title">Star Wars</cite></footer>
                </blockquote>
            </Col>
          </Row> 
          <Row>
            <Col>
              <p className="lead subtext">Master's Degree Student in Applied Computer Science</p>
            </Col>
          </Row>         
        </Container>              
    </div>
  );
};
export default HomePage;

