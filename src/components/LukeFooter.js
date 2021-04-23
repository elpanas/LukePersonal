import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GrDocumentPdf, GrGithub, GrLinkedin, GrMail, GrSkype } from 'react-icons/gr';
import { SiSkype, SiWhatsapp } from 'react-icons/si';
import { GoLinkExternal } from 'react-icons/go';
import '../styles/resfont.css'
import { MdCopyright } from 'react-icons/md';

const LukeFooter = (props) => {

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
          <Col sm="4">
            <Row >    
              <Col xs="2" className="ml-3"><Button color="link" href="https://www.linkedin.com/in/luca-panariello-panas/" className="text-muted" target="_blank" rel="noreferrer"><GrLinkedin /></Button></Col> 
              <Col xs="2"><Button color="link" href="https://github.com/elpanas" className="text-muted"  target="_blank" rel="noreferrer"><GrGithub /></Button></Col>               
              <Col xs="2"><Button color="link" href="mailto:luca.panariello@gmail.com" className="text-muted"><GrMail /></Button></Col>
              <Col xs="2"><Button color="link" onClick={toggleSkype} className="text-muted" ><GrSkype /></Button></Col>
              <Col xs="2"><Button color="link" onClick={togglePhone} className="text-muted" ><SiWhatsapp /></Button></Col>
            </Row>  
          </Col>
          <Col sm="5" className="text-center text-muted">
            <GrDocumentPdf />
            <Button color="link" href="https://drive.google.com/file/d/1w_jKG87QkOuh-uhw1N9gD5ZcO7XgG4MH/view?usp=sharing" className="text-muted" target="_blank" rel="noreferrer"> English CV</Button>|              
            <Button color="link" href="https://drive.google.com/file/d/1W0-lag6AHozkoLKwx3GYIFOwexyVCvZW/view?usp=sharing" className="text-muted"  target="_blank" rel="noreferrer"> Italian CV</Button>
          </Col>
          <Col sm="3" className="text-center">
            <Button color="link" className="text-muted"><MdCopyright /> 2021 Luca Panariello</Button>
          </Col>
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

export default LukeFooter;
