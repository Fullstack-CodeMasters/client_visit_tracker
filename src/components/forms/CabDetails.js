import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class CabDetails extends Component {
    constructor(props) {
		super(props);
		this.state = {isOn: false};
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleToggle(e) {
		this.setState({isOn: !this.state.isOn});
	}

    render() {
        let classNames = ["switch", (this.props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
        return (
            <div className={classNames} onClick={this.props.handleToggle}>
                <h5> Cab Details </h5>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="If cab Needed"   onClick={this.props.handleToggle}
                  />
                 </Form>

            </div>
        );
    }
}

export default CabDetails;