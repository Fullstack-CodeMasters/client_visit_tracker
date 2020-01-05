import React, { Component } from 'react';
import TripInfo from './TripInfo';

export class ClientTripDetails extends Component {
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
            <div>
                <h3> Enter Trip Details</h3>
                <TripInfo
                handleChange={this.handleChange}
                values={values}
                />
            </div>
        );
    }
}

export default ClientTripDetails;