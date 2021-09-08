import React from 'react';
import useUser from 'hooks/user.hook';
import {Loading} from 'components/UI';
import {SignIn} from 'components/auth';
import {UserContext} from 'contexts/user';

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const [user, isLoading] = useUser();
    return (
      <UserContext.Provider value={{user}}>
        {isLoading && <Loading />}
        {(!isLoading && user) && <WrappedComponent {...props} />}
        {(!isLoading && !user) && <SignIn />}
      </UserContext.Provider>
    );
  };
};

export default withAuthentication;
