import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { auth } from "../utils/firebase";
import checkValidData from "../utils/validate";
import Header from "./Header";
import { userImage } from "../utils/constants";

const Login = () => {
  //* hooks section

  // -------------------- --------------------
  // State section
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [error, setError] = useState(null);

  // -------------------- --------------------
  // Ref section
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  // -------------------- --------------------

  //* Function section
  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // validating the form data
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setError(message);

    if (message) return;

    //* SignUp and Sign In Logic
    if (!isSignedIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userImage,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + " " + errorCode);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = "User not found";
          setError(errorMessage + " " + errorCode);
        });
    }
  };

  return (
    <div className="h-screen w-[100%] overflow-x-hidden">
      <Header />
      <div className="absolute">
        <img
          className=" object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="bg-black absolute my-36 left-0 right-0 mx-auto w-3/12 p-12 rounded-lg bg-opacity-85 ">
        <h1 className="text-white text-3xl py-4 font-bold">
          {" "}
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full outline-none bg-[#696969] placeholder:text-white text-white rounded-sm"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-2 w-full outline-none bg-[#696969] placeholder:text-white text-white rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full outline-none bg-[#696969] placeholder:text-white text-white rounded-sm"
        />
        <p className="text-red-600 my-4">{error}</p>

        <button
          className=" my-2 bg-netflixRed text-white p-4 rounded-sm w-full"
          onClick={handleButtonClick}
        >
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
