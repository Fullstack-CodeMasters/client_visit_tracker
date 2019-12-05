import React, { Component } from 'react';
import ClientTripDetails from './ClientTripDetails';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <h1> Enter Guest Details</h1>
        <input type="text"
          placeholder="Enter Your Name"
          label="Name"
          onChange={handleChange('name')}
          defaultValue={values.name}
        />
        <br />
        <input type="text"
          placeholder="Enter Your Role"
          label="Role"
          onChange={handleChange('role')}
          defaultValue={values.role}
        />
        <br />
        <input type="text"
          placeholder="Enter Your Team Name"
          label="Team Name"
          onChange={handleChange('teamName')}
          defaultValue={values.teamName}
        />
        <br />
        <input type="text"
          placeholder="Enter ClientWorkPlace"
          label="clientWorkPlace"
          onChange={handleChange('clientWorkPlace')}
          defaultValue={values.clientWorkPlace}
        />
        <br />
        <ClientTripDetails
        handleChange={this.handleChange}
        defaultValue={values.clientTripDetails}
        />
        <br />
        <button
          onClick={this.addGuest}
        >Add New Guest</button>
        <button
          onClick={this.continue}
        >Continue</button>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
