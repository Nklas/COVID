import React from 'react';
import Country from '../Country/Country';
import './Countries.scss';

function Countries({countries}) {
    return (
        <ul>
            <Country
                key={0}
                index='№'
                name='Country'
                totalConfirmed='Total Confirmed'
                inverted
            />
            {countries.map((country, index) => (
                <Country
                    key={index + 1}
                    index={index + 1}
                    name={country.Country}
                    totalConfirmed={country.TotalConfirmed}
                    totalDeaths={country.TotalDeaths}
                    totalRecovered={country.TotalRecovered}
                />
            ))}
        </ul>
    )
}

export default Countries;