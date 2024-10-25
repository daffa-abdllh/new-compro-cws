import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import CRM from "./pages/products/CRM";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/crm" element={<CRM />} />
      </Routes>
    </Router>
  )
}

export default App
