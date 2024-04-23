import { SystemTypes } from '../App';
import individualRomanCharConverter from './individualRomanCharConverter';

const romanCharsConverter = (input: number, system: SystemTypes) => {
  const numbersArr = input?.toString().split('');
  const arrLength = numbersArr.length;
  const isLarge = input > 3999 ? true : false;

  let resultString: string | React.ReactElement = '';

  for (let i = 0; i <= arrLength - 1; i++) {
    const currArrPos = arrLength - 1 - i;
    const currNumber = parseInt(numbersArr[currArrPos]);
    if (currNumber === 0) continue;

    let currSingularChar = '';
    let currHalfChar = '';
    let currTenChar = '';

    if (input > 3999999999) return (resultString = 'Too big (over 3,999,999,999)');
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
      const currRomanChars = individualRomanCharConverter(
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
      if (i === 3) {
        resultString = ' ' + resultString;
      }

      if (system === 'Vinculum') {
        // Large numbers (over 3999) - Vinculum System
        let lineClass = 'top-line';

        if (i < 9) {
          if (i === 3) {
            //singular numerals
            currSingularChar = 'I';
            currHalfChar = 'V';
            currTenChar = 'X';
          } else if (i === 4) {
            // tens
            currSingularChar = 'X';
            currHalfChar = 'L';
            currTenChar = 'C';
          } else if (i === 5) {
            // hundos
            currSingularChar = 'C';
            currHalfChar = 'D';
            currTenChar = 'M';
          } else if (i >= 6) {
            lineClass = 'top-line-double';
            if (i === 6) {
              // thundos (single numerals with double line)
              currSingularChar = 'I';
              currHalfChar = 'V';
              currTenChar = 'X';
            } else if (i === 7) {
              // tens thundos (with double line)
              currSingularChar = 'X';
              currHalfChar = 'L';
              currTenChar = 'C';
            } else if (i === 8) {
              // hundos thundos (with double line)
              currSingularChar = 'C';
              currHalfChar = 'D';
              currTenChar = 'M';
            }
          }

          const currRomanChars = individualRomanCharConverter(
            currNumber,
            currSingularChar,
            currHalfChar,
            currTenChar,
          );

          resultString = (
            <>
              <span className={lineClass}>{currRomanChars}</span>
              {resultString}
            </>
          );
        } else {
          lineClass = 'top-line-double';
          resultString = (
            <>
              <span className={lineClass}>{'M'.repeat(currNumber)}</span>
              {resultString}
            </>
          );
        }
      } else {
        // Large numbers (over 3999) - Apostrophus System
        const multiplier = i - 2;

        if (multiplier === 1) {
          currSingularChar = 'ↀ';
          currHalfChar = 'ↁ';
          currTenChar = 'ↂ';
        } else if (multiplier === 2) {
          currSingularChar = 'ↂ';
          currHalfChar = 'ↇ';
          currTenChar = 'ↈ';
        } else {
          currSingularChar = 'C'.repeat(multiplier) + 'I' + 'Ↄ'.repeat(multiplier);
          currHalfChar = 'I' + 'Ↄ'.repeat(multiplier + 1);
          currTenChar = 'C'.repeat(multiplier + 1) + 'I' + 'Ↄ'.repeat(multiplier + 1);
        }

        const currRomanChars = individualRomanCharConverter(
          currNumber,
          currSingularChar,
          currHalfChar,
          currTenChar,
        );
        resultString = currRomanChars + ' ' + resultString;
      }
    }
  }

  return resultString;
};

export default romanCharsConverter;
