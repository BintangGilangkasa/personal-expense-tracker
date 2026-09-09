function Header() {

    const handleLogout = (event) => {
    event.preventDefault();

    console.log("coba-coba")

    const comfirmedLogout = window.confirm(
      "Apakah anda ingin keluar dari akun ini?"
    );

    if (!comfirmedLogout){
      return;
    }

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    window.location.href = "/Login"
  }

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