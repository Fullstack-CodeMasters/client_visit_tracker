import React, { Component } from 'react';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';
import GuestUserNavbar from '../navbar/guestUserNavbar';
import ClientVisitCreateForm from '../forms/clientVisitCreateForm';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';

export default class RootPage extends Component {
    state = {
        userRoles: [],
        flag: true,
        sessionUser: localStorage.getItem('CVTUser')
    };

    fetchUserRoles = async => {
        // Do backend call to fetch the profile information
        // const profiles = await.fetch('url').json;
        const userRoles = [{id:1, name:'Manager'},
            {id:2, name:'PMO'},
            {id:3, name:'Admin'},
            {id:4, name:'User'}]
        this.setState({
            userRoles: userRoles
        });
    }

    handleUserRoleChange = value => {
        localStorage.setItem('CVTUser', this.state.userRoles.find(userRole => userRole.name === value))
        this.setState({
            setSessionUser: this.state.userRoles.find(userRole => userRole.name === value)
        });
    }

    componentDidMount() {
        this.fetchUserRoles();
        this.setState({
            flag: true
        });
        console.log(this.state.sessionUser);
    }

    render() {
        return  (<React.Fragment>
            <GuestUserNavbar sessionUser={this.state.sessionUser}/>
            <h1>{this.state.sessionUser.name}</h1>
            <h1>{this.state.flag}</h1>
            <h1>{localStorage.getItem('CVTUser').name}</h1>
            <Router>
                <Switch>

                    <Route path={["/", "/login"]} exact
                           render={() => <Login
                               userRoles={this.state.userRoles}
                               handleUserRoleChange={this.handleUserRoleChange}/>
                           }/>

                    <Route path="/dashboard/:id" render={({ location }) =>
                        this.state.sessionUser!='' ? (Dashboard) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />)
                    }/>

                    <Route path="/create" render={({ location }) =>
                        this.state.sessionUser!='' ? <ClientVisitCreateForm/> : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />)
                    }
                    />
                </Switch>
            </Router>
        </React.Fragment>)
    }
}
