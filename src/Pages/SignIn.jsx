import React from "react";
import SignInForm from "../Components/signIn/SignInForm";
import HeroLeft from "../Components/signUp/HeroLeft";

const SignIn = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="flex flex-col-reverse md:flex-row">
        <SignInForm />
        <HeroLeft />
      </div>
    </div>
  );
};

export default SignIn;
