import React, {useEffect, useState, createContext} from 'react';
import Header from './components/Header/Header.js';
import Countries from './components/Countries/Countries';
import Dialog from './components/Dialog/Dialog';
import './App.scss';
import * as apiService from './App.service';

export const MyContext = createContext();

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    const dialogInitialState = {
        open: false,
        title: '',
        confirmed: 0,
        deaths: 0,
        recovered: 0
    };

    const [dialog, setDialog] = useState(dialogInitialState);
    const {open, title, confirmed, deaths, recovered} = dialog;

    useEffect(() => {
        apiService.fetchCountries().then((countries) => {
            //console.log(countries);
            setCountries(countries);
        });

    }, []);

    const handleOpenDialog = ({title, totalConfirmed, totalDeaths, totalRecovered}) => {
        setDialog({
            open: true,
            title,
            confirmed: totalConfirmed,
            deaths: totalDeaths,
            recovered: totalRecovered
        });
    };

    const handleClose = () => setDialog(dialogInitialState);

    const handleChange = event => setSearch(event.target.value);

    const filterCountries = countries => search === '' ? countries : countries.filter(country => country.Country.toLowerCase().includes(search.toLowerCase()));

    return (
        <MyContext.Provider value={handleOpenDialog}>
            <Header value={search} handleChange={handleChange} />
            <Countries countries={filterCountries(countries)} />
            {open && (
                <Dialog
                    handleClose={handleClose}
                    title={title}
                    confirmed={confirmed}
                    deaths={deaths}
                    recovered={recovered}
                />
            )}
        </MyContext.Provider>
    );
}

export default App;
