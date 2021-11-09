import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useState } from 'react';

function FormContent() {
  const [name, setName] = useState('');
  const [mountain, setMountain] = useState('');
  const [stars, setStars] = useState('');
  const [date, setDate] = useState('');
  const [review, setReview] = useState('');

  const displayInfo = () => {
    console.log(name + mountain + stars + date + review);
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="personName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="personName"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Mountain</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={mountain}
              onChange={(event) => {
                setMountain(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ranking">
            <Form.Label>Number of Stars</Form.Label>
            <Form.Control
              type="number"
              name="ranking"
              value={stars}
              onChange={(event) => {
                setStars(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dot">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="dot"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="post">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="post"
              value={review}
              onChange={(event) => {
                setReview(event.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={displayInfo}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormContent;
