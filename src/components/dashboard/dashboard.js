import React, {useEffect, useState} from 'react';
import './dashboard.css';

export default function Dashboard({match}) {

    useEffect(() => {
        fetchUserDetails();
        console.log(match);
    },[]);

    const [cardDetails, setCardDetails] = useState([]);

    const fetchUserDetails = async => {
        // Do backend call to fetch the profile information
        // const profiles = await.fetch('/get/cards').json;
        const cardDetails = [{id :1, name:'Car'},
            {id:2, name:'Air'},
            {id:3, name:'User'},
            {id:4, name:'Cruise'},
            {id:5, name:'Lx'}]
        setCardDetails(cardDetails);
    }

    return (
        <div className="container px-5 bg-white">
            <h1>Cards</h1>
                {cardDetails.map((card) => (
                    <div className="row">
                        <div className="col-md-10 client-card-box d-inline-flex">
                            <div className="col-md-11">
                                <div className="client-card-header bg-white">{card.name}</div>
                                <p className="mbr-text card-text mbr-fonts-style align-left m-0 display-7">
                                A visit has been planned by {card.name} team on mentioned date. Please help us to make
                                    needful arrangement as mentioned in the form</p>
                            </div>
                            <div className="col-md-1 py-4 align-content-center">
                                <button key={card.id} name="editCard" className="btn btn-info btn-md">Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}