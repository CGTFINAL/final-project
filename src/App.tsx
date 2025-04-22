import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NewDrop from './pages/NewDrop';
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
          </Routes>
        </main>
      </HashRouter>
    </>
  )
}

export default App
