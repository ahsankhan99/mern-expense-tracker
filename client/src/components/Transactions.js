import React, { useEffect } from 'react'
import { useTransaction } from '../context/TransactionContext';
import { useCurrency } from '../context/TransactionContext';

export const Transactions = () => {

    const { transactions, setTransactions, getTransactions, deleteTransactions } = useTransaction();
    const [currency] = useCurrency();

    useEffect(() => {
        getTransactions();
    }, [])

    const listItems = transactions.map((trans) =>
        <li className='listItem' key={trans._id} style={{ background: '#E2E4EB', borderRight: trans.amount >= 0 ? '0.5rem solid #009345' : '0.5rem solid #cb0000' }}>
            <button className='deletebtn' onClick={() => {
                let filteredArray = transactions.filter(item => item._id !== trans._id);
                deleteTransactions(trans._id);
                setTransactions(filteredArray);
            }
            }>
                X
            </button>
            <div className='transactionListContainer'>
                <p>
                    {trans.text}
                </p>
                <p>
                    {`${trans.amount} ${currency}`}
                </p>
            </div>
        </li>
    );

    return (

        <div className="history">

            <h3>History</h3>
            <ul style={{ maxHeight: '16rem', overflow: 'auto' }}>
                {listItems}
            </ul>
        </div >
    )
}
