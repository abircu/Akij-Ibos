import React from "react";
import Apple from "../../common/loginWith/apple";
import apple from "../../assets/login/apple.png";
import google from "../../assets/login/google.png";
import { Link } from "react-router-dom";

const DeviceLogin = ({ route, textAction }) => {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="w-full border-[1px] border-gray-300"></div>
        <div className="font-barlow font-medium text-xs text-[#000000]">or</div>
        <div className="w-full border-[1px] border-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center items-center my-6">
        <Apple Img={google} Text={"Sign in with Google"} />
        <Apple Img={apple} Text={"Sign in with Apple"} />
      </div>
      <p className="text-center text-sm font-barlow font-medium text-black">
        Have an account?
        <Link to={route}>
          <span className="text-[#0F3DDE]">{textAction}</span>
        </Link>
      </p>
    </div>
  );
};

export default DeviceLogin;
