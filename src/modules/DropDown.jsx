/* eslint-disable linebreak-style */
import {
  React, useState, useRef,
} from 'react';
import useOutsideClick from './useOutsideClick';
import '../index.scss';

const options = [
  { id: '5a15b13c36e7a7f00cf07cd', label: 'Karyn Wright' },
  { label: 'Rochelle Russell', isdisabled: 'true' },
  { id: '5a15b13c663ea0af9ad0dae8', label: 'Mendoza Ruiz' },
  { id: '5a15b13cc9eeb36511d65acf', label: 'Rosales Russell' },
  { label: 'Marquez Nolan', isdisabled: 'true' },
  { id: '5a15b13ca51b0aaf8a99c05a', label: 'Franklin James' },
  { id: '5a15b13cc3b9381ffcb1d6f7', label: 'Elsa Bradley' },
  { id: '5a15b13ce58cb6ff62c65164', label: 'Pearson Thompson' },
  { id: '5a15b13c90b95eb68010c86e', label: 'Ina Pugh' },
  { id: '5a15b13c2b1746e12788711f', label: 'Nguyen Elliot' },
  { id: '5a15b13c605403381eec5019', label: 'Mills Barnett' },
  { id: '5a15b13c67e2e6d1a3cd6ca5', label: 'Margaret Reynolds' },
  { id: '5a15b13c947c836d177aa85c', label: 'Yvette Navarro' },
  { id: '5a15b13c5dbbe61245c1fb73', label: 'Elisa Guzman' },
  { id: '5a15b13c38fd49fefea8db80', label: 'Jodie Bowman' },
  { id: '5a15b13c9680913c470eb8fd', label: 'Diann Booker' },
];

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState({ label: '' });
  const [placeHolder, setPlaceHolder] = useState(options[0]);
  const [classInput, setClassInput] = useState('ddHeaderTitleBold');
  const classButton = 'ddButton';
  const classButtonSelected = 'ddButtonSelected';
  const toggle = () => setOpen(!open);
  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpen(false);
  });
  return (
    <>
      <div ref={ref} className="ddWrapper">
        <div className="ddInputWrapper">
          <div className="ddHeaderTitle">
            <input
              placeholder={placeHolder.label}
              className={classInput}
              onFocus={() => setOpen(true)}
              onChange={(e) => setSelection({ label: e.target.value })}
            />
          </div>
          <button
            className="ddClear"
            type="button"
            onClick={() => {
              setSelection({ label: '' });
              setPlaceHolder({ label: 'Select item', id: ' ' });
              setClassInput('ddHeaderTitleGray');
            }}
          >
            {placeHolder.label !== 'Select item' ? '×' : ''}
          </button>
          <div
            tabIndex={0}
            className="ddHeader"
            role="button"
            onKeyPress={() => toggle()}
            onClick={() => toggle()}
          >
            <div className="ddHeaderAction">
              <span className="ddClose">{open ? '▲' : '▼'}</span>
            </div>
          </div>
        </div>
        <div>
          <p className="caption">
            Selected:
            {` ${placeHolder.id}`}
          </p>
        </div>
        {open && (
          <ul className="ddList">
            {options.filter((item) => item.label.toLowerCase()
              .indexOf(selection.label.toLowerCase()) !== -1)
              .map((item) => (
                <li className="ddListItem" key={item.id}>
                  <button
                    className={item.label === placeHolder.label
                      ? classButtonSelected : classButton}
                    type="button"
                    onClick={() => {
                      const selectedValue = item;
                      setPlaceHolder(selectedValue);
                      setOpen(false);
                      setClassInput('ddHeaderTitleBold');
                    }}
                    disabled={!!item.isdisabled}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}
