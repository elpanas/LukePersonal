import React from 'react';
import { Container, Row } from 'reactstrap';
import '../../styles/resfont.css';
import './portfolio.css';
import BoxPortfolio from './portfoliobox';

const LukePortfolio = () => {
  const projects = [
    {
      title: 'BeachU 2.0',
      subtitle: 'Digital Platform Project Enhanched',
      text: 'I have developed this app using Flutter with the MVP design pattern. Authentication was made with Firebase. As database I choosed MongoDB because can manage geo coordinates better. In the end I have developed the web service in Node.js to enable communications between the app and MongoDB',
      techs: 'Flutter - Node.js - MongoDB',
      url: 'https://drive.google.com/file/d/1n7xuTiea8_Tseh5gLQ4crwB8mU19q2MF/view?usp=sharing&usp=embed_facebook',
    },
    {
      title: 'Code Hunting Games',
      subtitle: "Bachelor's Degree Thesis Project",
      text: 'This project is a fusion of the CodyRoby teaching technique with the most famous "hunting game". It is part of the CodeWeek campaign and It represents my thesis project developed during the internship.',
      techs: 'Flutter - Node.js - MongoDB - Docker',
      url: 'https://drive.google.com/file/d/1U1ord1PrPMvsXWpQun-_wHH0DUbUVPlv/view?usp=sharing&usp=embed_facebook',
    },
    {
      title: 'Coach@Home',
      subtitle: 'Mobile App Project',
      text: 'A mobile app which enables one to search personal trainers for home training in a radius of 20 Km.',
      techs: 'Flutter - Node.js - MongoDB',
      url: 'https://github.com/elpanas/CoachAtHomeApp.git',
    },
    {
      title: 'OrdKrig',
      subtitle: 'Geological Modeling Project',
      text: 'Calculates ordinary Kriging in a set of P points which have known coordinates in the form of (Px, Py)',
      techs: 'Octave',
      link: 'ordkrig',
      url: 'https://drive.google.com/file/d/1NmF6O4EXaFuiWPYg5NZuMetnxyeFdL4W/view?usp=sharing&usp=embed_facebook',
    },
    {
      title: 'Gym Manager',
      subtitle: 'OOP and Software Engineering Project',
      text: 'Software to create gym and pool training sheets in C#',
      techs: 'C#',
      url: 'https://drive.google.com/file/d/1lSENZEmesDXdpRyL4zfGy-pMTXYEOOdp/view?usp=sharing&usp=embed_facebook',
    },
    {
      title: 'BeachU',
      subtitle: 'Digital Platform Project',
      text: 'A mobile app composed of a client (Bot Telegram) which communicates with a web service implemented in PHP. It allows you to check umbrellas availability of a bathing establishment, just using your position or the name of the place where the establishment is.',
      techs: 'Xamarin / Telegram - PHP - MySQL',
      url: 'https://github.com/elpanas/BeachuApp.git',
    },
  ];

  const portfolioRows = [];

  for (var p = 0; p <= projects.length; p += 3) {
    portfolioRows.push(
      projects.slice(p, p + 3).map((item) => {
        console.log(item);
        return (
          <BoxPortfolio
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            url={item.url}
          />
        );
      })
    );
  }

  return (
    <div>
      <Container>
        <h1 className="display-4">Projects</h1>
        <hr className="my-2" />
        <Row>{portfolioRows[0]}</Row>
        <Row>{portfolioRows[1]}</Row>
      </Container>
    </div>
  );
};

export default LukePortfolio;
