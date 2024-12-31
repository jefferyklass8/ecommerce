import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import Favorites from "./views/Favorites";
import StoreContextProvider from "./context/StoreContext";

function App() {
  return (
    <StoreContextProvider>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main className="max-w-7xl mx-auto py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </StoreContextProvider>
  );
}

export default App;
