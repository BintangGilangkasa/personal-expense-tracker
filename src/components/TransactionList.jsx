function TransactionList({ transactions, onViewDetail, onDelete, onUpdate }) {
    return (
        <div>
            <h2>Daftar Transaksi</h2>

            {transactions.length === 0 ? (
                <p>Belum ada Transaksi</p>
            ) : (
                transactions.map((transaction) => (
                    <div key={transaction.id}>
                        <h3>{transaction.title}</h3>

                        <p>
                            Nominal: {transaction.amount}
                        </p>

                        <p>
                            Tipe: {transaction.type}
                        </p>

                        <p>
                            Kategori: {transaction.category}
                        </p>

                        <p>
                            Tanggal: {transaction.date}
                        </p>

                        <p>
                            Catatan: {transaction.note || "-"}
                        </p>

                        <button className="btn-detail"
                            onClick={() =>
                                onViewDetail(transaction)
                            }
                        >
                            Detail
                        </button>

                        <button className="btn-delete"
                            onClick={() =>
                                onDelete(transaction.id)
                            }
                        >
                            Hapus
                        </button>

                        <button className="btn-update"
                            onClick={() =>
                                onUpdate(transaction)
                            }
                        >
                            Edit
                        </button>
                    </div>
                ))
            )
            }
        </div>
    )
}

export default TransactionList