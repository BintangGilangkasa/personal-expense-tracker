import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import AddTransaction from "../pages/AddTransaction";
import EditTransaction from "../pages/EditTransaction";
import TransactionDetailPage from "../pages/TransactionDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes(){
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const protectedElement = (element) => (
        <ProtectedRoute isAuthenticated={isAuthenticated}>{element}</ProtectedRoute>
    );

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={protectedElement(<Dashboard />)} />
            <Route path="/transactions" element={protectedElement(<Transactions />)} />
            <Route path="/transactions/add" element={protectedElement(<AddTransaction />)} />
            <Route path="/transactions/:id" element={protectedElement(<TransactionDetailPage />)} />
            <Route path="/transactions/:id/edit" element={protectedElement(<EditTransaction />)} />
            <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes