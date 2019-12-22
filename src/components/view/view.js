import React, {Component, useEffect, useState} from 'react';

export default function View(props) {

    useEffect(() => {
        fetchCardDetail();
        console.log(props);
    },[]);


    const [cardDetail, setCardDetail] = useState([]);

    const fetchCardDetail = async => {
        // Do backend call to fetch the profile information
        // const profiles = await.fetch('/get/card/1').json;
        const cardDetail = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
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
                <label >First Name: {cardDetail.firstName}</label><br/>
                <label >Last Name: {cardDetail.lastName}</label><br/>
                <label >Email: {cardDetail.email}</label><br/>
                <label >Occupation: {cardDetail.occupation}</label><br/>
                <label >City: {cardDetail.city}</label><br/>
                <label >Bio: {cardDetail.bio}</label><br/>
            </div>
            <br />

            <button onClick={() => props.history.push('/edit/1')}>Edit</button>
        </React.Fragment>
    )
}
