/* eslint-disable linebreak-style */
import React from 'react';
import '../index.scss';
import HeadingText from './Header/heading';
import ButtonContainer from './Header/buttons';

function HeaderContainer() {
  return (
    <div className="header-container">
      <HeadingText />
      <ButtonContainer />
    </div>
  );
}

export default HeaderContainer;
