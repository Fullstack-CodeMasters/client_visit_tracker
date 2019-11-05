import React, { Component } from 'react';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <React.Fragment>
            <h1 title="Success" />
            <h2>Thank You For Your Submission</h2>
            <label>You will get an email with further instructions</label>
        </React.Fragment>
    );
  }
}

export default Success;
