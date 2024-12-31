import { createContext, useEffect, useReducer } from "react";

// context creation
export const StoreContext = createContext();

import React from "react";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload.map((product) => ({
          ...product,
          isFavorite: false,
        })),
      };

    case "SET_FAVORITES": {
      const favorites = state.products.map((p) => {
        if (p.id === Number(action.payload)) {
          p.isFavorite = !p.isFavorite;
        }
        return p;
      });

      return {
        ...state,
        products: favorites,
      };
    }
    default:
      return state;
  }
};

// component that shares the context
const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    dispatch({ type: "SET_PRODUCTS", payload: data });
    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
