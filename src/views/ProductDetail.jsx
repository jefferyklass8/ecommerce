import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";

import { StoreContext } from "../context/StoreContext";

const ProductDetail = () => {
  const { id } = useParams();
  // consume the context
  const { state, dispatch } = useContext(StoreContext);

  const product = state.products.find((p) => p.id === Number(id));

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <button
                onClick={() =>
                  dispatch({ type: "SET_FAVORITES", payload: product.id })
                }
                className="p-2 rounded-full hover:bg-gray-100"
              >
                {product.isFavorite ? (
                  <Heart className="w-6 h-6 text-red-500" />
                ) : (
                  <Heart className="w-6 h-6 text-gray-400" />
                )}
              </button>
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              Categoría: {product.category}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{product.rating.rate}</span>
              <span className="text-gray-400 ml-2">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
