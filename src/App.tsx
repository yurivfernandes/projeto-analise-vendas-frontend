import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import LoginForm from './components/auth/LoginForm';
import WelcomeScreen from './components/home/WelcomeScreen';
import BasicRegistration from './components/registration/BasicRegistration';
import SalesPersonRegistration from './components/registration/SalesPersonRegistration';
import SalesScreen from './components/sales/SalesScreen';
import ReportsScreen from './components/reports/ReportsScreen';
import StoreRegistration from './components/registration/store/StoreRegistration';
import SalesTeamRegistration from './components/registration/salesteam/SalesTeamRegistration';
import SupplierRegistration from './components/registration/supplier/SupplierRegistration';
import ProductGroupRegistration from './components/registration/product/ProductGroupRegistration';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto py-6 px-4">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/cadastros/basicos" element={<BasicRegistration />} />
            <Route path="/cadastros/vendedores" element={<SalesPersonRegistration />} />
            <Route path="/cadastros/loja" element={<StoreRegistration />} />
            <Route path="/cadastros/equipe-vendas" element={<SalesTeamRegistration />} />
            <Route path="/cadastros/fornecedor" element={<SupplierRegistration />} />
            <Route path="/cadastros/grupo-produto" element={<ProductGroupRegistration />} />
            <Route path="/vendas" element={<SalesScreen />} />
            <Route path="/relatorios" element={<ReportsScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;