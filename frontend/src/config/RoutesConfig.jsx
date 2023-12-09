import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import CatalogPage from "../pages/CatalogPage";
import DetailBarangPage from "../pages/DetailBarangPage";
import FinancialDashboardPage from "../pages/FinancialDashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const ProtectedRoute = ({ role }) => {
  const accessToken = localStorage.getItem("loginAs");
  const isAuthenticated = () => {
    if (accessToken) {
      return role.includes(accessToken);
    } else {
      return role.includes("*");
    }
  };

  if (isAuthenticated()) {
    return <Outlet />;
  } else {
    if (!accessToken) {
      return <Navigate to="/login" replace />;
    }
    if (accessToken === "admin") {
      return <Navigate to="/financial" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }
};

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute role={["*", "customer"]} />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<ProtectedRoute role={["customer"]} />}>
        <Route path="/products" element={<CatalogPage />} />
        <Route path="/products/details/:id" element={<DetailBarangPage />} />
      </Route>
      <Route element={<ProtectedRoute role={["admin"]} />}>
        <Route path="/financial" element={<FinancialDashboardPage />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesConfig;
