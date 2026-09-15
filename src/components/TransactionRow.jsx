import { Link } from "react-router-dom";

function TransactionRow({ transaction, onDelete }) {
    return <article className="transaction-item">
        <div className={`transaction-marker ${transaction.type.toLowerCase()}`}>{transaction.type === "INCOME" ? "+" : "-"}</div>
        <div className="transaction-main">
            <div className="transaction-title-row"><h3>{transaction.title}</h3><strong>{transaction.amount.toLocaleString("id-ID")}</strong></div>
            <div className="transaction-meta"><span>{transaction.category}</span><span>{transaction.date}</span></div>
            <div className="transaction-actions"><Link to={`/transactions/${transaction.id}`}>Detail</Link><Link to={`/transactions/${transaction.id}/edit`}>Edit</Link><button type="button" onClick={() => onDelete(transaction.id)}>Hapus</button></div>
        </div>
    </article>;
}

export default TransactionRow;