import React from 'react';
import './navbar.css';

const GuestUserNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container">
                <a className="navbar-brand font-weight-bolder" href="/">CMT</a>
                <button className="border-left navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                        aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default GuestUserNavbar