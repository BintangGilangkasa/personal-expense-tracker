import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main className="container">
            <h1>404</h1>
            <p>Halaman yang anda cari tidak ditemukan atau telah dipindahkan</p>
            <Link to={"/dashboard"}>
                Kembali ke Dashboard
            </Link>
        </main>
    )
};

export default NotFoundPage;