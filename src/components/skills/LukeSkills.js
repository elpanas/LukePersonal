import React, { useState } from 'react';
import { Card, CardTitle, CardText, Container, Row, Col, Tooltip} from 'reactstrap';
import './skills.css';

const LukeSkills = () => {

  const [tooltipNode, setTooltipNode] = useState(false);
  const toggleNode = () => setTooltipNode(!tooltipNode);

  const [tooltipMongo, setTooltipMongo] = useState(false);
  const toggleMongo = () => setTooltipMongo(!tooltipMongo);

  const [tooltipCss, setTooltipCss] = useState(false);
  const toggleCss = () => setTooltipCss(!tooltipCss);

  const [tooltipJs, setTooltipJs] = useState(false);
  const toggleJs = () => setTooltipJs(!tooltipJs);

  const [tooltipPy, setTooltipPy] = useState(false);
  const togglePy = () => setTooltipPy(!tooltipPy);

  return (
    <div>      
        <Container>
        <h1 className="display-4">Skills</h1> 
        <hr className="my-2" />
          <Row>
          <Col sm="3">
            <Card body inverse color="dark" className="mb-3">
              <CardTitle className="text-center" tag="h5">Generic</CardTitle>
              <CardText>
                  <ul>
                      <li>Mobile Development</li>
                      <li>Data Visualisation</li>                      
                      <li>DBMS</li>
                      <li>Data Analysis</li>
                      <li>Machine Learning</li>
                  </ul>
              </CardText>
            </Card>
          </Col>
          <Col sm="3">
            <Card body inverse color="dark" className="mb-3">
              <CardTitle className="text-center" tag="h5">Specific</CardTitle>
              <CardText>
                <ul>
                    <li>Flutter</li>
                    <li>HTML / <span id="css">CSS</span></li>
                    <li><span id="node">Node.js</span> / <span id="js">JavaScript</span></li>
                    <li>MySQL / <span id="mongo">MongoDB</span></li>
                    <li>Octave</li>
                    <li><span id="py">Python</span> / R</li>
                </ul>
              </CardText>              
            </Card>
          </Col>
          <Col sm="3">
            <Card body inverse color="dark" className="mb-3">
              <CardTitle className="text-center" tag="h5">Soft</CardTitle>
              <CardText>
                <ul>
                    <li>Problem Solving</li>
                    <li>Eager to learn</li>
                    <li>Quick learner</li>
                    <li>Accuracy and flexibility</li>
                </ul>
              </CardText>              
            </Card>
          </Col>
          <Col sm="3">
            <Card body inverse color="dark"className="mb-3">
              <CardTitle className="text-center" tag="h5">Languages</CardTitle>
              <CardText>
                <ul>
                    <li><strong>Italian:</strong> Native</li>
                    <li><strong>English:</strong> B2</li>
                    <li><strong>German:</strong> A1</li>                    
                </ul>
              </CardText>              
            </Card>
          </Col>
          </Row>
        </Container>  
        <Tooltip placement="top" isOpen={tooltipNode} target="node" toggle={toggleNode}>Express</Tooltip>
        <Tooltip placement="top" isOpen={tooltipMongo} target="mongo" toggle={toggleMongo}>Mongoose</Tooltip>
        <Tooltip placement="top" isOpen={tooltipCss} target="css" toggle={toggleCss}>Bootstrap</Tooltip>
        <Tooltip placement="top" isOpen={tooltipJs} target="js" toggle={toggleJs}>React</Tooltip>
        <Tooltip placement="top" isOpen={tooltipPy} target="py" toggle={togglePy}>Django</Tooltip>
    </div>
  );
};

export default LukeSkills;