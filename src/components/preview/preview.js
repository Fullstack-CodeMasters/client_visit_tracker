import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

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
            {id:4, name:'Lx'}]
        setCardDetails(cardDetails);
    }

    return (
        <div className="container-fluid">


            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                    Select User<span className="caret"></span>
                </button>
                <ul className="dropdown-menu text-info">
                    {props.cardDetails.map ((userRole) => (
                        <li key={`li+${userRole.id}`}>
                            <Link
                                to={`/dashboard/${userRole.id}`}
                                key={userRole.id}>{userRole.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="row content">
                <div className="col-sm-2 bg-light">
                    <h4>John's Blog</h4>
                    <ul className="nav nav-pills nav-stacked">
                        <li className="active"><a href="#section1">Home</a></li>
                        <li><a href="#">Friends</a></li>
                        <li><a href="#">Family</a></li>
                        <li><a href="#">Photos</a></li>
                    </ul>
                    <br/>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Blog.."/>
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                            <span className="glyphicon glyphicon-search"></span>
                          </button>
                        </span>
                    </div>
                </div>

                <div className="col-sm-9">
                    <h4>
                        <small>RECENT POSTS</small>
                    </h4>
                    <hr/>
                    <h2>I Love Food</h2>
                    <h5><span className="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
                    <h5><span className="label label-danger">Food</span> <span
                        className="label label-primary">Ipsum</span></h5><br/>
                    <span>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</span>
                    <br/><br/>

                    <h4>
                        <small>RECENT POSTS</small>
                    </h4>
                    <hr/>
                    <h2>Officially Blogging</h2>
                    <h5><span className="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.
                    </h5>
                    <h5><span className="label label-success">Lorem</span></h5><br/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <hr/>

                    <h4>Leave a Comment:</h4>
                    <form role="form">
                        <div className="form-group">
                            <textarea className="form-control" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                    <br/><br/>

                    <span className="badge">2</span> Comments:<br/>

                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <img src="bandmember.jpg" className="img-circle" height="65" width="65"
                                 alt="Avatar"/>
                        </div>
                        <div className="col-sm-10">
                            <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
                            <span>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</span>
                            <br/>
                        </div>
                        <div className="col-sm-2 text-center">
                            <img src="bird.jpg" className="img-circle" height="65" width="65"
                                 alt="Avatar"/>
                        </div>
                        <div className="col-sm-10">
                            <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
                            <span>I am so happy for you man! Finally. I am looking forward to read
                                about your trendy life. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </span>
                            <br/>
                            <span><span className="badge">1</span> Comment:</span><br/>
                            <div className="row">
                                <div className="col-sm-2 text-center">
                                    <img src="bird.jpg" className="img-circle" height="65"
                                         width="65" alt="Avatar"/>
                                </div>
                                <div className="col-xs-10">
                                    <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
                                    <span>Me too! WOW!</span>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}