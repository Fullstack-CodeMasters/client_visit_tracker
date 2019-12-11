import React, {useState, useEffect} from 'react';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';
import GuestUserNavbar from '../navbar/guestUserNavbar';
import LoggedInUserNavbar from '../navbar/loggedInUserNavbar';
import ClientVisitCreateForm from '../forms/clientVisitCreateForm';
import View from '../view/view';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';

import './root.css';

export default function Root(props) {

    const [userRoles, setUserRoles] = useState([]);
    const [sessionUser, setSessionUser] = useState( '');

    const fetchUserRoles = async => {
        // Do backend call to fetch the profile information
        // const profiles = await.fetch('url').json;
        const userRoles = [{id:1, name:'Manager'},
            {id:2, name:'PMO'},
            {id:3, name:'Admin'},
            {id:4, name:'User'}]
        setUserRoles(userRoles);
    }

    const getSessionUser = async => {
        let localStorageValue = localStorage.getItem('CVTUser');
        setSessionUser(localStorageValue === null ? null : JSON.parse(localStorageValue));
    }

    // Handle fields change
    const handleSignIn = value => {
        const loggedInUser = userRoles.find(userRole => userRole.name === value);
        localStorage.setItem('CVTUser', JSON.stringify(loggedInUser));
        setSessionUser(loggedInUser)
    }

    const handleSignOut = value => {
        localStorage.removeItem('CVTUser');
        setSessionUser(null);
    }

    useEffect(() => {
        fetchUserRoles();
        getSessionUser();
    },[]);

    return (
        <React.Fragment>
            {sessionUser === null ? <GuestUserNavbar/>:
                <LoggedInUserNavbar
                    sessionUser={sessionUser}
                    handleSignOut={handleSignOut}/>}
            <Router>
                <Switch>

                    <Route path={["/", "/login"]} exact render={({ location, routeProps }) =>
                        sessionUser === null ? <Login userRoles={userRoles} handleUserRoleChange={handleSignIn}/> :
                            <Redirect to={{
                                    pathname: "/dashboard/1",
                                    state: { from: location }
                                }}/>
                    }/>
                    <Route path="/dashboard/:id" render={(props) => (
                        sessionUser === null ? <Redirect to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}/>  : <Dashboard {...props}/>
                    )}/>
                    <Route path="/create" render={(props) => (
                        sessionUser === null ? <Redirect to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}/>  : <View {...props}/>
                    )}/>
                    <Route path="/view/:id" render={(props) => (
                        sessionUser === null ? <Redirect to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}/>  : <View {...props}/>
                    )}/>
                    <Route path="/edit/:id" render={(props) => (
                        sessionUser === null ? <Redirect to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}/>  : <ClientVisitCreateForm {...props}/>
                    )}/>
                </Switch>
            </Router>
            <div className="footer bg-info">
                <p>© Copyright 2019 Website by Developer. All Rights reserved.</p>
            </div>
        </React.Fragment>
    )
}



