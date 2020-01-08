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
            ScheduleList: [
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
                }
                ,{
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
                }
                    ],
            MealsDetails: [
                {
                    date:'',
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

    addnewMeals = () => {
                var MealsData = this.state.MealsDetails;
                console.log(MealsData);
                MealsData.push({date: "", arrangeFrom: "", vegCount: "", nonVegCount: ""});
                 console.log(MealsData);
                this.setState({MealsDetails:MealsData});
            };


    handleChange = (input,index) => e => {
        if((input==="arrangeFrom" ) || (input==="vegCount") || (input==="nonVegCount")){
            var MealsDetails=this.state.MealsDetails;
            MealsDetails[index][input]=e.target.value;
            this.setState({MealsDetails: MealsDetails});
        }
        else if((input==="to" ) || (input==="from" ) || (input==="Attendees") || (input==="description")){
            var ScheduleList = this.state.ScheduleList;
            ScheduleList[index][input]=e.target.value;
            this.setState({ScheduleList: ScheduleList});
        }
        this.setState({[input]: e.target.value});
    };

  render() {
    const { step } = this.state;

    const { name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice, MealsDetails, ScheduleList, pmo, admin, manager, status, contactNumber } = this.state;
    const values = { name, role, teamName, clientWorkPlace, clientTripDetails, hotelDetails, isCabNeededFromToAirport, isCabNeededFromToOffice, MealsDetails, ScheduleList,pmo, admin, manager, status, contactNumber };

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
            addnewMeals = {this.addnewMeals}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
              <MeetingSchedule
                  nextStep={this.nextStep}
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
