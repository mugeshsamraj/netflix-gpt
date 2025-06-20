import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  console.log(user, "user");

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center w-full'>
      <img
        className='w-44'
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className='p-2 flex items-center'>
          {user.photoURL && (
            <div>
            <img
              src={user.photoURL}
              alt="user-img"
              className='w-10 h-10 rounded-full mr-3'
            />
            <span>{user.displayName}</span>
            </div>
          )}
          <button className='font-bold text-white' onClick={handleSignout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
