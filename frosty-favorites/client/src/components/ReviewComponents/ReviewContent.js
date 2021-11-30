import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import fullStar from '../../images/fullStar.png';
import emptyStar from '../../images/emptyStar.png';

function ReviewContent() {
  const [reviewList, setReviewList] = useState([]);
  let activeStar;

  const getReviews = () => {
    Axios.get('http://localhost:3001/review').then((response) => {
      console.log(response.data);
      setReviewList(response.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  function SwitchCase(activeStar) {
    switch (activeStar.value) {
      case 1:
        return (
          <div>
            <img src={fullStar} />
            <img src={emptyStar} />
            <img src={emptyStar} />
            <img src={emptyStar} />
            <img src={emptyStar} />
          </div>
        );
      case 2:
        return (
          <div>
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={emptyStar} />
            <img src={emptyStar} />
            <img src={emptyStar} />
          </div>
        );
      case 3:
        return (
          <div>
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={emptyStar} />
            <img src={emptyStar} />
          </div>
        );
      case 4:
        return (
          <div>
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={emptyStar} />
          </div>
        );
      case 5:
        return (
          <div>
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={fullStar} />
            <img src={fullStar} />
          </div>
        );
      default:
        return <img src={emptyStar} />;
    }
  }

  return (
    <Row className="pt-2">
      {reviewList.map((element) => {
        activeStar = element.stars;
        return (
          <Col className="mt-2" key={element.id} md={6}>
            <Card>
              <Card.Header>Name: {element.name}</Card.Header>
              <Card.Body>
                <Card.Title>Location: {element.mountain}</Card.Title>
                <Card.Text>
                  <SwitchCase value={activeStar} />
                </Card.Text>
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
