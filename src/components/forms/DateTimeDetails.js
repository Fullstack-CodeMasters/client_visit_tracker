import React, { Component } from 'react';
import { Form, Row, Col,Container,ButtonToolbar, Button} from "react-bootstrap";
export class Details extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    handleChange = input => e => {
        console.log("Input"+input)
        console.log("Value"+this.props)
        this.setState({ [input]: e.target.value });
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="dateTime">
                        <Form.Label>Date Time</Form.Label>
                        <Form.Control name="dateTime" type="dateTime" placeholder="Date Time" onChange={this.handleChange('dateTime')}
                       defaultValue={values}/>
                    </Form.Group>
                <Form.Group as={Col} md="3" controlId="airport">
                    <Form.Label>Airport</Form.Label>
                    <Form.Control name="airport" type="airport" placeholder="Airport" onChange={this.handleChange('airport')}
                    defaultValue={values}/>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="terminal">
                    <Form.Label>Terminal</Form.Label>
                    <Form.Control name="terminal" type="terminal" placeholder="Terminal" onChange={this.handleChange('terminal')}
                    defaultValue={values}/>
                </Form.Group>
                </Form.Row>
            </div>
        );
    }
}
export default Details;