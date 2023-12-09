import logo from "./logo.svg";
import "./App.css";
import CatalogPage from "./pages/CatalogPage";
import FinancialDashboard from "./pages/FinancialDashboardPage";
import Navbar from "./components/Navbar";
import RoutesConfig from "./config/RoutesConfig";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      {/* <FinancialDashboard /> */}
      <RoutesConfig />
    </div>
  );
}

export default App;
