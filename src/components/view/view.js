import React, {Component, useState} from 'react';
import MealsView from "./mealsView";
import { Form, Row, Col,Container} from "react-bootstrap";

export default function View(props) {

    // useEffect(() => {
    //     fetchCardDetail();
    //     console.log(props);
    // }, []);

    const useFetch = (url, options) => {
        const [response, setResponse] = React.useState(null);
        const [error, setError] = React.useState(null);

        React.useEffect(() => {
            // const abortController=new AbortController()
            // const signal=abortController.signal
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
                    <Container>
                        <h1>Details</h1>
                        <div>
                            <label>First Name: {card.name}</label><br/>
                            <label>Team Name: {card.teamName}</label><br/>
                            <label>Role: {card.role}</label><br/>
                            <label>PMO: {card.pmo}</label><br/>
                            <label>Admin: {card.admin}</label><br/>
                            <label>Contact Number: {card.contactNumber}</label><br/>
                            <label>Manager: {card.manager}</label><br/>
                            <div>
                                {card.mealsDetails.map((meals, index) => {
                                    return (
                                        <React.Fragment>
                                            <b>date: {meals.date}</b><br/>
                                            <label>Arranged From: {meals.arrangeFrom}</label><br/>
                                            <label>Veg Count: {meals.vegCount}</label><br/>
                                            <label>Non Veg Count: {meals.nonVegCount}</label><br/>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <button onClick={() => props.history.push('/edit/'+(index+1))}>Edit</button>
                    </Container>
                </React.Fragment>
            )
        });
    }

}

