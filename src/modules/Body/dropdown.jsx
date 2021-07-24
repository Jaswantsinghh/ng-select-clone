import React, { useState } from 'react';
import '../../index.scss';
import Select from 'react-select';

const options = [
  { value: '5a15b13c36e7a7f00cf07cd', label: 'Karyn Wright' },
  { value: '5a15b13c663ea0af9ad0dae8', label: 'Mendoza Ruiz' },
  { value: '5a15b13cc9eeb36511d65acf', label: 'Rosales Russell' },
  { value: '5a15b13ca51b0aaf8a99c05a', label: 'Franklin James' },
  { value: '5a15b13cc3b9381ffcb1d6f7', label: 'Elsa Bradley' },
  { value: '5a15b13ce58cb6ff62c65164', label: 'Pearson Thompson' },
  { value: '5a15b13c90b95eb68010c86e', label: 'Ina Pugh' },
  { value: '5a15b13c2b1746e12788711f', label: 'Nguyen Elliot' },
  { value: '5a15b13c605403381eec5019', label: 'Mills Barnett' },
  { value: '5a15b13c67e2e6d1a3cd6ca5', label: 'Margaret Reynolds' },
  { value: '5a15b13c947c836d177aa85c', label: 'Yvette Navarro' },
  { value: '5a15b13c5dbbe61245c1fb73', label: 'Elisa Guzman' },
  { value: '5a15b13c38fd49fefea8db80', label: 'Jodie Bowman' },
  { value: '5a15b13c9680913c470eb8fd', label: 'Diann Booker' },
];

export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="drop-down">
      <Select
        placeholder="Select item"
        className="select-drop"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isClearable
      />
      <p className="caption">
        Selected:
        {selectedOption ? selectedOption.value : ' '}
      </p>
    </div>
  );
}
