import React from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
    <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />

          </Routes>
      </Router>
    );
}

export default App;
