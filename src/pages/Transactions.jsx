import TransactionList from "../components/TransactionList";
import TransactionFilter from "../components/TransactionFilter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteTransaction } from "../features/transactions/transactionSlice";


function Transactions(){
    const transactions = useSelector((state) => state.transaction.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({ search: "", filterType: "", filterCategory: "", startDate: "", endDate: "", sortAmount: "" });
    const updateFilter = (key) => (value) => setFilters((current) => ({ ...current, [key]: value }));
    const categories = [...new Set(transactions.map((transaction) => transaction.category))];
    const filtered = transactions.filter((transaction) => transaction.title.toLowerCase().includes(filters.search.toLowerCase()) && (!filters.filterType || transaction.type === filters.filterType) && (!filters.filterCategory || transaction.category === filters.filterCategory) && (!filters.startDate || transaction.date >= filters.startDate) && (!filters.endDate || transaction.date <= filters.endDate));
    if (filters.sortAmount) filtered.sort((a, b) => filters.sortAmount === "ASC" ? a.amount - b.amount : b.amount - a.amount);

    return (
        <div>

            <h1>
                Transaksi
            </h1>


            <Link to="/transactions/add">Tambah Transaksi</Link>
            <TransactionFilter {...Object.fromEntries(Object.entries({ search: filters.search, filterType: filters.filterType, filterCategory: filters.filterCategory, startDate: filters.startDate, endDate: filters.endDate, sortAmount: filters.sortAmount }).flatMap(([key, value]) => [[key, value], [`set${key[0].toUpperCase()}${key.slice(1)}`, updateFilter(key)]]))} categories={categories} onClearFilter={() => setFilters({ search: "", filterType: "", filterCategory: "", startDate: "", endDate: "", sortAmount: "" })} />


            <TransactionList transactions={filtered} onViewDetail={(transaction) => navigate(`/transactions/${transaction.id}`)} onUpdate={(transaction) => navigate(`/transactions/${transaction.id}/edit`)} onDelete={(id) => window.confirm("Apakah yakin ingin menghapus transaksi ini?") && dispatch(deleteTransaction(id))} />


        </div>
    )
}


export default Transactions;