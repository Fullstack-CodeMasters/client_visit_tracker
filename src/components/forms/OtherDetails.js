import React, {Component} from 'react';
import {Form, Row, Col, Container, ButtonToolbar, Button} from "react-bootstrap";

export class OtherDetails extends Component {

    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const form = event.target;
    //     const data = new FormData(form);
    //     for (let name of data.keys()) {
    //         const input = form.elements[name];
    //         console.log(input);
    //     }
    //     console.log(data);
    // }
    render() {
        const {values, handleChange} = this.props;
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h5>Other Details</h5>
                                <React.Fragment>
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="contactNumber">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control name="contactNumber" type="contactNumber"
                                                          placeholder="contactNumber"
                                                          onChange={handleChange('contactNumber')}
                                                          defaultValue={values.contactNumber}/>

                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="admin">
                                            <Form.Label>Admin</Form.Label>
                                            <Form.Control name="admin" type="admin" placeholder="admin"
                                                          onChange={handleChange('admin')}
                                                          defaultValue={values.admin} required/>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="pmo">
                                            <Form.Label>PMO</Form.Label>
                                            <Form.Control name="pmo" type="pmo" placeholder="pmo"
                                                          onChange={handleChange('pmo')}
                                                          defaultValue={values.pmo} required/>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="manager">
                                            <Form.Label>Manager</Form.Label>
                                            <Form.Control name="manager" type="manager" placeholder="manager"
                                                          onChange={handleChange('manager')}
                                                          defaultValue={values.manager} required/>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="status">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Control name="status" type="status" placeholder="status"
                                                          onChange={handleChange('status')}
                                                          defaultValue={values.status} required/>
                                        </Form.Group>
                                        ​ </Form.Row>
                                </React.Fragment>
                        <ButtonToolbar>
                            <Button variant="primary" onClick={this.back}>Back</Button>&nbsp;
                            <Button variant="secondary" onClick={this.continue}>Continue</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OtherDetails;