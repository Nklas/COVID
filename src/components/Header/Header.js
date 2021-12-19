import React from 'react';
import './Header.scss';
import Search from '../Search/Search';
import logo from './logo.png';

function Header({ value, handleChange }) {
    return (
        <div className="header">
            <img src={logo} alt="Logo"/>
            <div className="header-line">
                <h1 className='title'>STATISTIC</h1>
                <Search value={value} handleChange={handleChange}/>
            </div>
        </div>
    );
}

export default Header;