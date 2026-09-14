import "./TransactionFilter.css"

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
        <section className="transaction-filter">
            <div className="filter-heading">
                <div>
                    <span className="component-eyebrow">Temukan data</span>
                    <h2>Pencarian & Filter</h2>
                </div>
                <button
                    type="button"
                    className="filter-clear"
                    onClick={onClearFilter}
                >
                    Hapus Filter
                </button>
            </div>

            <div className="filter-grid">

            <div className="filter-field filter-search">
                <label htmlFor="filter-search">Cari Judul</label>

                <input
                id="filter-search"
                type="text"
                placeholder="Cari Transaksi"
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
                />
            </div>

            <div className="filter-field">
                <label htmlFor="filter-type">Tipe</label>
                
                <select
                    id="filter-type"
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
            <div className="filter-field">
                <label htmlFor="filter-category">Kategori</label>

                <select
                    id="filter-category"
                    value={filterCategory}
                    onChange={(event) => 
                        setFilterCategory(event.target.value)
                    }
                >
                    <option value="">Semua Kategori</option>

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

            <div className="filter-field">
                <label htmlFor="filter-start-date">Dari Tanggal</label>

                <input 
                    id="filter-start-date"
                    type="date"
                    value={startDate}
                        onChange={(event) => 
                            setStartDate(event.target.value)
                        }
                />
            </div>

            <div className="filter-field">
                <label htmlFor="filter-end-date">Sampai Tanggal</label>

                <input 
                    id="filter-end-date"
                    type={"date"}
                    value={endDate}
                        onChange={(event) => 
                            setEndDate(event.target.value)
                        }
                />
            </div>

            <div className="filter-field">
                <label htmlFor="filter-sort">Urutkan Nominal</label>

                <select
                    id="filter-sort"
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
            </div>
        </section>
    )
}

export default TransactionFilter
