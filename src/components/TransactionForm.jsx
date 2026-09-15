import { useEffect, useState } from "react";

import  {
    useDispatch,
    useSelector
} from "react-redux"
import { fetchCategories } from "../features/categories/categorySlice";


import "./TransactionForm.css"

function TransactionForm({
    onAddTransaction,
    editingTransaction,
    onUpdateTransaction,

}) {

    const [form, setForm] = useState({
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
        note: ""
    });

    const [error, setError] = useState({})
    const dispatch = useDispatch();
    const { items: categories, status: categoryStatus } = useSelector((state) => state.categories);

    useEffect(() => {
        if (categoryStatus === "idle") dispatch(fetchCategories());
    }, [categoryStatus, dispatch]);


    useEffect(() => {
        if (editingTransaction) {
            setForm({
                title: editingTransaction.title,
                amount: editingTransaction.amount,
                type: editingTransaction.type,
                category: editingTransaction.category,
                date: editingTransaction.date,
                note: editingTransaction.note
            });
        }

    }, [editingTransaction]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    };


    // VALIDASI FORM WAJIB DIISI
    const validateForm = () => {
        const newsError = {};
        
        if (form.title.trim() === ""){
            newsError.title = "Judul wajib diisi"
        }

        if (form.amount === ""){
            newsError.amount = "Nominal wajib diisi"

        } else if (Number(form.amount) <= 0) {  
            newsError.amount = ("Nominal harus lebih dari Nol")
        }

        if (form.type === "") {
            newsError.type = ("Tipe wajib dipilih")
        }

        if (form.category.trim() === ""){
            newsError.category = ("Kategori wajib dipilih")
        }

        if (form.date === ""){
            newsError.date = ("Tanggal wajib diisi")
        }

        if (form.note.length > 200){
            newsError.note = "Catatan maksimal 200 karakter"
        }

        setError(newsError)

        return Object.keys(newsError).length === 0  
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validateForm();

        if (!isValid){
            return;
        }

        if (editingTransaction) {
            const updatedTransaction = {
                id: editingTransaction.id,
                title: form.title,
                amount: Number(form.amount),
                type: form.type,
                category: form.category,
                date: form.date,
                note: form.note
            };

            onUpdateTransaction(updatedTransaction);

        } else {
            const newTransaction = {
                id: Math.floor(Math.random() * 1000000),
                title: form.title,
                amount: Number(form.amount),
                type: form.type,
                category: form.category,
                date: form.date,
                note: form.note
            };
            onAddTransaction(newTransaction);

        }
            setForm({
                title: "",
                amount: "",
                type: "",
                category: "",
                date: "",
                note: ""
            });
        };
        
        return (
            <form className="transaction-form" onSubmit={handleSubmit}>
                <div className="component-heading">
                    <div>
                        <span className="component-eyebrow">Pencatatan</span>
                        <h2>{editingTransaction ? "Edit Transaksi" : "Tambah Transaksi"}</h2>
                    </div>
                    <p>Lengkapi informasi transaksi di bawah ini.</p>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-title">Judul</label>

                    <input
                        id="transaction-title"
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Contoh: Belanja bulanan"
                    />

                    {error.title && (
                        <p className="form-error">
                            {error.title}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-amount">Nominal</label>

                    <div className="amount-input">
                        <span>Rp</span>
                        <input
                            id="transaction-amount"
                            min="0"
                            type="number"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            placeholder="0"
                        />

                        {error.amount && (
                            <p className="form-error">
                                {error.amount}
                            </p>

                        )}
                    </div>
                </div>

                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="transaction-type">Tipe</label>

                    <select
                        id="transaction-type"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value="">Pilih Tipe</option>
                        <option value="INCOME">Pemasukan</option>
                        <option value="EXPENSE">Pengeluaran</option>
                    </select>

                    {error.type && (    
                        <p className="form-error">
                            {error.type}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-category">Kategori</label>

                    <select
                        id="transaction-category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    >
                        <option value={""} disabled hidden>Pilih Kategori</option>

                        {categoryStatus === "loading" && <option disabled>Memuat kategori...</option>}
                        {categoryStatus === "error" && <option disabled>Kategori gagal dimuat</option>}
                        {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
                    </select>

                    {error.category && (
                        <p className="form-error">
                            {error.category}
                        </p>
                    )}
                </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-date">Tanggal</label>

                    <input
                        id="transaction-date"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                    />

                    {error.date && (
                        <p className="form-error">
                            {error.date}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-note">Catatan <span>(opsional)</span></label>

                    <textarea
                        id="transaction-note"
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                        placeholder="Tambahkan catatan singkat"
                        maxLength="200"
                        rows="3"
                    />

                    <small>
                        {form.note.length}/200 Karakter
                    </small>

                    {error.note && (
                        <p className="form-error">
                            {error.note}
                        </p>
                    )}
                </div>

                <button className="form-submit" type="submit">
                    {editingTransaction ? "Simpan Perubahan" : "Simpan Transaksi"}
                </button>
            </form>
        );
    }

export default TransactionForm;
