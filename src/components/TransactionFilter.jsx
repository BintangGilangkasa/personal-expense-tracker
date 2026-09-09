function TransactionFilter({

    search,
    setSearch,

    filterType,
    setFilterType,

    filterCategory,
    setFilterCategory,

    startDate,
    setStartDate,

    endDate,
    setEndDate,

    sortAmount,
    setSortAmount,

    categories = [],
    onClearFilter
}) {

    const availableCategories = categories.filter((cat) => {
        if (!filterType) return true;
        if (typeof cat === 'object' && cat !== null && cat.type) {
            return cat.type === filterType;
        }

        return true
    })

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
            
            {/* Filter Kategori */}
            <div>
                <label>Kategori</label>

                <select
                    value={filterCategory}
                    onChange={(event) => 
                        setFilterCategory(event.target.value)
                    }
                >
                    <option value="" disabled>Semua Kategori</option>

                    {availableCategories?.map((category) => {
                        const isObject = typeof category === 'object' && category !== null;
                        const catValue = isObject ? (category.name || category.id) : category;
                        const catKey = isObject ? (category.id || category.name) : category 

                        return (
                            <option key={catKey} value={catValue}>
                                {catValue}
                            </option>
                        )
                    })}
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
                value="button"
                onClick={onClearFilter}
            >
                Hapus Semua Filter
            </button>
        </div>
    )
}

export default TransactionFilter
