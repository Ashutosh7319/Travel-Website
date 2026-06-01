import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PackageDetails from './pages/PackageDetails';
import Payment from './pages/Payment';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
