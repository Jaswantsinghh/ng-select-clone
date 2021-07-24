/* eslint-disable linebreak-style */
import React from 'react';
import '../index.scss';
import Body from './body-container';
import HeaderContainer from './header-container';

function Container() {
  return (
    <div className="container">
      <HeaderContainer />
      <Body />
    </div>
  );
}

export default Container;
