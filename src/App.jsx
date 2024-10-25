import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import CRM from "./pages/products/CRM";
import FMS from "./pages/products/FMS";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/crm" element={<CRM />} />
        <Route path="/products/fms" element={<FMS />} />
      </Routes>
    </Router>
  )
}

export default App
