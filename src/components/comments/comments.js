import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Alert } from 'reactstrap';
import './comments.css';

const Comments = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const nameInputHandler = (event) => {
    setInputName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const contentInputHandler = (event) => {
    setInputContent(event.target.value);
  };

  const comment = {
    name: inputName,
    mail: inputEmail,
    content: inputContent,
  };

  async function sendDataHandler() {
    const response = await fetch(
      'https://lucapersonal.herokuapp.com/api/comment',
      {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.ok;
    if (data) {
      setIsValid(true);
      setIsSent(true);
      setInputName('');
      setInputEmail('');
      setInputContent('');
      console.log(data);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputName.trim() === '' || inputContent.trim() === '') {
      setIsValid(false);
      return;
    } else sendDataHandler();
  };

  return (
    <div>
      <h1 className="display-4">Contact me</h1>
      <hr className="my-2" />
      {!isValid && <Alert color="danger">Some fields cannot be empty</Alert>}
      {isSent && <Alert color="success">Message Sent! Thank you :)</Alert>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Col sm="4">
            <Label for="name">Name *</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              onChange={nameInputHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="4">
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your Mail"
              onChange={emailInputHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm="6">
            <Label for="comment">Message *</Label>
            <Input
              type="textarea"
              name="comment"
              id="comment"
              placeholder="Write here your message, please"
              onChange={contentInputHandler}
            />
          </Col>
        </FormGroup>
        <Col id="sendButton">
          <Button color="dark">Send</Button>
        </Col>
      </Form>
    </div>
  );
};

export default Comments;
