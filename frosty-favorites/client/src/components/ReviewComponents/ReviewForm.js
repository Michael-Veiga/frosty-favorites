import React from 'react';
import FormContent from './FormContent';

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
        <button id="customBtn" className="mt-auto" onClick={this.toggleDisplay}>
          Write a review
        </button>
      );
    } else {
      return <FormContent />;
    }
  }
}

export default ReviewForm;
