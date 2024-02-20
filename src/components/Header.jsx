import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { toggleGptSearch } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../redux/configSlice";
import { IoClose } from "react-icons/io5";
const Header = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // store
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  // ------------------------------
  // Functions
  const handleGptSearch = () => {
    // Toggle GPT
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

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
  // ------------------------------

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
    <div className="absolute px-8 bg-gradient-to-b from-black z-10 w-[100%] flex flex-col md:flex-row  justify-between items-center ">
      <h1 className="text-netflixRed font-bold text-[27px] md:text-[40px]  mb-5 md:mb-0">
        NETFLIX GPT
      </h1>
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:border-netflix-blue focus:ring-1 focus:ring-netflix-blue focus:ring-opacity-50 cursor-pointer "
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="
          bg-red-600 hover:bg-red-700 text-white font-semibold md:py-1  md:px-5 rounded-sm mr-8 shadow-md flex items-center text-[12px] px-2  justify-center mx-4
          "
          >
            {showGptSearch ? (
              <div className="flex justify-center items-center ">
                Close
                <IoClose />
              </div>
            ) : (
              <div className="flex">
                GPT Search{" "}
                <IoChatboxEllipsesOutline className="ml-3 text-[20px] md:text-[23px]" />
              </div>
            )}
          </button>
          <img src={user?.photoURL} className="w-12 rounded-full" alt="" />
          <button
            onClick={handleSignOut}
            className="text-white text-[12px] md:text-lg mx-3 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
