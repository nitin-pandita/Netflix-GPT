import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const Header = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ------------------------------
  // Redux state
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  // we want onAuthState to change only once so we will use useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // it is kind of a listener which listens to the auth state change
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({ uid, email, displayName: displayName, photoURL: photoURL })
        );
        // if the user is signed in then we want to navigate to the browse page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //* this will unsubscribe the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8   bg-gradient-to-b from-black z-10 w-[100%] flex justify-between items-center ">
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
