import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';

const TransactionContext = React.createContext();
const CurrencyContext = React.createContext();

export function useTransaction() {
    return useContext(TransactionContext);
}

export function useCurrency() {
    return useContext(CurrencyContext);
}




export function TransactionProvider({ children }) {

    const addTransactions = async (transaction) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const callback = () => {
                console.log("ARR", transactions);
            }
            const res = await axios.post('/api/v1/transactions', transaction, config);
            console.log("this is", res.data.data);
            setTransactions([...transactions, res.data.data]);

        } catch (error) {
            console.log(error);
        }
    }

    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/v1/transactions');
            setTransactions(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTransactions = async (id) => {
        try {
            const res = await axios.delete(`/api/v1/transactions/${id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const [transactions, setTransactions] = useState([]);
    const [currency, setCurrency] = useState("PKR");
    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            return;
        }
        console.log("ARR", transactions);
    }, [transactions]);


    return (
        <TransactionContext.Provider value={{ transactions: transactions, setTransactions, getTransactions, deleteTransactions, addTransactions }}>
            <CurrencyContext.Provider value={[currency, setCurrency]}>
                {children}
            </CurrencyContext.Provider>
        </TransactionContext.Provider>
    );

};