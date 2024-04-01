import './App.css';

import React, { useState } from 'react';

import romanCharsConverter from './utils/romanCharsConverter';

function App() {
  const [input, setInput] = useState<number>();
  const [result, setResult] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(parseInt(e.target.value));
  };

  const handleClick = () => {
    if (input) {
      const numbersArr = input?.toString().split('');
      const arrLength = numbersArr.length;
      const isLarge = input > 3999 ? true : false;

      let resultString = '';

      for (let i = 0; i <= arrLength - 1; i++) {
        const currArrPos = arrLength - 1 - i;
        const currNumber = parseInt(numbersArr[currArrPos]);
        console.log(currNumber);

        let currSingularChar = '';
        let currHalfChar = '';
        let currTenChar = '';

        if (i <= 2) {
          if (i === 0) {
            //singular numerals
            currSingularChar = 'I';
            currHalfChar = 'V';
            currTenChar = 'X';
          } else if (i === 1) {
            // tens
            currSingularChar = 'X';
            currHalfChar = 'L';
            currTenChar = 'C';
          } else if (i === 2) {
            // hundos
            currSingularChar = 'C';
            currHalfChar = 'D';
            currTenChar = 'M';
          }
          const currRomanChars = romanCharsConverter(
            currNumber,
            currSingularChar,
            currHalfChar,
            currTenChar,
          );
          resultString = currRomanChars + resultString;
        } else if (!isLarge) {
          if (i === 3) {
            // thousands (up to 3)
            resultString = 'M'.repeat(currNumber) + ' ' + resultString;
          }
        } else {
          // thousands (over 3999)

          if (i === 3) {
            resultString = ' ' + resultString;
          }
          const multiplier = i - 2;

          currSingularChar = 'C'.repeat(multiplier) + 'I' + 'Ↄ'.repeat(multiplier);
          currHalfChar = 'I' + 'Ↄ'.repeat(multiplier + 1);
          currTenChar = 'C'.repeat(multiplier + 1) + 'I' + 'Ↄ'.repeat(multiplier + 1);

          const currRomanChars = romanCharsConverter(
            currNumber,
            currSingularChar,
            currHalfChar,
            currTenChar,
          );
          resultString = currRomanChars + resultString;
        }
      }

      setResult(resultString);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Convert to Roman numerals</h1>
        <p>Please input number:</p>
        <input value={input} onChange={handleChangeInput} type="number" />
        <br />
        <button className="button-action" onClick={handleClick} disabled={!input}>
          Convert
        </button>
        <p className="result">
          Result: <span>{result}</span>
        </p>
      </div>
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
          This topic extends in the wikipedia article, but for simplicity I've handled
          larger numbers in this manner:
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
