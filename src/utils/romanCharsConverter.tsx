// Convert individual number to roman numeral

const romanCharsConverter = (
  currNumber: number,
  currSingularChar: string,
  currHalfChar: string,
  currTenChar: string,
) => {
  let resultString = '';
  switch (currNumber) {
    case 0:
      break;
    case 1:
      resultString += currSingularChar;
      break;
    case 2:
      resultString += currSingularChar.repeat(2);
      break;
    case 3:
      resultString += currSingularChar.repeat(3);
      break;
    case 4:
      resultString += currSingularChar + currHalfChar;
      break;
    case 5:
      resultString += currHalfChar;
      break;
    case 6:
      resultString += currHalfChar + currSingularChar;
      break;
    case 7:
      resultString += currHalfChar + currSingularChar.repeat(2);
      break;
    case 8:
      resultString += currHalfChar + currSingularChar.repeat(3);
      break;
    case 9:
      resultString += currSingularChar + currTenChar;
      break;
    default:
      console.log('Error on first number');
  }

  return resultString;
};

export default romanCharsConverter;
