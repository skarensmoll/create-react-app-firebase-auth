/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from 'firebase-app';

const useUser = () => {
  const [isLoading, setLoading] = useState(true);
  const [userInfo, setUser] = useState(null);

  useEffect(() =>{
    let authObserver;

    try {
      authObserver = onAuthStateChanged(firebaseAuth, (user) => {
        setLoading(false);
        setUser(user);
      });
    } catch (e) {
      setLoading(false);
      setUser(null);
    }

    return () => authObserver();
  }, []);

  return [userInfo, isLoading];

};

export default useUser;
