import React, { Component } from 'react';

export class HotelDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        return (
            <div>
                <h3> Enter Hotel Details </h3>
                <input type="text"
                    placeholder="Enter Hotel Name"
                    label="hotelName"
                    onChange={this.handleChange}
                    defaultValue={this.props.defaultValue.name}
                />
                <input type="text"
                    placeholder="Enter Hotel Place"
                    label="hotelPlace"
                    onChange={this.handleChange}
                    defaultValue={this.props.defaultValue.place}
                />
            </div>
        );
    }
}

export default HotelDetails;