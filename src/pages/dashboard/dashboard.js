/* eslint-disable no-unused-vars */
import React from 'react';
import {Profile} from 'components/auth';

/**
 * Creates a Dashboard component.
 * @return {Component} component.
 */
function Dashboard() {
  return (
    <div>
      <h2>Welcome!</h2>
      <Profile />
    </div>
  );
}

export default Dashboard;
