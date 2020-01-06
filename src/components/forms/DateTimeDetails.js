import React, { Component } from 'react';

export class Details extends Component {
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
            <div>
                <input type="text"
                    placeholder="dateTime"
                    label="dateTime"
                    onChange={handleChange('dateTime')}
                    defaultValue={values}
                />
                <input type="text"
                    placeholder="airport"
                    label="airport"
                    onChange={handleChange('airport')}
                    defaultValue={values}
                />
                <input type="text"
                    placeholder="terminal"
                    label="terminal"
                    onChange={handleChange('terminal')}
                    defaultValue={values}
                />
            </div>
        );
    }
}

export default Details;