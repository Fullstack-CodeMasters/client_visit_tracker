import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Meals from './Meals';
import OtherDetails from "./OtherDetails";
import MeetingSchedule from "./MeetingSchedule";


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
          MeetingSchedule: [
                {
                    date: "2017-09-27",
                    schedules: [
                        {
                            from: "10:00",
                            to: "11:00",
                            description: "Day 01>> meeting with Aravind",
                            Attendees: "Aravind"
                        },
                        {
                            from: "11:00",
                            to: "12:00",
                            description: "Day 01>>meeting with CEO",
                            Attendees: "CEO"
                        },
                        {
                            from: "10:00",
                            to: "11:00",
                            description: "Day 01>>meeting with Nimi",
                            Attendees: "Nimi, test"
                        }
                    ]
                },
                {
                    date: "2017-09-28",
                    schedules: [
                        {
                            from: "10:00",
                            to: "11:00",
                            description: "Day 02>>meeting with Aravind",
                            Attendees: "Aravind"
                        },
                        {
                            from: "11:00",
                            to: "12:00",
                            description: "Day 02>>meeting with CEO",
                            Attendees: "CEO"
                        },
                        {
                            from: "10:00",
                            to: "11:00",
                            description: "Day 02>>meeting with Nimi",
                            Attendees: "Nimi, test"
                        }
                    ]
                },
                {
                    date: "2017-09-28",
                    schedules: [
                        {
                            from: "10:00",
                            to: "11:00",
                            description: "Day 03>>meeting with Aravind",
                            Attendees: "Aravind"
                        },
                        {
                            from: "11:00",
                            to: "12:00",
                            description: "Day 03>>meeting with CEO",
                            Attendees: "CEO"
                        },
                        {
                            from: "10:00",
                            to: "11:00",
                            description: "Day 03>>meeting with Nimi",
                            Attendees: "Nimi, test"
                        }
                    ]
                }],
            MealsDetails: [
                {
                    date: "2017-09-27",
                    arrangeFrom: "Olive",
                    vegCount: "2",
                    nonVegCount: "3"
                },
                {
                    date: "2017-09-28",
                    arrangeFrom: "Office",
                    vegCount: "2",
                    nonVegCount: "3"
                },
                {
                    date: "2017-09-30",
                    arrangeFrom: "Four points",
                    vegCount: "2",
                    nonVegCount: "3"
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

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

  render() {
    const { step } = this.state;

    const { name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice, MealsDetails, ScheduleList } = this.state;
    const values = { name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice, MealsDetails, ScheduleList };

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
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Meals
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 4:
          return (
              <MeetingSchedule
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
              />
              );
            case 5:
                return (
                    <OtherDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 6:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 7:
                return <Success/>;
            default:
        }
    }
}

export default ClientVisitCreateForm;
