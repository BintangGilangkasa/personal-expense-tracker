import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TransactionDetail from "../components/TransactionDetail";

function TransactionDetailPage() {
	const { id } = useParams();
	const transaction = useSelector((state) => state.transaction.items.find((item) => String(item.id) === id));
	if (!transaction) return <main className="container"><h1>404</h1><p>Transaksi tidak ditemukan.</p><Link to="/transactions">Kembali ke transaksi</Link></main>;
	return <main className="container"><TransactionDetail transaction={transaction} /><Link to={`/transactions/${id}/edit`}>Edit transaksi</Link></main>;
}

export default TransactionDetailPage;
