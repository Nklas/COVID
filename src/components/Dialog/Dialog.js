import React from 'react';
import './Dialog.scss';
import confirmedIcon from './confirmed.png'
import deathsIcon from './deaths.png'
import recoveredIcon from './recovered.png'

function Dialog({title, handleClose, confirmed, deaths, recovered}) {
    const closeDialogOnWrapper = e => {
        if (e.target === e.currentTarget) handleClose();
    };

    return (
        <div className='wrapper' onClick={closeDialogOnWrapper}>
            <div className='dialog'>
                <div className='center title'>{title}</div>
                <div className='line'>
                    <div className='icon-container'>
                        <span className='icon-wrapper'>
                           <img className='img' src={confirmedIcon} alt="confirmed"/>
                        </span>
                        <span className='description'>TotalConfirmed</span>
                    </div>
                    <div>
                        {confirmed}
                    </div>
                </div>

                <div className='line'>
                    <div className='icon-container'>
                         <span className='icon-wrapper'>
                            <img className='img' src={deathsIcon} alt="deaths"/>
                        </span>
                        <span className='description'>TotalDeaths</span>
                    </div>
                    <div>
                        {deaths}
                    </div>
                </div>

                <div className='line'>
                    <div className='icon-container'>
                         <span className='icon-wrapper'>
                           <img className='img' src={recoveredIcon} alt="recovered"/>
                        </span>
                        <span className='description'>TotalRecovered</span>
                    </div>
                    <div>
                        {recovered}
                    </div>
                </div>

                <div className='center'>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default Dialog;