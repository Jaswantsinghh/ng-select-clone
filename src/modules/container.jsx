/* eslint-disable linebreak-style */
import React from 'react';
import Body from './body-container';
import HeaderContainer from './header-container';
import '../index.scss';

function Container() {
  return (
    <div className="container">
      <HeaderContainer />
      <Body />
    </div>
  );
}

export default Container;
