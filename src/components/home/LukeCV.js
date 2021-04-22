import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GrDocumentPdf } from 'react-icons/gr';
import '../../styles/resfont.css'

const LukeCV = () => {
  return (
    <div>
      <Container>
        <Row>            
          <Col xs="auto"><GrDocumentPdf /> <a href="https://drive.google.com/file/d/1w_jKG87QkOuh-uhw1N9gD5ZcO7XgG4MH/view?usp=sharing" className="text-muted" target="_blank" rel="noreferrer">English CV</a></Col>|
          <Col xs="auto"><a href="https://drive.google.com/file/d/1W0-lag6AHozkoLKwx3GYIFOwexyVCvZW/view?usp=sharing" className="text-muted"  target="_blank" rel="noreferrer">Italian CV</a></Col> 
        </Row>         
      </Container>
    </div>
  );
}

export default LukeCV;