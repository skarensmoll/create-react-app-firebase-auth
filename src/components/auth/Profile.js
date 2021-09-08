import React, { useContext } from 'react';
import { UserContext } from 'contexts/user';
import {logOut} from 'firebase-app/auth';

/**
 * SignOut button.
 * @param {object} user
 * @return {HTMLElement}
 */
const Profile = () => {
  const { user: { displayName, photoURL } } = useContext(UserContext)
  return (
    <>
      <div>
        <div>
          <button onClick={logOut}>Sign Out</button>
          <p>{displayName}</p>
          <img src={photoURL} alt='user profile' />
        </div>
      </div>
    </>
  );
};

export default Profile;


