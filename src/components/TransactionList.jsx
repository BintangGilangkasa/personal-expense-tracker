import { useState } from "react";
import "./TransactionList.css"

function TransactionList({ transactions, onViewDetail, onDelete, onUpdate }) {
    const formatRupiah = (amount) => new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(amount);

    return (
        <section className="transaction-list">
            <div className="list-heading">
                <div>
                    <span className="component-eyebrow">Aktivitas</span>
                    <h2>Daftar Transaksi</h2>
                </div>
                <span className="transaction-count">{transactions.length} transaksi</span>
            </div>

            {transactions.length === 0 ? (
                <div className="transaction-empty">
                    <span className="empty-icon">↗</span>
                    <h3>Belum ada transaksi</h3>
                    <p>Transaksi yang Anda tambahkan akan muncul di sini.</p>
                </div>
            ) : (
                <div className="transaction-items">
                    {transactions.map((transaction) => (
                        <article className="transaction-item" key={transaction.id}>
                            <div className={`transaction-marker ${transaction.type.toLowerCase()}`}>
                                {transaction.type === "INCOME" ? "+" : "−"}
                            </div>

                            <div className="transaction-main">
                                <div className="transaction-title-row">
                                    <h3>{transaction.title}</h3>
                                    <strong className={`transaction-amount ${transaction.type.toLowerCase()}`}>
                                        {transaction.type === "INCOME" ? "+" : "−"}{formatRupiah(transaction.amount)}
                                    </strong>
                                </div>

                                <div className="transaction-meta">
                                    <span>{transaction.category}</span>
                                    <span>{transaction.date}</span>
                                    {transaction.note && <span>{transaction.note}</span>}
                                </div>

                                <div className="transaction-actions">
                                    <button type="button" className="btn-detail"
                                        onClick={() =>
                                            onViewDetail(transaction)
                                        }
                                    >
                                        Detail
                                    </button>

                                    <button type="button" className="btn-delete"
                                        onClick={() =>
                                            onDelete(transaction.id)
                                        }
                                    >
                                        Hapus
                                    </button>

                                    <button type="button" className="btn-update"
                                        onClick={() =>
                                            onUpdate(transaction)
                                        }
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )
        }
        </section>
    )
}

export default TransactionList
