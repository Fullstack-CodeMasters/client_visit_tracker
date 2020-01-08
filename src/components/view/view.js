import React, {Component, useState} from 'react';
import MealsView from "./mealsView";

export default function View(props) {

    // useEffect(() => {
    //     fetchCardDetail();
    //     console.log(props);
    // }, []);

    const useFetch = (url, options) => {
        const [response, setResponse] = React.useState(null);
        const [error, setError] = React.useState(null);

        React.useEffect(() => {
            const abortController=new AbortController()
            const signal=abortController.signal
            const FetchData = async () => {
                try {
                    const res = await fetch(url, options);
                    const json = await res.json();
                    setResponse(json);
                } catch (error) {
                    setError(error);
                }
            };
            FetchData();
        }, []);
        console.log(response)
        return { response, error };
    };

    // const [cardDetail, setCardDetail] = useState([]);
    //
    // const fetchCardDetail = async => {
    //
    //     fetch('http://localhost:8080/getClientData', {
    //         method: "GET",
    //         mode: "cors",
    //         headers: {
    //             "Access-Control-Allow-Origin": "http://localhost:3000",
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //
    //     })
    //         .then(function (response) {
    //             console.log("$$$$$$" + response)
    //             // this.setState({ cardDetail: response.data })
    //             // console.log(this.state.cardDetail)
    //             return response.json()
    //         }).then(function (body) {
    //         var responseBody = JSON.stringify(body)
    //         console.log("Response from backend:  " + responseBody);
    //         const cardDetail = {
    //             step: 1,
    //             name: '',
    //             teamName: '',
    //             role: '',
    //             pmo: '',
    //             admin: '',
    //             contactNumber: responseBody.contactNumber,
    //             manager: responseBody.manager,
    //             MeetingSchedule: [
    //                 {
    //                     date: "2017-09-27",
    //                     schedules: [
    //                         {
    //                             from: "10:00",
    //                             to: "11:00",
    //                             description: "Day 01>> meeting with Aravind",
    //                             Attendees: "Aravind"
    //                         },
    //                         {
    //                             from: "11:00",
    //                             to: "12:00",
    //                             description: "Day 01>>meeting with CEO",
    //                             Attendees: "CEO"
    //                         },
    //                         {
    //                             from: "10:00",
    //                             to: "11:00",
    //                             description: "Day 01>>meeting with Nimi",
    //                             Attendees: "Nimi, test"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     date: "2017-09-28",
    //                     schedules: [
    //                         {
    //                             from: "10:00",
    //                             to: "11:00",
    //                             description: "Day 02>>meeting with Aravind",
    //                             Attendees: "Aravind"
    //                         },
    //                         {
    //                             from: "11:00",
    //                             to: "12:00",
    //                             description: "Day 02>>meeting with CEO",
    //                             Attendees: "CEO"
    //                         },
    //                         {
    //                             from: "10:00",
    //                             to: "11:00",
    //                             description: "Day 02>>meeting with Nimi",
    //                             Attendees: "Nimi, test"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     date: "2017-09-28",
    //                     schedules: [
    //                         {
    //                             from: "10:00",
    //                             to: "11:00",
    //                             description: "Day 03>>meeting with Aravind",
    //                             Attendees: "Aravind"
    //                         },
    //                         {
    //                             from: "11:00",
    //                             to: "12:00",
    //                             description: "Day 03>>meeting with CEO",
    //                             Attendees: "CEO"
    //                         },
    //                         {
    //                             from: "10:00",
    //                             to: "11:00",
    //                             description: "Day 03>>meeting with Nimi",
    //                             Attendees: "Nimi, test"
    //                         }
    //                     ]
    //                 }],
    //             MealsDetails: [
    //                 {
    //                     date: "2017-09-27",
    //                     arrangeFrom: "Olive",
    //                     vegCount: "2",
    //                     nonVegCount: "3"
    //                 },
    //                 {
    //                     date: "2017-09-28",
    //                     arrangeFrom: "Office",
    //                     vegCount: "2",
    //                     nonVegCount: "3"
    //                 },
    //                 {
    //                     date: "2017-09-30",
    //                     arrangeFrom: "Four points",
    //                     vegCount: "2",
    //                     nonVegCount: "3"
    //                 }]
    //         };
    //         console.log(cardDetail)
    //     });
    //     setCardDetail(cardDetail);
    // }
    const cardDetail = useFetch(`http://localhost:8080/getClientData`, {method: "GET",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }});


    console.log("cardDetail"+cardDetail.response)

    if (!cardDetail.response) {
        return <div>Loading...</div>;
    }else{

        return cardDetail.response.map((card, index) => {
            return (
                <React.Fragment>
                    <h1>Details</h1>
                    <div>
                        <label>First Name: {card.name}</label><br/>
                        <label>Team Name: {card.teamName}</label><br/>
                        <label>Role: {card.role}</label><br/>
                        <label>PMO: {card.pmo}</label><br/>
                        <label>Admin: {card.admin}</label><br/>
                        <label>Contact Number: {card.contactNumber}</label><br/>
                        <label>Manager: {card.manager}</label><br/>

                            {/*<div>*/}
                            {/*    {card.mealsDetails.map((mealCard,index1)=>(*/}
                            {/*        <MealsView text={mealCard.arrangeFrom} key={index1} />*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                        {/*<MealsView*/}
                        {/*    values={card.MealsDetails}*/}
                        {/*/>*/}

                    </div>
                    <br/>

                    <button onClick={() => props.history.push('/edit/1')}>Edit</button>
                </React.Fragment>
            );
        });
        // return (
        //     <React.Fragment>
        //         <h1>Details</h1>
        //         <div>
        //             <label>First Name: {cardDetail.response.name}</label><br/>
        //             <label>Team Name: {cardDetail.teamName}</label><br/>
        //             <label>Role: {cardDetail.role}</label><br/>
        //             <label>PMO: {cardDetail.pmo}</label><br/>
        //             <label>Admin: {cardDetail.admin}</label><br/>
        //             <label>Contact Number: {cardDetail.contactNumber}</label><br/>
        //             <label>Manager: {cardDetail.manager}</label><br/>
        //         </div>
        //         <br/>
        //
        //         <button onClick={() => props.history.push('/edit/1')}>Edit</button>
        //     </React.Fragment>
        // )
    }

}

