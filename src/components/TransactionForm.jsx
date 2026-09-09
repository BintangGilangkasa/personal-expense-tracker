import { useEffect, useState } from "react";

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

    const handleAmountChange = (event) => {
        const value = Number(event.target.value);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

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
            <form className="card" onSubmit={handleSubmit}>
                <div>
                    <label>Judul</label>

                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Nominal</label>

                    <input
                        min="0"
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Tipe</label>

                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value="">Pilih Tipe</option>
                        <option value="INCOME">Pemasukan</option>
                        <option value="EXPENSE">Pengeluaran</option>
                    </select>
                </div>

                <div>
                    <label>Kategori</label>

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    >
                        <option value={""} disabled hidden>Pilih Kategori</option>

                        <optgroup label="Pengeluaran">
                            <option value={"barang"}>Barang</option>
                            <option value="makanan">Makanan & Minuman</option>
                            <option value="transportasi">Transportasi</option>
                            <option value="tagihan">Tagihan & Utilitas</option>
                        </optgroup>

                        <optgroup label="Pemasukan">
                            <option value="gaji">Gaji Utama</option>
                            <option value="usaha">Usaha</option>
                            <option value="investasi">Investasi</option>
                        </optgroup>
                    </select>
                </div>

                <div>
                    <label>Tanggal</label>

                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Catatan</label>

                    <input
                        type="text"
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">
                    Simpan
                </button>
            </form>
        );
    }

export default TransactionForm;