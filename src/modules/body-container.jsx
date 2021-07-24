/* eslint-disable linebreak-style */
import React from 'react';
import '../index.scss';
import ContentBody from './Body/content';
import DropDown from './Body/dropdown';

function Body() {
  return (
    <div className="bodyContainer">
      <ContentBody />
      <DropDown />
    </div>
  );
}

export default Body;
