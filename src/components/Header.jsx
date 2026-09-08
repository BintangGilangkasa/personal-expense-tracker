function Header({ onLogout }) {
    return (
        <header className="header">
            <div className="header-container">
                <div>
                    <h1 className="header-logo">
                        Expense Tracker
                    </h1>

                    <p className="header-subtitle">
                        Personal Finance Management
                    </p>
                </div>

                <div className="header-user">
                    <span className="header-username">
                        Admin
                    </span>

                    <button
                        type="button"
                        className="header-logout"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;