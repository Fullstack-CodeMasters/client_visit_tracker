import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Meals from './Meals';
import OtherDetails from "./OtherDetails";
import MeetingSchedule from "./MeetingSchedule";
import moment from 'moment';


export class ClientVisitCreateForm extends Component {
    constructor(props) {
        super(props);
        //check if the match path contains any value,
        // if so do a back end call and initialize with backend json to render edit functionality.
        // const cardDetails = await.fetch('/get/card/1').json;
        this.state = {
            step: 1,
            name: '',
            role: '',
            teamName: '',
            clientWorkPlace: '',
            clientTripDetails: {
                arrivalDetails: {
                    dateTime: '',
                    airport: '',
                    terminal: ''
                },
                departureDetails: {
                    dateTime: '',
                    airport: '',
                    terminal: ''
                }
            },
            hotelDetails: {
                name: '',
                place: ''
            },
            isCabNeededBtwAirportAndHotel: false,
            isCabNeededBtwHotelAndOffice: false,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
            pmo: '',
            admin: '',
            contactNumber: '',
            manager: '',
            status: '',
            ScheduleList: [
                {
                    date: "",
                    schedules: [
                        {
                            from: "",
                            to: "",
                            description: "",
                            Attendees: ""
                        }
                    ]

                }
            ],
            MealsDetails: [
                {
                    date: '',
                    arrangeFrom: '',
                    // this.props.clientTripDetails.arrivalDetails.dateTime,
                    vegCount: '',
                    nonVegCount: ''
                }
            ]
        };
    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    addnewSchedule = () => {
        var Schedule = this.state.ScheduleList;
        console.log(Schedule);
        var length = this.state.ScheduleList.length;
        var prevdate = this.state.ScheduleList[length - 1].date;
        var nextdate = moment(moment(prevdate).format('DD-MM-YYYY')).add(1, 'day').format('DD-MM-YYYY');
        Schedule.push({date: nextdate,schedules:[{Attendees: "", description: "", to: "", from: ""}]});
        console.log(Schedule);
        this.setState({ScheduleList: Schedule});
    };


    addnewMeals = () => {
        var MealsData = this.state.MealsDetails;
        console.log(MealsData);
        var length = this.state.MealsDetails.length;
        var prevdate = this.state.MealsDetails[length - 1].date;
        var nextdate = moment(moment(prevdate).format('DD-MM-YYYY')).add(1, 'day').format('DD-MM-YYYY');
        MealsData.push({date: nextdate, arrangeFrom: "", vegCount: "", nonVegCount: ""});
        console.log(MealsData);
        this.setState({MealsDetails: MealsData});
    };
    handleChange = (input, index, index1) => e => {
        if ((input === "dateTime") || (input === "airport") || (input === "terminal")) {
            if (index === "arrival") {
                var clientTripDetails = this.state.clientTripDetails;
                clientTripDetails.arrivalDetails[input] = e.target.value;
                this.setState({clientTripDetails: clientTripDetails});
                if (input === "dateTime") {
                    var MealsDetails = this.state.MealsDetails;
                    MealsDetails[0].date = e.target.value;
                    this.setState({MealsDetails: MealsDetails});
                    var ScheduleList = this.state.ScheduleList;
                    console.log(ScheduleList)
                    ScheduleList[0].date = e.target.value;
                    this.setState({ScheduleList: ScheduleList});
                }
            } else {
                var clientTripDetails = this.state.clientTripDetails;
                clientTripDetails.departureDetails[input] = e.target.value;
                this.setState({clientTripDetails: clientTripDetails});
            }
        } else if ((input === "arrangeFrom") || (input === "vegCount") || (input === "nonVegCount")) {
            var MealsDetails = this.state.MealsDetails;
            MealsDetails[index][input] = e.target.value;
            this.setState({MealsDetails: MealsDetails});
        } else if ((input === "to") || (input === "from") || (input === "Attendees") || (input === "description")) {
            var ScheduleList = this.state.ScheduleList;
            console.log(index)
            console.log(index1)
            console.log("@@@@@@@"+ScheduleList[index].schedules[0].description)
            ScheduleList[index].schedules[0][input] = e.target.value;
            this.setState({ScheduleList: ScheduleList});
        }
        this.setState({[input]: e.target.value});
    };

    render() {
        const {step} = this.state;

        const {name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice, MealsDetails, ScheduleList, pmo, admin, manager, status, contactNumber} = this.state;
        const values = {
            name,
            role,
            teamName,
            clientWorkPlace,
            clientTripDetails,
            hotelDetails,
            isCabNeededFromToAirport,
            isCabNeededFromToOffice,
            MealsDetails,
            ScheduleList,
            pmo,
            admin,
            manager,
            status,
            contactNumber
        };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            // case 2:
            //   return (
            //     <FormPersonalDetails
            //       nextStep={this.nextStep}
            //       prevStep={this.prevStep}
            //       handleChange={this.handleChange}
            //       values={values}
            //     />
            //   );
            case 2:
                return (
                    <Meals
                        nextStep={this.nextStep}
                        addnewMeals={this.addnewMeals}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <MeetingSchedule
                        nextStep={this.nextStep}
                        addnewSchedule={this.addnewSchedule}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <OtherDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 6:
                return <Success/>;
            default:
        }
    }
}

export default ClientVisitCreateForm;
