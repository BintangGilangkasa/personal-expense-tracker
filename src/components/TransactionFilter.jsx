function TransactionFilter({
    search,
    setSearch,

    filterType,
    setFilterType,

    filterCategory,
    setFilterCategory,

    endDate,
    setEndDate,

    sortAmount,
    setSortAmount,

    catergies,

    onClearFilter
}) {
    return (
        <div>
            <h2>Pencarian dan Filter</h2>

            <div>
                <label>Cari Judul</label>

                <input
                type="text"
                placeholder="Cari Transaksi"
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
                />
            </div>

            <div>
                <label>Tipe</label>
                
                <select
                    value={filterType}
                    onChange={(event) =>
                        setFilterType(event.target.value)
                    }
                >
                    <option
                        value={""}
                    >
                        Semua Tipe
                    </option>

                    <option
                        value={"INCOME"}
                    >   
                        Pemasukan
                    </option>

                    <option
                        value={"EXPENSE"}
                    >
                        Pengeluaran
                    </option>
                </select>
            </div>

            <div>
                <label>Kategori</label>

                <select
                    value={filterCategory}
                    onChange={(event) =>
                        setFilterCategory(event.target.value)
                    }
                >
                    <option value={""}>
                        Semua Kategori
                    </option>

                    {catergies.map((category) => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Dari Tanggal</label>

                <input 
                    type="date"
                    value={startDate}
                        onChange={(event) => 
                            setStartDate(event.target.value)
                        }
                />
            </div>

            <div>
                <label>Sampai Tanggal</label>

                <input 
                    type={"date"}
                    value={endDate}
                        onChange={(event) => 
                            setEndDate(event.target.value)
                        }
                />
            </div>

            <div>
                <label>Urutkan Nominal</label>

                <select
                    value={sortAmount}
                    onChange={(event) =>
                        setSortAmount(event.target.value)
                    }
                >
                    <option value={""}>
                        Tidak diurutkan
                    </option>

                    <option value={"ASC"}>
                        Terkecil
                    </option>

                    <option value={"DESC"}>
                        Terbesar
                    </option>
                </select>
            </div>

            <button
                value={button}
                onClick={onClearFilter}
            >
                Hapus Semua Filter
            </button>
        </div>
    )
}

export default TransactionFilter
