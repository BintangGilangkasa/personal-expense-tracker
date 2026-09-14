import { useState } from "react";


import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionDetail from "./components/TransactionDetail";
import TransactionFilter from "./components/TransactionFilter";
import NotFoundPage from "./pages/NotFoundPage";


import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true"
  });

  const [transactions, setTransactions] = useState([]);

  const [editingTransaction, setEditingTransaction] = useState(null)

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [sortAmount, setSortAmount] = useState("");



  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

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

  const handleClearFilter = () => {
    setSearch("");
    setFilterType("");
    setFilterCategory("");
    setStartDate("");
    setEndDate("");
    setSortAmount("");
  };

  const categories = [
    ...new Set(
      transactions.map(
        (transaction => transaction.category)
      )
    )

  ]

  let filteredTransactions = transactions.filter(
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
        matchCategory &&
        matchStartDate &&
        matchEndDate
      )

    }
  );

  if (sortAmount) {
    filteredTransactions = [...filteredTransactions].sort((first, second) =>
      sortAmount === "ASC"
        ? first.amount - second.amount
        : second.amount - first.amount
    );
  }

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

            <TransactionFilter
              search={search}
              setSearch={setSearch}
              filterType={filterType}
              setFilterType={setFilterType}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              sortAmount={sortAmount}
              setSortAmount={setSortAmount}
              categories={categories}
              onClearFilter={handleClearFilter}
            />

            <div className="content-grid">
              <TransactionForm
                onAddTransaction={handleAddTransaction}
                editingTransaction={editingTransaction}
                onUpdateTransaction={handleUpdateTransaction}
              />

              <TransactionList
                transactions={filteredTransactions}
                onViewDetail={setSelectedTransaction}
                onDelete={handleDeleteTransaction}
                onUpdate={setEditingTransaction}
              />
            </div>

            <TransactionDetail transaction={selectedTransaction} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
