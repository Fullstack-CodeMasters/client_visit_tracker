import React, {Component} from 'react';
import { Form, Row, Col,Container,ButtonToolbar, Button} from "react-bootstrap";

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
        const { values, handleChange } = this.props;
        // console.log( values.ScheduleList);
        var scheduleList = values.ScheduleList;
        // console.log( scheduleList.schedules);
        // var scheduleDetailList = scheduleList.schedules;
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Meeting Schedule</h1>
                        {scheduleList.map(function (scheduleList, index) {
                            return (
                                <React.Fragment>
                                    <ButtonToolbar>
                                        <Button variant="primary" size="sm" active>
                                            {scheduleList.date}
                                        </Button>

                                    </ButtonToolbar>

                                    {scheduleList.schedules.map(function (schedule, index) {
                                        return(
                                            <React.Fragment>

                                                <Form.Row >
                                                    <Form.Group as={Col} md="3" controlId="arrangeFrom">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control name="description" type="description"
                                                                      placeholder="Description"
                                                                      onChange={handleChange('schedule.description')}
                                                                      defaultValue={schedule.description}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="3" controlId="arrangeFrom">
                                                        <Form.Label>Attendees</Form.Label>
                                                        <Form.Control name="Attendees" type="Attendees"
                                                                      placeholder="Attendees"
                                                                      onChange={handleChange('schedule.Attendees')}
                                                                      defaultValue={schedule.Attendees}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="3" controlId="arrangeFrom">
                                                        <Form.Label>From</Form.Label>
                                                        <Form.Control name="from" type="from"
                                                                      placeholder="from"
                                                                      onChange={handleChange('schedule.from')}
                                                                      defaultValue={schedule.from}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="3" controlId="arrangeFrom">
                                                        <Form.Label>To</Form.Label>
                                                        <Form.Control name="to" type="to"
                                                                      placeholder="to"
                                                                      onChange={handleChange('schedule.to')}
                                                                      defaultValue={schedule.to}/>
                                                    </Form.Group>

                                                </Form.Row>

                                            </React.Fragment>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                        <ButtonToolbar>
                            <Button variant="primary"  onClick={this.back}>Back</Button>&nbsp;
                            <Button variant="secondary" onClick={this.continue}>Continue</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default MeetingSchedule;