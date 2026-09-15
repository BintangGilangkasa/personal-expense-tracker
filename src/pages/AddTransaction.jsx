import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { addTransaction } from "../features/transactions/transactionSlice";

function AddTransaction() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return <main className="container"><TransactionForm onAddTransaction={(transaction) => { dispatch(addTransaction(transaction)); navigate("/transactions"); }} /></main>;
}

export default AddTransaction;
