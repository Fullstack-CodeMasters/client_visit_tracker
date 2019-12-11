import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Meals from './Meals';


export class ClientVisitCreateForm extends Component {
  
  constructor() {
    super();
    //check if the match path contains any value,
    // if so do a back end call and initialize with backend json to render edit functionality.
    // const cardDetails = await.fetch('/get/card/1').json;
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: '',
      MealsDetails: [
        {
          date: "2017-09-27",
          arrangeFrom: "Olive",
          vegCount: "2",
          nonVegCount: "3"
        },
        {
          date: "2017-09-28",
          arrangeFrom: "Office",
          vegCount: "2",
          nonVegCount: "3"
        },
        {
          date: "2017-09-30",
          arrangeFrom: "Four points",
          vegCount: "2",
          nonVegCount: "3"
        }
      ],
    };
  }

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
    const { firstName, lastName, email, occupation, city, bio,MealsDetails } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio, MealsDetails };

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
    }
  }
}

export default ClientVisitCreateForm;
