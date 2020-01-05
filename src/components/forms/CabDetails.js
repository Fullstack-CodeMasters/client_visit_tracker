import React, { Component } from 'react';
import { ToggleButton } from 'react-bootstrap';

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
                <h3> Cab Details </h3>
                <ToggleButton
                    onClick={this.props.handleToggle}
                />
            </div>
        );
    }
}

export default CabDetails;