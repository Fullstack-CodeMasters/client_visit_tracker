import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Meals from './Meals';


export class ClientVisitCreateForm extends Component {
  state = {
    step: 1,
    name: '',
    role: '',
    teamName: '',
    clientWorkPlace: '',
    clientTripDetails: {
      arrivalDetails: {
        dateTime: '',
        airport: '',
        terminal: ''
      },
      departureDetails: {
        dateTime: '',
        airport: '',
        terminal: ''
      }
    },
    hotelDetails: {
      hotelName: '',
      hotelPlace: ''
    },
    isCabNeededFromToAirport: false,
    isCabNeededFromToOffice: false
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice } = this.state;
    const values = { name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Meals
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
        return (<Success />);
    }
  }
}

export default ClientVisitCreateForm;
