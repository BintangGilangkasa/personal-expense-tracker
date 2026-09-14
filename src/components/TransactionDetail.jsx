import "./TransactionDetail.css"

function TransactionDetail({ transaction }){
    if (!transaction) {
        return null;
    }

    return (
        <section className="transaction-detail">
            <div className="detail-heading">
                <div>
                    <span className="component-eyebrow">Informasi lengkap</span>
                    <h2>Detail Transaksi</h2>
                </div>
                <span className={`detail-type ${transaction.type.toLowerCase()}`}>
                    {transaction.type === "INCOME" ? "Pemasukan" : "Pengeluaran"}
                </span>
            </div>

            {/* Detail Transaksi */}

            <div className="detail-grid">

                <div className="detail-field detail-title">
                    <span>Judul</span>
                    <strong>{transaction.title}</strong>
                </div>

                <div className="detail-field detail-amount">
                    <span>Nominal</span>
                    <strong>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(transaction.amount)}</strong>
                </div>

                <div className="detail-field">
                    <span>Kategori</span>
                    <strong>{typeof transaction.category === 'object' ? transaction.category?.name : transaction.category || '-'}</strong>
                </div>
                
                <div className="detail-field">
                    <span>Tanggal</span>
                    <strong>{transaction.date}</strong>
                </div>
                <div className="detail-field detail-note">
                    <span>Catatan</span>
                    <strong>{transaction.note || "Tidak ada catatan"}</strong>
                </div>
                <div className="detail-id">ID #{transaction.id}</div>
            </div>
        </section>
    )
    
}

export default TransactionDetail
