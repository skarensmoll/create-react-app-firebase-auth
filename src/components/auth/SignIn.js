import React from 'react';
import {GoogleButton} from 'components/UI'
import {signWithGoogle} from 'firebase-app/auth'

const SignIn = () => {
  return (
    <>
      <GoogleButton onClick={signWithGoogle}>
        Sign In With Google
      </GoogleButton>
    </>
  );
};

export default SignIn;
