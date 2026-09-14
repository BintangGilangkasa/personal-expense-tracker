function TransactionCard({
    transaction,
    onViewDetail,
    onUpdate,
    onDelete
}) {
    return (
        <div>
            <h3>
                {transaction.title}
            </h3>

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
            
            <div>
                <button
                    onClick={() =>
                        onViewDetail(transaction)
                    }
                >
                    Detail
                </button>

                <button
                    onClick={() =>
                        onUpdate(transaction)
                    }
                >
                    Edit
                </button>

                <button
                    onClick={() => 
                        onDelete(transaction)
                    }
                >
                    Hapus
                </button>
            </div>
        </div>
    )
};

export default TransactionCard