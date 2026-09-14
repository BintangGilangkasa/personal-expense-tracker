import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h1>404</h1>
            <p>Halaman yang anda cari tidak ditemukan atau telah dipindahkan</p>
            <Link to={"/Dashboard"}>
                Kembali ke Dashboard
            </Link>
        </div>
    )
};

export default NotFoundPage;