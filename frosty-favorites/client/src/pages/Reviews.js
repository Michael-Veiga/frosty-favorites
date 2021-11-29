import React from 'react';
import ReviewForm from '../components/ReviewComponents/ReviewForm';
import ReviewContent from '../components/ReviewComponents/ReviewContent';
import { Container } from 'react-bootstrap';

function Reviews() {
  return (
    <Container>
      <h1>Reviews Page</h1>
      <ReviewForm />
      <ReviewContent />
    </Container>
  );
}

export default Reviews;
