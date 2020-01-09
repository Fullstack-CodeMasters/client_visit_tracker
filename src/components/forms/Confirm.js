import React, {Component} from 'react';
import {Button, ButtonToolbar, Container} from "react-bootstrap";

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
            name: this.props.values.name,
            teamName: this.props.values.teamName,
            role: this.props.values.role,
            clientWorkPlace: this.props.values.clientWorkPlace,
            mealsDetails: this.props.values.MealsDetails,
            meetingSchedule: this.props.values.ScheduleList,
        };

        console.log(this.props.values)
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
            values: { pmo, admin, contactNumber, manager, status, name, role,teamName,clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice, MealsDetails, ScheduleList}
        } = this.props;
        return (
            <React.Fragment>
                <Container>
                <h4>Confirm User Data: </h4>
                <div>
                    <label>Name: {name}</label><br/>
                    <label>Role: {role}</label><br/>
                    <label>PMO: {pmo}</label><br/>
                    <label>Admin: {admin}</label><br/>
                    <label>Client Arrival Date: {clientTripDetails.arrivalDetails.dateTime}</label><br/>
                    <label>Client Arrival Date: {clientTripDetails.arrivalDetails.dateTime}</label><br/>
                    <label>Client Departure Date: {clientTripDetails.departureDetails.dateTime}</label><br/>
                    <label>Contact Number: {contactNumber}</label><br/>
                    <label>Manager: {manager}</label><br/>
                    <label>Team name: {teamName}</label><br/>
                    <label>Status: {status}</label><br/>
                    <div>
                        {MealsDetails.map((meals, index) => {
                            return (
                                <React.Fragment>
                                    <b>Date: {meals.date}</b><br/>
                                    <label>Arranged From: {meals.arrangeFrom}</label><br/>
                                    <label>Veg Count: {meals.vegCount}</label><br/>
                                    <label>Non Veg Count: {meals.nonVegCount}</label><br/>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <br/>

                    <ButtonToolbar>
                        <Button variant="primary"  onClick={this.back}>Back</Button>&nbsp;
                        <Button variant="secondary" onClick={this.continue}>Confirm & Continue</Button>
                    </ButtonToolbar>
                </Container>
            </React.Fragment>
        );
    }

    // saveClientData(clientData) {
    //     //console.log('executed service')
    //     const headers = {
    //         "Access-Control-Allow-Origin": "*",
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     };
    //     // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    //     // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    //     // axios.defaults.headers.post['Accept'] = 'application/json';
    //     return axios.post(`${SAVE_API_URL}`,
    //         clientData,
    //         {headers: headers})
    //         .then((response) => console.log(response),
    //             (error) => console.log(error))
    //         .catch(error => console.error("Error saving client data !"));
    // }
}

export default Confirm;
