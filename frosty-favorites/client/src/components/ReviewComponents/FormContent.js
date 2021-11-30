import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';

function FormContent() {
  const [name, setName] = useState('');
  const [mountain, setMountain] = useState('');
  const [stars, setStars] = useState('');
  const [date, setDate] = useState('');
  const [review, setReview] = useState('');

  const addReview = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      mountain: mountain,
      stars: stars,
      date: date,
      review: review,
    }).then(() => {
      console.log('success');
    });
  };

  return (
    <div>
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
        <Button variant="primary" type="click" onClick={addReview}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormContent;
