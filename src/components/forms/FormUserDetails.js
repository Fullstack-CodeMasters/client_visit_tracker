import React, { Component } from 'react';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <React.Fragment>
            <h1> Enter Guest Details</h1>
            <input type="text"
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br />
            <input type="text"
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br />
            <input type="text"
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <button
              onClick={this.continue}
            >Continue</button>
        </React.Fragment>
    );
  }
}

export default FormUserDetails;
