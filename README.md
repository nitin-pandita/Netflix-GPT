# Netflix GPT - ( Project )

We will be building a Netflix using the Chat GPT API.

Firstly let’s set up the project using the command called 

```jsx
npx create-react-app netflix-gpt
```

When we run this command we will get all the bundlers, test files, and packages and we installed them manually in the beginning. In “**create-react-app**” we use **webpack** for hosting and compiling

Step2:  Configure the Tailwind CSS into our Application for Styling

Step3: Not let’s see what features we need to add to our application

For LogOut User

- Login/Logout Page

For the Login User

1. Header
2. Main Movie
    1. Trailer in background
    2. Title and Description
    3. Play now button
    4. Movie Suggestion
    5. Movie List (vertical scroll)

- Netflix GPT
    - Search bar
    - Movie Suggestion
    

Configuration of the routers for routing.

```jsx
const Body = () => {
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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
```

Let’s first build our Login Page and it will look like this:

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled.png)

Now let’s create a signup page, by making use of useState we can use this signed form to build our signup form

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled%201.png)

```jsx
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
```

In form we need validation. So in React, we have a library called “**Forkmik**”

But we will be making it from Scratch.

Let’s create a **validation.js**

```jsx
const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isEmailValid) return "Email is not Valid";
  if (isPasswordValid) return "Password is not Valid";
};

export default checkValidData;
```

Now we can use “useState” for each input or we can use a thing called “**useRef** ”

Inside this we will use a logic :

```jsx
const handleButtonClick = (e) => {
    e.preventDefault();
    // validating the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setError(message);
  };
```

useRef gives us an object that will contain the value and we can use that value to validate the data.

## Let’s move to the auth part:

For authentication, we will be using Google Firebase 

Sign Up and Sign In User Account:

```jsx
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
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = "User not found";
          setError(errorMessage + " " + errorCode);
        });
    }
```

All this logic is coming from the F**irebase**

## Setting up the Redux Store:

We need to install the redux toolkit and react-redux

```jsx
npm i @reactjs/react
```

```jsx
npm i react-redux
```

Creating appStore

```jsx
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default appStore;
```

Creating user Slice

```jsx
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
```

Using it in the Application:

```jsx
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./redux/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
```

- Bug fixing of sign-up user display and profile picture update
- If the user is not logged in Redirect to /browse the page
- Unsubscribe to the onauthStateChange Callback.
- I added hardcoded values to the constants file.

## [Movie Data](https://avatars.githubusercontent.com/u/6759280?v=4):

Using the TMDB we have got the movie data

- Register TMDB API create an app and get access token
- Get data from TMDB now playing movie list API

## Created our MainContainer:

- Setting the data into our redux store and fetching it on the mainContainer
- Fetch Data and Trailer
- Updating the store with the redux data
- Enabling the YouTube video and making it **autoplay** and **mute**
- Tailwind CSS class for styling

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled%202.png)

## Building Secondary Component:

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled%203.png)

## Building the NETFLIX GPT:

Adding GPT Search Feature

- Added GPT Search Bar
- ( **Feature** ) Mulit Lang feature in our App

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled%204.png)

- Added the Open Ai  Api to the store.
- Hidde the API keys

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled%205.png)

- Made it responsive for mobile and Desktop

![Untitled](Netflix%20GPT%20-%20(%20Project%20)%20fde1f903ca77430290c0942315999088/Untitled%206.png)