import { getIdFromUrl } from './get-id-from-url';

describe('getIdFromUrl', () => {
  test('returns the correct ID for the first URL', () => {
    const id = getIdFromUrl('https://swapi.dev/api/people/50/');
    expect(id).toBe('50');
  });

  test('returns the correct ID for the second URL', () => {
    const id = getIdFromUrl('https://swapi.dev/api/people/22/');
    expect(id).toBe('22');
  });

  test('returns the correct ID for the third URL', () => {
    const id = getIdFromUrl('https://swapi.dev/api/people/44/');
    expect(id).toBe('44');
  });

  test('returns an empty string when given an invalid URL', () => {
    const id = getIdFromUrl('invalid-url');
    expect(id).toBe(undefined);
  });
});
