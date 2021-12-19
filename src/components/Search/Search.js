import React from 'react';
import './Search.scss';
import searchImg from './search.png';

function Search({ value, handleChange }) {
    return (
        <div className="search-wrapper">
            <input className='input' type="text" placeholder="Search..." value={value} onChange={handleChange} />
            <img className='img' src={searchImg} alt="Logo"/>
        </div>
    )
};


export default Search;