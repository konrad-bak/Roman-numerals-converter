import './App.css';

import React, { ChangeEvent, useState } from 'react';

import romanCharsConverter from './utils/romanCharsConverter';

export type SystemTypes = 'Vinculum' | 'Apostrophus';

function App() {
  const [input, setInput] = useState<number | null>(null);
  const [submittedInput, setSubmittedInput] = useState<number | null>(null);
  const [result, setResult] = useState<string>('');
  const [system, setSystem] = useState<SystemTypes>('Vinculum');

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
      setResult(romanCharsConverter(input, system));
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
            value="Vinculum"
            name="system"
            onChange={(e) => handleRadioValueChange(e.target.value as SystemTypes)}
            checked
          />{' '}
          Vinculum <i>(ex. 1234 =&gt; IV^ C XX V)</i>
          <br />
          <input
            type="radio"
            value="Apostrophus"
            name="system"
            onChange={(e) => handleRadioValueChange(e.target.value as SystemTypes)}
          />{' '}
          Apostrophus <i>(ex. 4234 =&gt; CIↃIↃↃ C XX V)</i>
        </div>
        <button className="button-action" onClick={handleClick} disabled={!input}>
          Convert
        </button>
        <p className="result">
          Submitted number: <span>{submittedInput}</span>
        </p>
        <p className="result">
          Result: <span>{result}</span>
        </p>
      </div>
      <hr />
      <div className="note">
        <h2>Note</h2>
        <p>For numbers up to 3999, we Romans generally used:</p>
        <table className="table">
          <caption>Individual decimal places</caption>
          <tbody>
            <tr>
              <th></th>
              <th>Thousands</th>
              <th>Hundreds</th>
              <th>Tens</th>
              <th>Units</th>
            </tr>
            <tr>
              <td>1</td>
              <td>M</td>
              <td>C</td>
              <td>X</td>
              <td>I</td>
            </tr>
            <tr>
              <td>2</td>
              <td>MM</td>
              <td>CC</td>
              <td>XX</td>
              <td>II</td>
            </tr>
            <tr>
              <td>3</td>
              <td>MMM</td>
              <td>CCC</td>
              <td>XXX</td>
              <td>III</td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td>CD</td>
              <td>XL</td>
              <td>IV</td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td>D</td>
              <td>L</td>
              <td>V</td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td>DC</td>
              <td>LX</td>
              <td>VI</td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td>DCC</td>
              <td>LXX</td>
              <td>VII</td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
              <td>DCCC</td>
              <td>LXXX</td>
              <td>VIII</td>
            </tr>
            <tr>
              <td>9</td>
              <td></td>
              <td>CM</td>
              <td>XC</td>
              <td>IX</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <p>
          But when numbers exceeded that, it was nessesary to invent some simplification.
          It was nessesary to avoid adding more letters to system or ending up with
          something like that:
        </p>
        <p>
          <i>{'15486 => MMMMMMMMMMMMMMMCDLXXXVI'}</i>
        </p>
        <p>
          One of the working solutions, that Romans have developed, is <i>Apostrophus</i>:
        </p>
        <p>
          {`Using the apostrophus method, 500 is written as IↃ, while 1,000 is written as CIↃ. This system of encasing numbers to denote thousands (imagine the Cs and Ↄs as parentheses) had its origins in Etruscan numeral usage.

          Each additional set of C and Ↄ surrounding CIↃ raises the value by a factor of ten: CCIↃↃ represents 10,000 and CCCIↃↃↃ represents 100,000. Similarly, each additional Ↄ to the right of IↃ raises the value by a factor of ten: IↃↃ represents 5,000 and IↃↃↃ represents 50,000. Numerals larger than CCCIↃↃↃ do not occur.`}
        </p>

        <p>
          This topic extends in the wikipedia article, but for simplicity I&apos;ve
          handled larger numbers in this manner:
        </p>

        <ul className="list">
          <li>
            <b>IↃ</b> = 500
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>CIↃ</b> = 1,000
          </li>
          <li>
            <b>IↃↃ</b> = 5,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>CCIↃↃ</b> = 10,000
          </li>
          <li>
            <b>IↃↃↃ</b> = 50,000 &nbsp;&nbsp;&nbsp;&nbsp;<b>CCCIↃↃↃ</b> = 100,000
          </li>
        </ul>

        <p>
          All info and descriptions come from{' '}
          <a
            href="https://en.wikipedia.org/wiki/Roman_numerals"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia article
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
