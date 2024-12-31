import React, { useContext } from "react";

import ProductCard from "../components/ProductCard";
import { StoreContext } from "../context/StoreContext";

const Favorites = () => {
  // consume the context
  const { state } = useContext(StoreContext);
  const favorites = state.products.filter((p) => p.isFavorite);

  if (favorites.length === 0) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
        <p>You currently do not have any favorite products.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
