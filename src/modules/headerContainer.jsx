/* eslint-disable linebreak-style */
import React from 'react';
import '../index.scss';
import logo from '../img/logo.png';

function HeadingText() {
  return (
    <span className="headingText">Backend data with async pipe</span>
  );
}

const str = '</>';
function CodeButton() {
  return (
    <a href="https://github.com/Jaswantsinghh/ng-select-clone/tree/main">
      <button className="codeButton" type="button">{str}</button>
    </a>

  );
}

function StackBlitz() {
  return (
    <a href="https://stackblitz.com/run?file=src/data-source-backend-example.component.html">
      <button className="stack" type="button">
        <img className="image" src={logo} alt="" />
        <span>StackBlitz</span>
      </button>
    </a>
  );
}

function ButtonContainer() {
  return (
    <div className="buttonContainer">
      <StackBlitz />
      <CodeButton />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="headerContainer">
      <HeadingText />
      <ButtonContainer />
    </div>
  );
}

export default HeaderContainer;
