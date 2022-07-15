import React from 'react'
import { useTransaction } from '../context/TransactionContext';
import { useCurrency } from '../context/TransactionContext';

export const Balance = () => {
    const { transactions } = useTransaction();
    const [currency] = useCurrency();

    return (
        <>
            <h5 style={{ textTransform: 'uppercase', color: '#191C25' }}>Your Balance</h5>
            <h4 className="balance" >{`${transactions.reduce((total, transaction) => total + transaction.amount, 0)} ${currency}`}</h4>
        </>
    )
}


