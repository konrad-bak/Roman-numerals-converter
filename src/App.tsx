import './App.css';

import React, { ChangeEvent, useState } from 'react';

import { Note } from './components/Note';
import romanNumeralsConverter from './utils/romanNumeralsConverter';

export type SystemTypes = 'Vinculum' | 'Apostrophus';

function App() {
  const [input, setInput] = useState<number | null>(null);
  const [submittedInput, setSubmittedInput] = useState<number | null>(null);
  const [result, setResult] = useState<string | React.ReactElement>('');
  const [system, setSystem] = useState<SystemTypes>('Vinculum');
  const [tooBig, setTooBig] = useState<boolean>(false);

  const handleRadioValueChange = (value: SystemTypes): void => {
    setSystem(value);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const parsedInput = inputValue !== '' ? parseInt(inputValue) : null; // Parse input or set to null if empty
    setInput(parsedInput);
  };

  const handleClick = () => {
    if (input != null) {
      setSubmittedInput(input);
      input > 3999999999 ? setTooBig(true) : setTooBig(false);

      setResult(romanNumeralsConverter(input, system));
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Convert to Roman numerals</h1>
        <p>Please input number:</p>
        <input
          value={input !== null ? input : ''}
          onChange={handleChangeInput}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          type="number"
        />
        <br />
        <div className="systems">
          <p>
            Choose <i>Roman Numerals System</i> for{' '}
            <b>
              large numbers( <i>3999+</i> )
            </b>
            <i>[default &quot;Vinculum&quot;]</i>:
          </p>
          <input
            type="radio"
            value="Vinculum" // This value should be 'Vinculum', not a string
            name="system"
            onChange={() => handleRadioValueChange('Vinculum')}
            checked={system === 'Vinculum'}
          />{' '}
          Vinculum{' '}
          <i>
            (ex. 4234 =&gt; <span className="top-line">IV</span> CC XXX IV)
          </i>
          <br />
          <input
            type="radio"
            value="Apostrophus" // This value should be 'Apostrophus', not a string
            name="system"
            onChange={() => handleRadioValueChange('Apostrophus')}
            checked={system === 'Apostrophus'}
          />{' '}
          Apostrophus <i>(ex. 4234 =&gt; ↀↁ CC XXX IV)</i>
        </div>
        <button className="button-action" onClick={handleClick} disabled={!input}>
          Convert
        </button>
        <p className="result">
          Submitted number: <span>{submittedInput}</span>
        </p>
        <p className="result">
          Result: <span className={tooBig ? 'red' : ''}>{result}</span>
        </p>
      </div>
      <hr />
      <Note />
    </div>
  );
}

export default App;
