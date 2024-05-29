import { SystemTypes } from '../App';
import individualRomanCharConverter from './individualRomanCharConverter';

const MAX_SMALL_NUMBER = 3999;
const MAX_NUMBER = 3999999999;
const TOO_BIG_MESSAGE = 'Too big (over 3,999,999,999)';

const getRomanCharacters = (position: number): [string, string, string] => {
  switch (position) {
    case 0:
      return ['I', 'V', 'X'];
    case 1:
      return ['X', 'L', 'C'];
    case 2:
      return ['C', 'D', 'M'];
    default:
      return ['', '', ''];
  }
};

const getLargeRomanCharacters = (multiplier: number): [string, string, string] => {
  if (multiplier === 1) return ['ↀ', 'ↁ', 'ↂ'];
  if (multiplier === 2) return ['ↂ', 'ↇ', 'ↈ'];

  return [
    'C'.repeat(multiplier) + 'I' + 'Ↄ'.repeat(multiplier),
    'I' + 'Ↄ'.repeat(multiplier + 1),
    'C'.repeat(multiplier + 1) + 'I' + 'Ↄ'.repeat(multiplier + 1),
  ];
};

const processSmallNumber = (
  currNumber: number,
  position: number,
  resultString: string | React.ReactElement,
): string => {
  const [singular, half, ten] = getRomanCharacters(position);
  const currRomanChars = individualRomanCharConverter(currNumber, singular, half, ten);
  return currRomanChars + resultString;
};

const processLargeNumberVinculum = (
  currNumber: number,
  position: number,
  resultString: string | React.ReactElement,
): React.ReactElement => {
  const [singular, half, ten] = getRomanCharacters(position % 3);
  const lineClass = position >= 6 ? 'top-line-double' : 'top-line';
  const currRomanChars = individualRomanCharConverter(currNumber, singular, half, ten);

  return (
    <>
      <span className={lineClass}>{currRomanChars}</span>
      {resultString}
    </>
  );
};

const processLargeNumberApostrophus = (
  currNumber: number,
  position: number,
  resultString: string | React.ReactElement,
): string => {
  const multiplier = position - 2;
  const [singular, half, ten] = getLargeRomanCharacters(position, multiplier);
  const currRomanChars = individualRomanCharConverter(currNumber, singular, half, ten);

  return currRomanChars + ' ' + resultString;
};

const romanCharsConverter = (
  input: number,
  system: SystemTypes,
): string | React.ReactElement => {
  if (input > MAX_NUMBER) return TOO_BIG_MESSAGE;

  const numbersArr = input.toString().split('');
  const arrLength = numbersArr.length;
  const isLarge = input > MAX_SMALL_NUMBER;

  let resultString: string | React.ReactElement = '';

  for (let i = 0; i < arrLength; i++) {
    const currArrPos = arrLength - 1 - i;
    const currNumber = parseInt(numbersArr[currArrPos]);
    if (currNumber === 0) continue;

    if (i <= 2) {
      resultString = processSmallNumber(currNumber, i, resultString);
    } else if (!isLarge) {
      if (i === 3) resultString = 'M'.repeat(currNumber) + ' ' + resultString;
    } else {
      if (i === 3) resultString = ' ' + resultString;

      if (system === 'Vinculum') {
        resultString = processLargeNumberVinculum(currNumber, i, resultString);
      } else {
        resultString = processLargeNumberApostrophus(currNumber, i, resultString);
      }
    }
  }

  return resultString;
};

export default romanCharsConverter;
