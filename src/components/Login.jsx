import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className="h-screen w-[100%]">
      <Header />
      <div className="absolute">
        <img
          className=" object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="bg-black absolute my-36 left-0 right-0 mx-auto w-3/12 p-12 rounded-sm bg-opacity-85 ">
        <h1 className="text-white text-3xl py-4 font-bold">
          {" "}
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full outline-none bg-[#696969] placeholder:text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full outline-none bg-[#696969] placeholder:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full outline-none bg-[#696969] placeholder:text-white"
        />
        <button className=" my-2 bg-netflixRed text-white p-4 rounded-sm w-full">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignedIn ? (
          <p
            className="text-white text-center cursor-pointer"
            onClick={handleSignIn}
          >
            New to Netflix?{" "}
            <span className="text-netflixRed font-bold">| Sign up now.</span>
          </p>
        ) : (
          <p
            className="text-netflixRed font-bold text-center cursor-pointer"
            onClick={handleSignIn}
          >
            Already a User
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
