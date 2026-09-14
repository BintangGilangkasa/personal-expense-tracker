import "./Header.css"

function Header({ onLogout }) {

    const handleLogout = (  ) => {

    const comfirmedLogout = window.confirm(
      "Apakah anda ingin keluar dari akun ini?"
    );

    if (!comfirmedLogout){
      return;
    }

    localStorage.removeItem("isLoggedIn")

    onLogout();
  }

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-brand">
                    <h1 className="header-logo">
                        Expense Tracker
                    </h1>

                    <p className="header-subtitle">
                        Personal Finance Management
                    </p>
                </div>

                <div className="header-user">
                    <span className="header-username" aria-label="Pengguna aktif">
                        Admin
                    </span>

                    <button
                        type="button"
                        className="header-logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
