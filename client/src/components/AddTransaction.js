import React, { useState } from 'react'
import { useTransaction } from '../context/TransactionContext';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { transactions, setTransactions, addTransactions } = useTransaction();

    return (
        <>
            <div id="add-transaction">
                <h3>Add Transaction</h3 >
                <label>
                    Description
                    <input type="text" placeholder='Enter Description...' value={text} onChange={(input) => setText(input.target.value)} />
                </label>
                <label>
                    Amount
                    <input type="number" name='amount' value={amount} onChange={(input) => setAmount(input.target.value)} placeholder='Enter Amount...' />
                </label>
                <button className="btn"
                    disabled={text === '' || amount === ''}
                    onClick={() => {
                        addTransactions({ text, amount });
                        setAmount('');
                        setText('');
                    }}>Add transaction</button>
            </div>
        </>
    )
}
