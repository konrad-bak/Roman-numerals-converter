// Convert individual number to roman numeral

const individualRomanCharConverter = (
  currNumber: number,
  currSingularChar: string,
  currHalfChar: string,
  currTenChar: string,
): string => {
  let resultString = '';

  const romanNumerals: { [key: number]: string } = {
    0: '',
    1: currSingularChar,
    2: currSingularChar.repeat(2),
    3: currSingularChar.repeat(3),
    4: currSingularChar + currHalfChar,
    5: currHalfChar,
    6: currHalfChar + currSingularChar,
    7: currHalfChar + currSingularChar.repeat(2),
    8: currHalfChar + currSingularChar.repeat(3),
    9: currSingularChar + currTenChar,
  };

  resultString = romanNumerals[currNumber] ?? '';

  if (resultString === '') {
    console.error('Error on first number');
  }

  return resultString;
};

export default individualRomanCharConverter;
