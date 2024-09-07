import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = () => {
    return JSON.parse(localStorage.getItem("cartItem")) || [];
  };
  const removeItem = (itemId) => {
    const cartItems = getCartItems();
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItem", JSON.stringify(updatedItems));
    console.log("Updated cart items:", updatedItems);
  };

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (itemId) => {
    removeItem(itemId);
    toast.success("product removed");
    setCartItems(getCartItems());
  };
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen pt-20 ">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-grow">
          <div className="w-full md:w-[60%]">
            <h1 className="text-2xl text-[#1E1E1E] font-barlow font-semibold my-6">
              An overview of your order
            </h1>
            <div className="bg-[#FAFAFA] rounded-md">
              {cartItems.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="flex justify-between gap- py-4 border-b-[1px] border-gray-300 px-4"
                  >
                    <div className="flex items-center">
                      <div className="flex justify-between items-center px-1 bg-[#DEDEDE] border-[1px] border-gray-300 rounded-md w-16 h-10">
                        <button className="text-xl">+</button>
                        <p className="text-xl">1</p>
                        <button className="text-xl">-</button>
                      </div>
                      <div className="flex">
                        <img className="h-20 w-20" src={item.imageUrl} alt="" />
                        <p className="text-sm text-[#434343] font-barlow font-bold">
                          {item.productName}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-end text-[#939393] text-sm"
                      >
                        X
                      </button>
                      <p className="text-black font-barlow font-semibold text-xl">
                        €{item.previousPrice}.00
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[35%]"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
