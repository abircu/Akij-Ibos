import React, { useEffect, useState } from "react";
import basket from "../assets/product/added.png";

const Product = () => {
  // const { item, setItem } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // console.log("item", item);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);
  const savedItem = JSON.parse(localStorage.getItem("cartItem"));
  console.log("sabed item ", savedItem);
  // add to card product
  const addToCart = (product) => {
    if (savedItem) {
      console.log("already exist ", savedItem);
      console.log("item will be added ", product);
      const modifiedItem = [...savedItem, product];
      localStorage.setItem("cartItem", JSON.stringify(modifiedItem));
    } else {
      console.log("new product : ", product);
      const item = [product];
      localStorage.setItem("cartItem", JSON.stringify(item));
    }
  };

  const filtertedProduct = selectedProduct
    ? product.filter((prod) => prod.category === selectedProduct)
    : product;
  const getButtonClass = (category) => {
    return selectedProduct === category
      ? "bg-black text-white"
      : "bg-transparent text-black";
  };
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row pt-4">
        <div className=" w-full md:w-1/5 flex flex-row gap-3 sm:justify-center md:mt-4 mt-2 md:pr-5 pr-0 md:justify-start md:items-start sm:items-center md:flex-col">
          <div className="md:py-2  py-block md:border-b-[1px] md:border-gray-300  border-block">
            {" "}
            <button
              onClick={() => setSelectedProduct("Rocking chair")}
              className={` w-full md:border-b-2 md:border-gray-300 border-none  text-xl  font-barlow font-semibold px-4 py-2 rounded-lg ${getButtonClass(
                "Rocking chair"
              )}`}
            >
              Rocking chair
            </button>
          </div>
          <div className="md:py-2  py-block md:border-b-[1px] md:border-gray-300  border-block">
            <button
              onClick={() => setSelectedProduct("Side chair")}
              className={` w-full md:border-b-2 md:border-gray-300 border-none  text-xl  font-barlow font-semibold px-4 py-2 rounded-lg ${getButtonClass(
                "Side chair"
              )}`}
            >
              side chair
            </button>
          </div>
          <div className="">
            <button
              onClick={() => setSelectedProduct("Lounge chair")}
              className={` w-full md:border-b-2 md:border-gray-300 border-none  text-xl  font-barlow font-semibold px-4 py-2 rounded-lg ${getButtonClass(
                "Lounge chair"
              )}`}
            >
              Lounge chair
            </button>
          </div>
        </div>
        <div className="w-full  md:w-[80%] border-l-2 border-gray-300 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-10 gap-2">
          {filtertedProduct.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-64 p-3 border-[1px] border-gray-300 rounded-lg mb-2"
            >
              <div className="bg-[#F2F2F2] rounded-lg">
                <img src={product.imageUrl} alt="" />
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-barlow font-semibold text-[#343434]">
                  {product.productName}
                </h1>
                <div className="flex my-4 items-center justify-between">
                  <div className="text-xl font-barlow font-medium  text-[#343434]">
                    €{product.currentPrice}.00
                  </div>
                  <div className="text-xl font-barlow font-medium line-through text-[#ABABAB]">
                    €{product.previousPrice}.00
                  </div>
                  <div className="uppercase text-xl font-barlow font-medium  text-[#B92E2E]">
                    {product.offer}
                  </div>
                </div>
                <p className="text-xs font-barlow text-[#838383]">
                  {product.productDescription}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className=" w-full flex items-center gap-2 justify-center bg-black text-sm font-barlow font-semibold text-[#FFFFFF] mt-4 py-2 rounded-lg"
                >
                  <img className="" src={basket} alt="" />{" "}
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
