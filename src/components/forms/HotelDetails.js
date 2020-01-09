import React, { Component } from 'react';
import { Form, Row, Col,Container,ButtonToolbar, Button} from "react-bootstrap";
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
                <h5> Enter Hotel Details </h5>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="hotelName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="hotelName" type="hotelName" placeholder="Enter Hotel Name" onChange={this.handleChange}
                        defaultValue={this.props.defaultValue.name}/>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="hotelPlace">
                        <Form.Label>Place</Form.Label>
                        <Form.Control name="hotelPlace" type="hotelPlace" placeholder="Enter Hotel Place"  onChange={this.handleChange}
                        defaultValue={this.props.defaultValue.place}/>
                    </Form.Group>
                </Form.Row>
            </div>
        );
    }
}
export default HotelDetails;