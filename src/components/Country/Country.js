import React, { useContext } from 'react';
import './Country.scss';
import { MyContext } from '../../App';

function Country({index, name, totalConfirmed, totalDeaths, totalRecovered, inverted}) {
    const handleOpenDialog = useContext(MyContext);
    const handleClick = () => {
        // prevent onClick on title line
        if (!inverted) handleOpenDialog({ title: name, totalConfirmed, totalDeaths, totalRecovered });
    };

    return (
        <li className={`country ${inverted ? 'inverted' : ''}`} onClick={handleClick}>
            <div className="index">
                <span>{index}</span>
            </div>
            <span className='vertical_line' />
            <div className='name'>
                <span>{name}</span>
            </div>
            <span className='vertical_line' />
            <div className='total'>
                <span>{totalConfirmed}</span>
            </div>
        </li>
    )
};

export default Country;