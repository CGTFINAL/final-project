import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NewDrop from './pages/NewDrop';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import ProductDetailPage from './pages/ProductDetailPage';
function App() {

  return (
    <>
      <HashRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-drop" element={<NewDrop />} />
            <Route path="/all-products" element={<ProductPage />} />
            <Route path="/product/:index" element={<ProductDetailPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  )
}

export default App;
