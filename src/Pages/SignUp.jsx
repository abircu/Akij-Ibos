import React from "react";
import SignForm from "../Components/signUp/SignForm";
import HeroLeft from "../Components/signUp/HeroLeft";

const SignUp = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-10">
      <div className="flex flex-col-reverse md:flex-row">
        <SignForm />
        <HeroLeft />
      </div>
    </div>
  );
};

export default SignUp;
