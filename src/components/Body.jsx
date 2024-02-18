import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
const Body = () => {
  // hooks
  const dispatch = useDispatch();

  // router
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // we want onAuthState to change only once so we will use useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // it is kind of a listener which listens to the auth state change
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({ uid, email, displayName: displayName, photoURL: photoURL })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
