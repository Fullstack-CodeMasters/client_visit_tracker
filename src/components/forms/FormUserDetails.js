import React, { Component } from 'react';
import ClientTripDetails from './ClientTripDetails';
import HotelDetails from "./HotelDetails";
import CabDetails from "./CabDetails";
import { Form, Row, Col,Container,ButtonToolbar, Button} from "react-bootstrap";
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
            <Container>
                <Row>
                    <Col md={12}>
                        <React.Fragment>
                            <h5> Enter Guest Details</h5>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="name" type="name" placeholder="Enter Your Name" onChange={handleChange('name')}
                                                  defaultValue={values.name}/>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="Role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control name="role" type="role" placeholder="Enter Your Role" onChange={handleChange('role')}
                                                  defaultValue={values.role}/>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="teamName">
                                    <Form.Label>Team Name</Form.Label>
                                    <Form.Control name="teamName" type="teamName" placeholder="Enter Your Team Name" onChange={handleChange('teamName')}
                                                  defaultValue={values.teamName}/>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="clientWorkPlace">
                                    <Form.Label>Client WorkPlace</Form.Label>
                                    <Form.Control name="clientWorkPlace" type="clientWorkPlace" placeholder="Enter Client WorkPlace" onChange={handleChange('clientWorkPlace')}
                                                  defaultValue={values.clientWorkPlace}/>
                                </Form.Group>
                            </Form.Row>
                            <div>
                                <h5>Arrival Details</h5>
                                <Form.Row>
                                    <Form.Group as={Col} md="3" controlId="dateTime">
                                        <Form.Label>Date Time</Form.Label>
                                        <Form.Control name="dateTime" type="dateTime" placeholder="Date Time" onChange={handleChange('dateTime','arrival')}
                                                      defaultValue={values.clientTripDetails.arrivalDetails.dateTime}/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="airport">
                                        <Form.Label>Airport</Form.Label>
                                        <Form.Control name="airport" type="airport" placeholder="Airport" onChange={handleChange('airport','arrival')}
                                                      defaultValue={values.clientTripDetails.arrivalDetails.airport}/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="terminal">
                                        <Form.Label>Terminal</Form.Label>
                                        <Form.Control name="terminal" type="terminal" placeholder="Terminal" onChange={handleChange('terminal','arrival')}
                                                      defaultValue={values.clientTripDetails.arrivalDetails.terminal}/>
                                    </Form.Group>
                                </Form.Row>
                            </div>
                            <div>
                                <h5>Departure Details</h5>
                                <Form.Row>
                                    <Form.Group as={Col} md="3"  controlId="dateTime">
                                        <Form.Label>Date Time</Form.Label>
                                        <Form.Control name="dateTime" type="dateTime" placeholder="Date Time" onChange={handleChange('dateTime','departure')}
                                                      defaultValue={values.clientTripDetails.departureDetails.departure}/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="airport">
                                        <Form.Label>Airport</Form.Label>
                                        <Form.Control name="airport" type="airport" placeholder="Airport" onChange={handleChange('airport','departure')}
                                                      defaultValue={values.clientTripDetails.departureDetails.airport}/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="terminal">
                                        <Form.Label>Terminal</Form.Label>
                                        <Form.Control name="terminal" type="terminal" placeholder="Terminal" onChange={handleChange('terminal','departure')}
                                                      defaultValue={values.clientTripDetails.departureDetails.terminal}/>
                                    </Form.Group>
                                </Form.Row>
                            </div>
                            <HotelDetails
                                handleChange={this.handleChange}
                                defaultValue={values.hotelDetails}
                            />
                            <CabDetails
                                handleChange={this.handleChange}
                                defaultValue={values.hotelDetails}
                            />
                            <Form.Row>
                                <ButtonToolbar>
                                    <Button variant="info" size="sm" onClick={this.continue}>
                                        Continue
                                    </Button>
                                </ButtonToolbar>
                            </Form.Row>
                        </React.Fragment>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default FormUserDetails;