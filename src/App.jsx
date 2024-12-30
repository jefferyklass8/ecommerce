import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import Favorites from "./views/Favorites";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar></NavBar>
      <main className="max-w-7xl mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
