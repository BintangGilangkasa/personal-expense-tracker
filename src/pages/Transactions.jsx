import TransactionList from "../components/TransactionList";
import TransactionFilter from "../components/TransactionFilter";


function Transactions(){

    return (
        <div>

            <h1>
                Transaksi
            </h1>


            <TransactionFilter />


            <TransactionList />


        </div>
    )
}


export default Transactions;