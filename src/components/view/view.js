import React, {Component, useEffect, useState} from 'react';

export default function View(props) {

    useEffect(() => {
        fetchCardDetail();
        console.log(props);
    },[]);


    const [cardDetail, setCardDetail] = useState([]);

    const fetchCardDetail = async => {

        fetch('http://localhost:8080/getClientData', {
            method: "GET",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
            console.log("Response from backend:  "+body);
        });
        const cardDetail = {
            step: 1,
            name: '',
            teamName: '',
            role: '',
            pmo: '',
            admin: '',
            contactNumber: '',
            manager:'',
            MeetingSchedule: [
                {
                    date: "2017-09-27",
                    schedules:[
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
                    schedules:[
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
                    schedules:[
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
            }]
        };
        setCardDetail(cardDetail);
    }

    return (
        <React.Fragment>
            <h1>Details</h1>
            <div>
                <label >First Name: {cardDetail.name}</label><br/>
                <label >Team Name: {cardDetail.teamName}</label><br/>
                <label >Role: {cardDetail.role}</label><br/>
                <label >PMO: {cardDetail.pmo}</label><br/>
                <label >Admin: {cardDetail.admin}</label><br/>
                <label >Contact Number: {cardDetail.contactNumber}</label><br/>
                <label >Manager: {cardDetail.manager}</label><br/>
            </div>
            <br />

            <button onClick={() => props.history.push('/edit/1')}>Edit</button>
        </React.Fragment>
    )
}

