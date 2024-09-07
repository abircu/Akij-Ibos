import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  // Initialize state from local storage, parsing JSON if it exists
  const [item, setItem] = useState(() => {
    const savedItem = localStorage.getItem("cartItem");
    return savedItem ? JSON.parse(savedItem) : []; // Initialize as empty array if nothing is saved
  });

  // Update local storage whenever `item` changes
  //   useEffect(() => {
  //     localStorage.setItem("cartItem", JSON.stringify(item));
  //   }, [item]);

  // Provide context value
  return (
    <CartContext.Provider value={{ item, setItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
