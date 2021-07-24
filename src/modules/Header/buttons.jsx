/* eslint-disable linebreak-style */
import React from 'react';
import '../../index.scss';
import CodeButton from './Buttons/code';
import StackBlitz from './Buttons/stackblitz';

export default function ButtonContainer() {
  return (
    <div className="buttonContainer">
      <StackBlitz />
      <CodeButton />
    </div>
  );
}
