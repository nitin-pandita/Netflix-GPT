import React from "react";
import { FaUser } from "react-icons/fa6";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center ">
      <h1 className="text-netflixRed font-bold text-[40px]">NETFLIX GPT</h1>
      {user && (
        <div className="flex">
          <img src={user?.photoURL} className="w-12 rounded-full" alt="" />
          <button onClick={handleSignOut} className="text-white  text-lg mx-3 ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
