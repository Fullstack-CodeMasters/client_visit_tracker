import React, {Component} from 'react';
import axios from "axios";

const BASE_API_URL = `http://localhost:8080`
const SAVE_API_URL = `${BASE_API_URL}/saveData`


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM

        const payload = {
            pmo: this.props.values.pmo,
            admin: this.props.values.admin,
            status: this.props.values.status,
            manager: this.props.values.manager,
            contactNumber: this.props.values.contactNumber,
            firstName: this.props.values.firstName,
            lastName: this.props.values.lastName,
            email: this.props.values.email,
            arrangeFrom: this.props.values.arrangeFrom,
            vegCount: this.props.values.vegCount,
            nonVegCount: this.props.values.nonVegCount,
        };

        console.log(payload)
        fetch(SAVE_API_URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
            console.log(body);
        });
        // this.saveClientData(JSON.parse(payload).then(r => "Client data save operation");
        this.props.nextStep();
    }
    // this.setState({
    //     // firstName: this.props.firstName,
    //     // lastName: this.props.lastName,
    //     pmo: this.props.pmo,
    //     admin: this.props.admin,
    //     status: this.props.status,
    //     manager: this.props.manager,
    //     contactNumber: this.props.contactNumber
    // })
    // // let clientData = {
    // //     firstName: this.values.firstName,
    // //     lastName: this.values.lastName,
    // //     pmo:this.values.pmo,
    // //     admin:this.values.admin,
    // //     status: this.values.status,
    // //     contactNumber: this.values.contactNumber
    // // }
    //

    // };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {firstName, lastName, pmo, admin, contactNumber, manager, status}
        } = this.props;
        return (
            <React.Fragment>
                <h1>Confirm User Data</h1>
                <div>
                    <label>First Name: {firstName}</label><br/>
                    <label>Last Name: {lastName}</label><br/>
                    <label>PMO: {pmo}</label><br/>
                    <label>Admin: {admin}</label><br/>
                    <label>Contact Number: {contactNumber}</label><br/>
                    <label>Manager: {manager}</label><br/>
                </div>
                <br/>

                <button
                    onClick={this.back}
                >Back
                </button>

                <button
                    onClick={this.continue}
                >Confirm & Continue
                </button>
            </React.Fragment>
        );
    }

    saveClientData(clientData) {
        //console.log('executed service')
        const headers = {
            "Access-Control-Allow-Origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        };
        // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        // axios.defaults.headers.post['Accept'] = 'application/json';
        return axios.post(`${SAVE_API_URL}`,
            clientData,
            {headers: headers})
            .then((response) => console.log(response),
                (error) => console.log(error))
            .catch(error => console.error("Error saving client data !"));
    }
}

export default Confirm;
