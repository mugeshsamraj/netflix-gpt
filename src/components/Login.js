import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    // validate function from formData
   const message = checkValidData(
  email.current?.value,
  password.current?.value,
  isSignInForm ? null : name.current?.value
);
    setErrorMessage(message)
   console.log(message)
    if(message) return;
    if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   updateProfile(user, {
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/97007639?u=ba9d29c8a7da91f92e04e9066404bb6cf7dbaf8c&v=4"
}).then(() => {
  const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL,
      }))
   navigate('/browser')
}).catch((error) => {
  setErrorMessage('/browser')
});
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage)
    console.log(error)
    // ..
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value,)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode,"",errorMessage)
  });
    }
   
  }
  
  return (
    <div>
      {/* <Header /> */}
       <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
    </div>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg' alt='image' />
      </div>
      <form onClick={(e)=> e.preventDefault()} className='absolute w-3/12 p-12 bg-black ab mx-auto bg-opacity-70 my-36 right-0 left-0 text-white'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? null : <input type='name' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-500' ref={name} />}
        <input type='text' placeholder='Email Address' ref={email} className='p-4 my-2 w-full bg-gray-500 text-black-50'/>
        <input type='password' placeholder='Password' ref={password} className='p-4 my-2 w-full bg-gray-500' />
        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-4 my-6 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now." : "Already Registered Sign In Now"}
          
          </p>
      </form>
    </div>
  )
}

export default Login
