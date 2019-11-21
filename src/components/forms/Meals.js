import React, {Component} from 'react';
import { Form, Row, Col,Container } from "react-bootstrap";

export class Meals extends Component {
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
var names = ['21-08-2019'];
const { values, handleChange } = this.props;
return (
    <Container>
        <Row>
            <Col md={12}>
                <h1>Meals Details</h1>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="date">
                        <Form.Label>date</Form.Label>
                        <Form.Control name="date" type="date" placeholder="Enter date"/>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="arrangeFrom">
                        <Form.Label>Arrange From</Form.Label>
                        <Form.Control name="arrangeFrom" type="arrangeFrom" placeholder="Arrange From"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>   
                    <Form.Group  as={Col} md="6" controlId="veg_cnt">
                        <Form.Label>Veg Count</Form.Label>
                        <Form.Control name="veg_cnt" type="veg_cnt" placeholder="Veg Count"/>
                    </Form.Group>
                    <Form.Group  as={Col} md="6" controlId="nonveg_cnt">
                        <Form.Label>Nonveg Count</Form.Label>
                        <Form.Control name="nonveg_cnt" type="nonveg_cnt" placeholder="Nonveg Count"/>
                    </Form.Group>
        ​        </Form.Row>               
                <button onClick={this.back} >Back</button>
                <button onClick={this.continue}>Continue</button>
            </Col>
        </Row>
    </Container>
);
}
}
export default Meals;