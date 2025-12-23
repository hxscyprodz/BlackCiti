import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/services" element={ <ServicesPage /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
