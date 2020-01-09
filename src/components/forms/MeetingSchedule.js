import React, {Component} from 'react';
import {Form, Row, Col, Container, ButtonToolbar, Button} from "react-bootstrap";

export class MeetingSchedule extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    addnew = e => {
        e.preventDefault();
        this.props.addnewSchedule();
    };

    render() {
        const {values, handleChange} = this.props;
        var scheduleList = values.ScheduleList;
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h5>Meeting Schedule</h5>
                        {scheduleList && scheduleList.map(function (schedule, index) {
                            return (
                                <React.Fragment key={index}>
                                    <ButtonToolbar>
                                        <Button variant="primary" size="sm" active>
                                            {schedule.date}
                                        </Button>
                                    </ButtonToolbar>
                                    {schedule && schedule.schedules.map(function (scheduleDetail, index1) {
                                        return (
                                            <React.Fragment key={index}>
                                                <Form.Row>
                                                    <Form.Group as={Col} md="3" controlId="description">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control name="description" type="text"
                                                                      placeholder="Description"
                                                                      onChange={handleChange('description', index1, index)}
                                                                      defaultValue={scheduleDetail.description}/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="Attendees">
                                                        <Form.Label>Attendees</Form.Label>
                                                        <Form.Control name="Attendees" type="text"
                                                                      placeholder="Attendees"
                                                                      onChange={handleChange('Attendees', index1, index)}
                                                                      defaultValue={scheduleDetail.Attendees}/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="from">
                                                        <Form.Label>From</Form.Label>
                                                        <Form.Control name="from" type="from"
                                                                      placeholder="from"
                                                                      onChange={handleChange('from', index1, index)}
                                                                      defaultValue={scheduleDetail.from}/>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="3" controlId="to">
                                                        <Form.Label>To</Form.Label>
                                                        <Form.Control name="to" type="to"
                                                                      placeholder="to"
                                                                      onChange={handleChange('to', index1, index)}
                                                                      defaultValue={scheduleDetail.to}/>
                                                    </Form.Group>
                                                </Form.Row>
                                            </React.Fragment>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                        <ButtonToolbar>
                            <Button variant="primary" onClick={this.back}>Back</Button>&nbsp;
                            <Button variant="success" onClick={this.addnew}>Add New</Button>&nbsp;
                            <Button variant="secondary" onClick={this.continue}>Continue</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MeetingSchedule;