/* eslint-disable linebreak-style */
import React from 'react';
import '../../../index.scss';
import logo from '../../../img/logo.png';

export default function StackBlitz() {
  return (
    <a href="https://stackblitz.com/run?file=src/data-source-backend-example.component.html">
      <button className="stack" type="button">
        <img className="image" src={logo} alt="" />
        <span>StackBlitz</span>
      </button>
    </a>
  );
}
