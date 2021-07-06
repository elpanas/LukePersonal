import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Tooltip,
} from 'reactstrap';
import BoxSkill from './skillbox';
import './skills.css';

const LukeSkills = () => {
  const skills = [
    {
      skillname: 'Generic',
      skillset: [
        'Mobile Development',
        'Fullstack Development',
        'SQL / NoSQL',
        'Data Analysis',
        'Machine Learning',
      ],
    },
    {
      skillname: 'Soft',
      skillset: [
        'Problem Solving',
        'Eager to learn',
        'Accuracy and flexibility',
      ],
    },
    {
      skillname: 'Languages',
      skillset: ['Italian: Native', 'English: B2', 'German: A1'],
    },
  ];

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
          <BoxSkill
            skillname={skills[0].skillname}
            skillset={skills[0].skillset}
          />
          <Col sm="3">
            <Card body inverse color="dark" className="mb-3">
              <CardTitle className="text-center" tag="h5">
                Specific
              </CardTitle>
              <CardText>
                <ul>
                  <li>Flutter</li>
                  <li>
                    HTML / <span id="css">CSS</span>
                  </li>
                  <li>
                    <span id="node">Node.js</span> /{' '}
                    <span id="js">JavaScript</span>
                  </li>
                  <li>
                    MySQL / <span id="mongo">MongoDB</span>
                  </li>
                  <li>Octave</li>
                  <li>
                    <span id="py">Python</span>
                  </li>
                </ul>
              </CardText>
            </Card>
          </Col>
          <BoxSkill
            skillname={skills[1].skillname}
            skillset={skills[1].skillset}
          />
          <BoxSkill
            skillname={skills[2].skillname}
            skillset={skills[2].skillset}
          />
        </Row>
      </Container>
      <Tooltip
        placement="top"
        isOpen={tooltipNode}
        target="node"
        toggle={toggleNode}
      >
        Express.js
      </Tooltip>
      <Tooltip
        placement="top"
        isOpen={tooltipMongo}
        target="mongo"
        toggle={toggleMongo}
      >
        Mongoose
      </Tooltip>
      <Tooltip
        placement="top"
        isOpen={tooltipCss}
        target="css"
        toggle={toggleCss}
      >
        Bootstrap
      </Tooltip>
      <Tooltip placement="top" isOpen={tooltipJs} target="js" toggle={toggleJs}>
        React.js
      </Tooltip>
      <Tooltip placement="top" isOpen={tooltipPy} target="py" toggle={togglePy}>
        Django
      </Tooltip>
    </div>
  );
};

export default LukeSkills;
