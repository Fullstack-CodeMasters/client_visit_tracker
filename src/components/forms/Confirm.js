import React, { Component } from 'react';

export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
        <React.Fragment>
            <h1>Confirm User Data</h1>
            <div>
                <label >First Name: {firstName}</label><br/>
                <label >Last Name: {lastName}</label><br/>
                <label >Email: {email}</label><br/>
                <label >Occupation: {occupation}</label><br/>
                <label >City: {city}</label><br/>
                <label >Bio: {bio}</label><br/>
            </div>
          <br />
        
          <button
            onClick={this.back}
          >Back</button>

          <button
            onClick={this.continue}
          >Confirm & Continue</button>
        </React.Fragment>
    );
  }
}

export default Confirm;
