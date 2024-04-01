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
        } else if (i === 3) {
          // thousands
          resultString = 'M'.repeat(currNumber) + resultString;
        } else if (i >= 3) {
          // thousands
          resultString = 'M'.repeat(currNumber * (10 * (i - 3))) + resultString;
        }
      }

      // console.log(numbersArr)
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
        <button onClick={handleClick} disabled={!input}>
          Convert
        </button>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default App;
