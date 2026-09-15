import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  return (
    <div className="app">
      

      {isAuthenticated && location.pathname !== "/login" && <Header />}
      <AppRoutes />
    </div>
  );
}

export default App;
