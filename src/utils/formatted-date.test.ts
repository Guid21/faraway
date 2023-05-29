import { formattedDate } from "./formatted-date";

describe('formattedDate', () => {
  it('returns the formatted date string with "-" replaced with "." if the input date string contains "-", e.g. "yyyy-MM-dd"', () => {
    expect(formattedDate('2014-01-01')).toBe('2014.01.01');
  });

  it('returns the formatted date string with "/" replaced with "." if the input date string contains "/", e.g. "yyyy/MM/dd"', () => {
    expect(formattedDate('2014/02/11')).toBe('2014.02.11');
  });

  it('returns the formatted date string with "." unchanged if the input date string contains ".", e.g. "yyyy.MM.dd"', () => {
    expect(formattedDate('2014.03.01')).toBe('2014.03.01');
  });

  it('returns the same input date string if the input date string is an empty string or undefined', () => {
    expect(formattedDate(undefined)).toBe(undefined);
    expect(formattedDate('')).toBe('');
  });

  it('throws an error if the input date string is not in the format', () => {
    expect(() => formattedDate('20140101')).toThrow();
    expect(() => formattedDate('abcd')).toThrow();
  });
});
