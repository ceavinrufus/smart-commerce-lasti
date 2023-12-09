import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import CatalogPage from "../pages/CatalogPage";
import DetailBarangPage from "../pages/DetailBarangPage";
import FinancialDashboardPage from "../pages/FinancialDashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const ProtectedRoute = ({ role }) => {
  const isAuthenticated = () => {
    const accessToken = localStorage.getItem("loginAs");
    if (accessToken) {
      return accessToken === role;
    } else {
      return false;
    }
  };
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<CatalogPage />} />
      <Route path="/products/details/:id" element={<DetailBarangPage />} />
      <Route element={<ProtectedRoute role={"admin"} />}>
        <Route path="/financial" element={<FinancialDashboardPage />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesConfig;
