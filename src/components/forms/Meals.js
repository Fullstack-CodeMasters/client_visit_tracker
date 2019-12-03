import React, {Component} from 'react';
import { Form, Row, Col,Container,ButtonToolbar, Button} from "react-bootstrap";

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
const { values, handleChange } = this.props;
console.log(values.MealsDetails);
var meals = values.MealsDetails;
return (
    <Container>
        <Row>
            <Col md={12}>
                <h1>Meals Details</h1>
                {meals.map(function (meal, index) {
                     return (
                        <React.Fragment>
                <ButtonToolbar>
                    <Button variant="primary" size="sm" active>
                    {meal.date}
                    </Button>
            
                </ButtonToolbar>
                <Form.Row>  
                    <Form.Group as={Col} md="4" controlId="arrangeFrom">
                        <Form.Label>Arrange From</Form.Label>
                        <Form.Control name="arrangeFrom" type="arrangeFrom" placeholder="Arrange From"  onChange={handleChange('meal.arrangeFrom')}
              defaultValue={meal.arrangeFrom}/>

                    </Form.Group> 
                    <Form.Group  as={Col} md="4" controlId="veg_cnt">
                        <Form.Label>Veg Count</Form.Label>
                        <Form.Control name="veg_cnt" type="veg_cnt" placeholder="Veg Count" onChange={handleChange('meal.vegCount')} defaultValue={meal.vegCount} required/>
                    </Form.Group>
                    <Form.Group  as={Col} md="4" controlId="nonveg_cnt">
                        <Form.Label>Nonveg Count</Form.Label>
                        <Form.Control name="nonveg_cnt" type="nonveg_cnt" placeholder="Nonveg Count" onChange={handleChange('meal.nonVegCount')} defaultValue={meal.nonVegCount} required/>
                    </Form.Group>
        ​        </Form.Row>     
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
export default Meals;