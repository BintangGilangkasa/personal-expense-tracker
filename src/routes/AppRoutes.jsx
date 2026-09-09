import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                >
                </Route>

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                >
                </Route>

                <Route
                    path="/transaction"
                    element={<Transaction />}

                >
                </Route>
            </Routes>
        </BrowserRouter>
    )
}