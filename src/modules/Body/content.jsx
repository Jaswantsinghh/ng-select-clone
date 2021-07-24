import React from 'react';
import '../../index.scss';

export default function ContentBody() {
  return (
    <p className="contentText">
      Most common case is showing data from backend API and with ng-select this is ex
      tremely simple since you can bind directly .
      to observable when using angular
      {' '}
      <b>| async</b>
      {' '}
      pipe
    </p>
  );
}
