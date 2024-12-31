import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

import { StoreContext } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { dispatch } = useContext(StoreContext);

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch({ type: "SET_FAVORITES", payload: product.id });
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <button
        className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 hover:bg-white"
        onClick={handleFavoriteClick}
      >
        {product.isFavorite ? (
          <Heart className="w-6 h-6 text-red-500" />
        ) : (
          <Heart className="w-6 h-6 text-gray-400" />
        )}
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
