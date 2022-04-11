import React from 'react';
import { Container, Row } from 'reactstrap';
import '../../styles/resfont.css';
import './portfolio.css';
import BoxPortfolio from './portfoliobox';
import { projects } from './utils';

const LukePortfolio = () => {
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
