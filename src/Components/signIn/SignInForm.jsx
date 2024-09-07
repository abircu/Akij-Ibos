import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Action from "../../common/actionButton/Action";
import DeviceLogin from "../signUp/DeviceLogin";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const authInfo = useContext(AuthContext);
  const { signIn } = authInfo;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openPassword, setOpenPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredintial = await signIn(email, password);
      toast.success("user login successully");
      navigate("/product");
      // reset
      email("");
      password("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className=" flex-1 my-2 md:my-48 mx-2 md:mx-28 bg-[#F5F5F5] rounded-lg p-3 md:px-10 md:py-12">
        <div className="flex flex-col  p-1 mb-14 ">
          <h3 className="text-2xl font-barlow font-semibold text-[#000000] mb-2">
            Welcome Back!
          </h3>
          <p className="font-barlow font-medium text-[#707070] text-sm">
            Enter your Credentials to access your account
          </p>
        </div>
        <form>
          {/* other */}
          <div className="mt-4">
            <div>
              <input
                type="email"
                id="email"
                name="eamil"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm  text-[#000000] placeholder:text-xs placeholder:text-[#707070] font-barlow "
              />
            </div>
            <div className="relative mt-6">
              <input
                type={openPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm  text-[#000000] placeholder:text-xs placeholder:text-[#707070] font-barlow "
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setOpenPassword(!openPassword)}
              >
                {openPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </div>
            </div>
            <div className="mt-2 flex items-center mb-6">
              <input type="checkbox" name="" id="" required />
              <p className="text-xs font-barlow font-medium">
                I agree to the Terms & Policy
              </p>
            </div>
          </div>
          <Action ActionText={"Sign Up"} handleFunction={handleSignIn} />
        </form>
        <DeviceLogin route={"/signup"} textAction={"Sign Up"} />
      </div>
    </>
  );
};

export default SignInForm;
