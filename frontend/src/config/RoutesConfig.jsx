import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import CatalogPage from "../pages/CatalogPage";
import DetailBarangPage from "../pages/DetailBarangPage";
import FinancialDashboardPage from "../pages/FinancialDashboardPage";
import HomePage from "../pages/HomePage";

// const ProtectedRoute = () => {
//   const isAuthenticated = () => {
//     const accessToken = sessionStorage.getItem("accessToken");
//     if (accessToken) {
//       try {
//         const decodedToken = jwtDecode(accessToken);
//         const currentTime = Date.now() / 1000;

//         return decodedToken.exp > currentTime;
//       } catch (error) {
//         console.error("Error decoding access token:", error);
//         return false;
//       }
//     }

//     return false;
//   };
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/auth" replace />;
// };

const RoutesConfig = () => {
  return (
    <Routes>
      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<CatalogPage />} />
      <Route path="/products/details/:id" element={<DetailBarangPage />} />
      <Route path="/financial" element={<FinancialDashboardPage />} />
      {/* </Route> */}
      {/* <Route path="/auth" element={<AuthPage />} /> */}
    </Routes>
  );
};

export default RoutesConfig;
