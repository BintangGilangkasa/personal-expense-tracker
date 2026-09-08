function Dashboard({ transactions }) {

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
    return (
        <div className="dashboard">
            <h1 className="title">Dashboard</h1>
            <h3>Ringkasan</h3>
            <div className="card">
                <div className="summary-card summa">
                    <h3>Total Pemasukan</h3>
                    <p>{formatRupiah(totalIncome)}</p>
                </div>

                <div className="summary-card">
                    <h3>Total Pengeluaran</h3>
                    <p>{formatRupiah(totalExpense)}</p>
                </div>

                <div className="summary-card">
                    <h3>Total Saldo</h3>
                    <p>{formatRupiah(balance)}</p>
                </div>

                <div className="summary-card">
                    <h3>Total Transaksi</h3>
                    <p>{transactions.length}</p>
                </div>

            </div>
        </div>
    );
}

export default Dashboard