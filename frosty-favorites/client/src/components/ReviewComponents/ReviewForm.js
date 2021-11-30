import React from 'react';
import FormContent from './FormContent';
import { Button } from 'react-bootstrap';

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
        <div>
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
        </div>
      );
    }
  }
}

export default ReviewForm;
