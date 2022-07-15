import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { Transactions } from './components/Transactions';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './context/TransactionContext';

function App() {

  return (
    <>
      <TransactionProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <Transactions />
          <AddTransaction />
        </div>
      </TransactionProvider>
    </>
  );
}

export default App;
