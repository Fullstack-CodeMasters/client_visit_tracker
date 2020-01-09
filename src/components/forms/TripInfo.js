import React, { Component } from 'react';
import Details from './DateTimeDetails';

export class TripInfo extends Component {
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
                <h5> Arrival </h5>
                <Details path="/dateTimeDetails" component={() => <Details arrivalDetails={this.state.arrivalDetails}/>}
                handleChange={this.handleChange}
                values={values}
                />
                <h5> Departure </h5>
                <Details path="/dateTimeDetails" component={() => <Details departureDetails={this.state.departureDetails}/>}
                handleChange={this.handleChange}
                values={values}
                />
            </div>
        );
    }
}

export default TripInfo;