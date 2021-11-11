import React from 'react';
import FormContent from './FormContent';
import { Button, Container } from 'react-bootstrap';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    if (this.state.display) {
      return (
        <Button id="customBtn" className="mt-auto" onClick={this.toggleDisplay}>
          Write a review
        </Button>
      );
    } else {
      return (
        <Container className="d-grid gap-3">
          <FormContent />
          <Button
            className=""
            type="button"
            variant="danger"
            size="md"
            onClick={this.toggleDisplay}
          >
            Cancel Review
          </Button>
        </Container>
      );
    }
  }
}

export default ReviewForm;
