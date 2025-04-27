import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NewDrop from './pages/NewDrop';
// import ProductPage from './pages/ProductPage';
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
            <Route path="/NewDrop" element={<NewDrop />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/Product" element={<Product />} /> */}
          </Routes>
        </main>
      </HashRouter>
    </>
  )
}

export default App
