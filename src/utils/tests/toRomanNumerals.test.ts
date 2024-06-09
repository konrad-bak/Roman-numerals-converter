import { describe, expect, it } from 'vitest';

import toRomanNumerals from '../toRomanNumerals';

describe('Convert to roman numerals in Vinculum System', () => {
  it('convert 1 to "I"', () => {
    expect(toRomanNumerals(1, 'Vinculum')).toBe('I');
  });

  it('convert 15 to "XV"', () => {
    expect(toRomanNumerals(15, 'Vinculum')).toBe('XV');
  });

  it('convert 3999 to "XV"', () => {
    expect(toRomanNumerals(3999, 'Vinculum')).toBe('MMM CMXCIX');
  });
});

describe('Convert to roman numerals in Apostrophus System', () => {
  it('convert 1 to "I"', () => {
    expect(toRomanNumerals(1, 'Apostrophus')).toBe('I');
  });

  it('convert 15 to "XV"', () => {
    expect(toRomanNumerals(15, 'Apostrophus')).toBe('XV');
  });

  it('convert 3999 to "XV"', () => {
    expect(toRomanNumerals(3999, 'Apostrophus')).toBe('MMM CMXCIX');
  });
});
