import React from 'react';
import { Container, Row } from 'reactstrap';
import '../../styles/resfont.css';
import './portfolio.css';
import BoxPortfolio from './portfoliobox';

const LukePortfolio = () => {

  const projects = [
    {
      title: "Code Hunting Games",
      subtitle: "Bachelor's Degree Thesis Project",
      text: 'This project is a fusion of the CodyRoby teaching technique with the most famous "hunting game". It is part of the CodeWeek campaign and It represents my thesis project developed during the internship.',
      techs: "Flutter - Node.js - MongoDB - Docker"
    },
    {
      title: "Coach@Home",
      subtitle: 'Mobile App Project',
      text: "A mobile app which enables one to search personal trainer for home training in a radius of 20 Km.",
      techs: "Flutter - Node.js - MongoDB"
    },
    {
      title: "BeachU",
      subtitle: "Digital Platform Project",
      text: "A mobile app composed of a client (Bot Telegram) which communicates with a web service implemented in PHP. It allows you to check umbrellas availability of a bathing establishment, just using your position or the name of the place where the establishment is.",
      techs: "Xamarin / Telegram - PHP - MySQL"
    },
    {
      title: "OrdKrig",
      subtitle: 'Geological Modeling Project',
      text: "Calculates ordinary Kriging in a set of P points which have known coordinates in the form of (Px, Py)",
      techs: "Octave"
    },
    {
      title: "Luca's Portfolio",
      subtitle: 'Personal project',
      text: "Just a portfolio website, which is a project itself",
      techs: "React.js"
    },
  ];

  return (
    <div>        
        <Container>
          <h1 className="display-4">Projects</h1> 
          <hr className="my-2" />          
          <Row>          
            <BoxPortfolio 
              title={projects[0].title}
              subtitle={projects[0].subtitle}
              text={projects[0].text}
              techs={projects[0].techs}/>
            <BoxPortfolio 
              title={projects[1].title}
              subtitle={projects[1].subtitle}
              text={projects[1].text}
              techs={projects[1].techs}/>
            <BoxPortfolio 
              title={projects[2].title}
              subtitle={projects[2].subtitle}
              text={projects[2].text}
              techs={projects[2].techs}/>        
          </Row>
          <Row>
            <BoxPortfolio 
              title={projects[3].title}
              subtitle={projects[3].subtitle}
              text={projects[3].text}
              techs={projects[3].techs}/> 
              <BoxPortfolio 
              title={projects[4].title}
              subtitle={projects[4].subtitle}
              text={projects[4].text}
              techs={projects[4].techs}/> 
          </Row>
        </Container>  
    </div>
  );
};

export default LukePortfolio;