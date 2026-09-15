import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { updateTransaction } from "../features/transactions/transactionSlice";
import NotFoundPage from "./NotFoundPage";

function EditTransaction() {
	const { id } = useParams();
	const transaction = useSelector((state) => state.transaction.items.find((item) => String(item.id) === id));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	if (!transaction) return <NotFoundPage />;
	return <main className="container"><TransactionForm editingTransaction={transaction} onUpdateTransaction={(updated) => { dispatch(updateTransaction(updated)); navigate("/transactions"); }} /></main>;
}

export default EditTransaction;
