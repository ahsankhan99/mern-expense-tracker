import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/TransactionContext';

export const Header = () => {

    const [currency, setCurrency] = useCurrency();
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        fetch('https://openexchangerates.org/api/currencies.json')
            .then(response => response.json())
            .then(data => {
                setCurrencies(data);
            });
    }, [])

    const handleSelection = (e) => {
        setCurrency(e.target.value);
    }

    const getOptions = Object.keys(currencies).map(element => <option key={element} value={element}>{`${currencies[element]} (${element})`}</option>);

    return (<>
        <select className='selector' value={currency} onChange={(e) => { handleSelection(e) }}>
            {getOptions}
        </select>
        <h1 className="heading">Expense Tracker</h1>
    </>
    )
}
