import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function ReviewContent() {
  const [reviewList, setReviewList] = useState([]);

  const getReviews = () => {
    Axios.get('http://localhost:3001/review').then((response) => {
      console.log(response.data);
      setReviewList(response.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Row className="pt-2">
      {reviewList.map((element) => {
        return (
          <Col key={element.id} md={6}>
            <Card>
              <Card.Header>Name: {element.name}</Card.Header>
              <Card.Body>
                <Card.Title>Location: {element.mountain}</Card.Title>
                <Card.Text>{element.review}</Card.Text>
                <Card.Footer>Date: {element.date}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default ReviewContent;
