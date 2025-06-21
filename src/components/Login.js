import React, { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Login_BG, Login_Logo } from '../utils/contants';

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const user = useSelector((store) => store.user);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      isSignInForm ? null : name.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: 'https://avatars.githubusercontent.com/u/97007639?v=4',
          });
        })
        .catch((error) => {
          setErrorMessage(error.code + ' ' + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        setErrorMessage(error.code + ' ' + error.message);
      });
    }
  };

  // ✅ Protect `/` - if already logged in, redirect to /browser
  if (user || auth.currentUser) {
    return <Navigate to="/browser" replace />;
  }

  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={Login_Logo} alt="logo" />
      </div>
      <div className="absolute">
        <img src={Login_BG} alt="bg" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black bg-opacity-70 my-36 right-0 left-0 text-white mx-auto"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-500"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-500"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-500"
          ref={password}
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? 'New to Netflix? Sign up now.'
            : 'Already registered? Sign in now.'}
        </p>
      </form>
    </div>
  );
}

export default Login;
