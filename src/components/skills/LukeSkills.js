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
        'Web Development',
        'Backend Development',
        'Generic Development',
        'SQL / NoSQL',
        'Containerization',
        'Version Management',
        'Machine Learning',
        'Geomatics',
      ],
    },
    {
      skillname: 'Soft',
      skillset: [
        'Problem Solving',
        'Accuracy and flexibility',
        'Priorities management',
        'Eager to learn',
        'Extrovert',
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

  const [tooltipCsharp, setTooltipCsharp] = useState(false);
  const toggleCsharp = () => setTooltipCsharp(!tooltipCsharp);

  const [tooltipJs, setTooltipJs] = useState(false);
  const toggleJs = () => setTooltipJs(!tooltipJs);

  /*
  const [tooltipCss, setTooltipCss] = useState(false);
  const toggleCss = () => setTooltipCss(!tooltipCss);  

  const [tooltipPy, setTooltipPy] = useState(false);
  const togglePy = () => setTooltipPy(!tooltipPy);  
  */

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
                  <li>Flutter / Xamarin</li>
                  <li>
                    HTML5 / <span id="js">JavaScript</span>
                  </li>
                  <li>
                    <span id="node">Node.js</span>
                  </li>
                  <li>
                    <span id="csharp">C#</span>
                  </li>
                  <li>
                    MySQL / <span id="mongo">MongoDB</span>
                  </li>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>Python</li>
                  <li>QGIS</li>
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
        isOpen={tooltipCsharp}
        target="csharp"
        toggle={toggleCsharp}
      >
        .NET Framework
      </Tooltip>

      <Tooltip placement="top" isOpen={tooltipJs} target="js" toggle={toggleJs}>
        React
      </Tooltip>
    </div>
  );
};

export default LukeSkills;
