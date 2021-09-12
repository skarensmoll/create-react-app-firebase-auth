import React from 'react';
import {GoogleButton} from 'components/UI'
import {signWithGoogle} from 'firebase-app/auth'
import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <section className={styles.signIn}>
      <GoogleButton onClick={signWithGoogle}>
        Sign In With Google
      </GoogleButton>
    </section>
  );
};

export default SignIn;
