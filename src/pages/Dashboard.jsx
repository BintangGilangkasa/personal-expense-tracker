import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SummaryCard from "../components/SummaryCard";

function Dashboard({ transactions: providedTransactions }) {
    const transactions = providedTransactions || useSelector((state) => state.transaction.items);

    // KURS TO RUPIAH
    const formatRupiah = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(amount)
    }

    // INCOME
    const incomeTransaction = transactions.filter(
        (transactions) => transactions.type === "INCOME"
    );

    const totalIncome = incomeTransaction.reduce(
        (total, transactions) => total + transactions.amount, 0
    );

    // EXPENSE
    const expenseTransaction = transactions.filter(
        (transactions) => transactions.type === "EXPENSE"
    )

    const totalExpense = expenseTransaction.reduce(
        (total, transactions) => total + transactions.amount, 0
    )

    // BALANCE
    const balance = totalIncome - totalExpense;

    // 

    return (
        <div className="dashboard-summary">
            <h1 className="title">Dashboard Keuangan</h1>
            <h3>Ringkasan</h3>
            <div className="card">
                <SummaryCard label="Total Pemasukan" value={formatRupiah(totalIncome)} />
                <SummaryCard label="Total Pengeluaran" value={formatRupiah(totalExpense)} />
                <SummaryCard label="Total Saldo" value={formatRupiah(balance)} />
                <SummaryCard label="Total Transaksi" value={transactions.length} />

            </div>
            <section className="transaction-list">
                <div className="list-heading">
                    <h2>Transaksi Terbaru</h2>
                    <Link to="/transactions">Lihat semua</Link>
                </div>
                {transactions.length === 0 ? <p>Belum ada transaksi.</p> : transactions.slice(-5).reverse().map((transaction) => (
                    <p key={transaction.id}>{transaction.title} - {formatRupiah(transaction.amount)}</p>
                ))}
            </section>
        </div>
    );
}

export default Dashboard