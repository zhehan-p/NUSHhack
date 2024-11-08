import logo from './logo.svg';
import './App.css';
import React from 'react';

function Titlebar() {
    return (
        <React.Fragment>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='creds'><button className='credbutton'>Log In</button></div>
        </React.Fragment>
    );
}

export default Titlebar;