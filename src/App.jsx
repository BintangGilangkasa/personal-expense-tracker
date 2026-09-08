import { useState } from "react";

import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionDetail from "./components/TransactionDetail";
import TransactionFilter from "./components/TransactionFilter";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [transactions, setTransactions] = useState([]);

  const [editingTransaction, setEditingTransaction] = useState(null)

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [sortAmount, setSortAmount] = useState("");


  const handleUpdateTransaction = (updatedTransaction) => {
    const updatedTransactions = transactions.map(
      (transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
    );

    setTransactions(updatedTransactions);

    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id) => {
    const confirmeDelete = window.confirm(
      "Apakah yakin ingin menghapus transaksi ini?"
    );

    if (!confirmeDelete) {
      return;
    }

    const updatedTransaction = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(updatedTransaction)
  }

  const handleAddTransaction = (newTransaction) => {
    setTransactions([
      ...transactions,
      newTransaction
    ]);
  };

  const caterogies = [
    ...new Set(
      transactions.map(
        (transaction => transaction.category)
      )
    )

  ]

  let filteredTransaction = transactions.filter(
    (transaction) => {
      const matchSearch = transaction
        .title.toLowerCase()
        .includes(search.toLowerCase());

      const matchType =
        filterType === "" ||
        transaction.type === filterType;

      const matchCategory =
        filterCategory === "" ||
        transaction.category === filterCategory;

      const matchStartDate =
        startDate === "" ||
        transaction.date >= startDate;

      const matchEndDate =
        endDate === "" ||
        transaction.date <= endDate;

      return (
        matchSearch &&
        matchType &&
        matchSearch &&
        matchCategory &&
        matchStartDate &&
        matchEndDate
      )

    }
  )

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginPage
          onLogin={() => setIsLoggedIn(true)}
        />
      ) : (
        <>
          <Header 
            onLogout={() => setIsLoggedIn(false)}
          />

          <main className="container">
            <Dashboard
              transactions={transactions}
            />

            <TransactionForm
              onAddTransaction={handleAddTransaction}
              editingTransaction={editingTransaction}
              onUpdateTransaction={handleUpdateTransaction}
            />

            <TransactionList
              transactions={transactions}
              onViewDetail={setSelectedTransaction}
              onDelete={handleDeleteTransaction}
              onUpdate={setEditingTransaction}
            />

            <TransactionDetail
              transaction={selectedTransaction}
            />
          </main>
        </>
      )}
    </div>
  );
}

export default App;