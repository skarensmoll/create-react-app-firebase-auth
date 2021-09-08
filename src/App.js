import React from 'react';
import Navigation from 'components/menu';
import {withAuth} from 'components/auth';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default withAuth(App);
