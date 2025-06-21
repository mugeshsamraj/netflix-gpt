import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';
import { Login_Logo } from '../utils/contants';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth).catch((error) => {
      console.error('Sign out error:', error);
    });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center w-full">
      <img className="w-44" src={Login_Logo} alt="logo" />
      {user && (
        <div className="p-2 flex items-center gap-4">
          {user.photoURL && (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL}
                alt="user-img"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white font-bold">{user.displayName}</span>
            </div>
          )}
          <button
            onClick={handleSignout}
            className="font-bold text-white bg-red-600 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
