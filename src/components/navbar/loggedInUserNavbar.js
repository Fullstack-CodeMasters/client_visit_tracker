import React from 'react';
import './navbar.css';

const LoggedInUserNavbar = props => {

    const { sessionUser, handleSignOut } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container">
                <a className="navbar-brand font-weight-bolder" href="/">CMT</a>
                <button className="border-left navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                        aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link active" href="/dashboard/1">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create">Create</a>
                        </li>
                    </ul>
                    <div className="my-2">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown07"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{sessionUser.name}</a>
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="dropdown-item" onClick={handleSignOut}>Log out</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default LoggedInUserNavbar