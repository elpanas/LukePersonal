import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GrGithub, GrLinkedin, GrMail, GrSkype } from 'react-icons/gr';
import { SiSkype, SiWhatsapp } from 'react-icons/si';
import { GoLinkExternal } from 'react-icons/go';
import '../../styles/resfont.css'
import LukeCV from './LukeCV';

const LukeSocial = (props) => {

  const {
    classNameSkype,
    classNamePhone,
  } = props;

  const [skypeModal, setSkypeModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);

  const toggleSkype = () => setSkypeModal(!skypeModal);
  const togglePhone = () => setPhoneModal(!phoneModal);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="auto" sm="4">
            <Row>            
              <Col xs="auto"><Button color="link" href="https://www.linkedin.com/in/luca-panariello-panas/" className="text-muted" target="_blank" rel="noreferrer"><GrLinkedin /></Button></Col> 
              <Col xs="auto"><Button color="link" href="https://github.com/elpanas" className="text-muted"  target="_blank" rel="noreferrer"><GrGithub /></Button></Col>               
              <Col xs="auto"><Button color="link" href="mailto:luca.panariello@gmail.com" className="text-muted"  target="_blank" rel="noreferrer"><GrMail /></Button></Col>
              <Col xs="auto"><Button color="link" onClick={toggleSkype} className="text-muted" ><GrSkype /></Button></Col>
              <Col xs="auto"><Button color="link" onClick={togglePhone} className="text-muted" ><SiWhatsapp /></Button></Col>
            </Row>  
          </Col>
          <Col xs="auto" sm="5">
          </Col>
          <Col xs="auto" sm="3"> <LukeCV /></Col>
        </Row>       
      </Container>
      <Modal isOpen={skypeModal} toggle={toggleSkype} className={classNameSkype}>
        <ModalHeader toggle={toggleSkype}><SiSkype /> Skype ID</ModalHeader>
        <ModalBody>
          <h5><a href="skype:luca.panariello" className="text-dark"  target="_blank" rel="noreferrer">luca.panariello</a> <GoLinkExternal /></h5>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggleSkype}>Ok</Button>{' '}
        </ModalFooter>
      </Modal>
      <Modal isOpen={phoneModal} toggle={togglePhone} className={classNamePhone}>
        <ModalHeader toggle={togglePhone}><SiWhatsapp /> Call or text me</ModalHeader>
        <ModalBody>
          <h5>
            <span itemprop="telephone">
              <a href="tel:+393339220985" className="text-dark"  target="_blank" rel="noreferrer">(+39) 3339220985</a>
            </span> <GoLinkExternal /></h5>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={togglePhone}>Ok</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LukeSocial;
