import React, { Component } from 'react';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <React.Fragment>
            <h1> Enter Personal Details</h1>
            <input type="text"
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br />
            <input type="text"
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br />
            <input type="text"
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            />
            <br />
        
            <button
              onClick={this.back}
            >Back</button>

            <button
              onClick={this.continue}
            >Continue</button>
        </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
