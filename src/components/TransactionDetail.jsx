function TransactionDetail({ transaction }){
    if (!transaction) {
        return null;
    }

    return (
        <div>
            <h2>Detail Transaksi</h2>

            <p>
                ID: {transaction.id}
            </p>

            <p>
                Judul: {transaction.title}
            </p>

            <p>
                Nominal: {transaction.amount}
            </p>

            <p>
                Tipe: {transaction.type}
            </p>

            <p>
                Kategori: {typeof transaction.category === 'object' ? transaction.category?.name : transaction.category || '-'}
            </p>

            <p>
                Tanggal: {transaction.date}
            </p>

            <p>
                Catatan: {transaction.note || "-"}
            </p>
        </div>
    )
    
}

export default TransactionDetail