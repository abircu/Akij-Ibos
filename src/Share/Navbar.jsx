import React, { useContext, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/login/icon.png";
import account from "../assets/navbar/Account.png";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const item = JSON.parse(localStorage.getItem("cartItem"));
  const itemCount = Array.isArray(item) ? item.length : 0;
  const handleLogOut = (e) => {
    e.preventDefault();
    if (user) {
      logOut();
      navigate("/");
      toast.success("logout successfully");
    } else {
      navigate("/");
    }
  };
  let Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/product" },
    { name: "Categories", link: "/" },
    { name: "Blog", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="shadow-md w-full fixed top-0 left-0 bg-white ">
        <div className="max-w-6xl mx-auto md:flex items-center justify-between py-4 md:px-10 px-7">
          {/* logo section */}
          <div className="flex justify-center items-center gap-1">
            <img className="w-[38px] h-[38px]" src={logo} alt="" />
            <p className="font-inter font-bold text-xl text-black">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </p>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 "
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex  md:justify-center md:flex-grow md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="md:ml-2 md:my-0 my-7 font-semibold font-barlow text-[#202020] py-1 px-5 bg-[#F8F8F8] rounded-[6px]">
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:ml-auto hidden md:block">
            <div className="flex  justify-center items-center gap-2">
              <div>
                <Link to="/addcart" className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
              <img className="w-10 h-10" src={account} alt="" />
              {user && (
                <button
                  className="text-xl font-barlow  font-medium text-[#202020]"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
