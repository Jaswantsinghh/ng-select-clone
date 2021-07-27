/* eslint-disable linebreak-style */
import React from 'react';
import Body from './bodyContainer';
import HeaderContainer from './headerContainer';
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
