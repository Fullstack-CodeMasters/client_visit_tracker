import React, { Component } from 'react';
import ClientTripDetails from './ClientTripDetails';
import HotelDetails from "./HotelDetails";
import CabDetails from "./CabDetails";

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
        <h3> Enter Guest Details</h3>
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
        <br /><br/>
        <ClientTripDetails
        handleChange={this.handleChange}
        defaultValue={values.clientTripDetails}
        />
        <br />
        <br />
        <HotelDetails
        handleChange={this.handleChange}
        defaultValue={values.hotelDetails}
        />
        <br />
        <br />
        <CabDetails
        handleChange={this.handleChange}
        defaultValue={values.hotelDetails}
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
