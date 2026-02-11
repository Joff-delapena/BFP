import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OfficersPage from "./pages/OfficersPage";
import { LoginPage } from "../admin/pages/LoginPage";
import AdminDashboard from "../admin/pages/AdminDashboard";

function Layout() {
  const location = useLocation();

  const isAdminDashboard = location.pathname === "/admin/dashboard";
  const isAdminLoginPage = location.pathname === "/admin"; // login path is /admin
  const isHomePage = location.pathname === "/";

  const showHeader = !isAdminDashboard && !isAdminLoginPage;
  const showFooter = !isAdminDashboard && !isAdminLoginPage && !isHomePage;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {showHeader && <Header />}

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/officers" element={<OfficersPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Layout />
      </DataProvider>
    </BrowserRouter>
  );
}
