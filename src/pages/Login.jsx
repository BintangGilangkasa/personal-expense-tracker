import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

import {
  FaUser,
  FaEye,
} from "react-icons/fa";

import "./Login.css";

function LoginPage({ onLogin }) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();

        setError("");

        if (!user?.username || !user.password) {
            setError("Username & Password wajib diisi")
            return; 
        }

        if (
            user.username === "admin" && 
            user.password === "admin123"
        ) {
            dispatch(login());
            onLogin?.();
            navigate("/dashboard")
        } else {
            setError("Username atau Password Salah")
        }

        // if (
        //     user.username === "admin" &&
        //     user.password === "admin123"
        // ) {
        //     onLogin();
        // } if (!user || !password) {
        //     setError("Username atau password salah");
        //     return;
        // }
    };

    return (
        <div className="login-page">
            <div className="login-decoration login-decoration-one" />
            <div className="login-decoration login-decoration-two" />

            <main className="login-card">
            <div className="login-heading">
                <span>Expense Tracker</span>
                <h1>Login</h1>
                <p>Masuk untuk mulai mengelola keuangan Anda.</p>
            </div>

            <form className="login-form" onSubmit={handleLogin}>

                {/* Form User */}
                <div className="login-field">
                    <label htmlFor="login-username">Username</label>

                    <div className="login-input-wrap">
                        <FaUser className="login-user-icon" />

                        <input
                            id="login-username"
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            placeholder="Masukkan username"
                        />
                    </div>
                </div>

                {/* Form Password */}
                <div className="login-field">
                    <label htmlFor="login-password">Password</label>

                    <div className="login-input-wrap">
                        <FaEye className="login-password-icon" />

                        <input
                            id="login-password"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Masukkan password"
                        />
                    </div>
                </div>

                {/* Tampilan Error di UI jika ada */}

                {error && <div className="Login-error-message">{error}</div>}

                <button className="login-submit" type="submit">
                    Login
                </button>
            </form>

            <p className="login-footer">Personal Finance Management</p>
            </main>
        </div>
    );
}

export default LoginPage;
