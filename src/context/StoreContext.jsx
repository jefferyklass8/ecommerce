import React, { createContext, useEffect, useReducer } from "react";

// initial state
const initialState = {
  products: [],
  loading: true,
};

// action types
const SET_LOADING = "SET_LOADING";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_FAVORITES = "SET_FAVORITES";

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.map((product) => ({
          ...product,
          isFavorite: false,
        })),
      };
    case SET_FAVORITES:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === Number(action.payload)
            ? { ...p, isFavorite: !p.isFavorite }
            : p
        ),
      };
    default:
      return state;
  }
};

// context creation
export const StoreContext = createContext({
  state: initialState,
  dispatch: () => null,
});

// context provider component
const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch({ type: SET_PRODUCTS, payload: data });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
