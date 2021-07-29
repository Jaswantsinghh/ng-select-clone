/* eslint-disable linebreak-style */
import React from 'react';
import Dropdown from './DropDown';
import '../index.scss';

function ContentBody() {
  return (
    <p className="contentText">
      Most common case is showing data from backend API and with ng-select this is extremely
      simple since you can bind directly
      to observable when using angular
      {' '}
      <b>| async</b>
      {' '}
      pipe
    </p>
  );
}

function Body() {
  return (
    <div className="bodyContainer">
      <ContentBody />
      <Dropdown />
    </div>
  );
}

export default Body;
