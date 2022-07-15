import React from 'react';
import { useTransaction } from '../context/TransactionContext';
import { useCurrency } from '../context/TransactionContext';

export const IncomeExpense = () => {
    const { transactions } = useTransaction();
    const [currency] = useCurrency();

    return (
        <div className="income_expense">
            <div className='income'>
                <h4>Income</h4>
                <p>{`${transactions.filter(transaction => transaction.amount > 0).reduce((total, transaction) => total + transaction.amount, 0)} ${currency}`}</p>
            </div>
            <div className='expense'>
                <h4>Expense</h4>
                <p>{`${transactions.filter(transaction => transaction.amount < 0).reduce((total, transaction) => total + transaction.amount, 0)} ${currency}`}</p>
            </div>
        </div>
    )
}

