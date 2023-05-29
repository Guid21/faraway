import { formattedHeight } from "./formatted-height";

describe('formattedHeight', () => {
    it('returns the string "unknown" if height is "unknown"', () => {
      expect(formattedHeight('unknown')).toBe('unknown');
    });
  
    it('returns the formatted string with adding "cm" if height is not "unknown"', () => {
      expect(formattedHeight('182')).toBe('182 cm');
      expect(formattedHeight('154')).toBe('154 cm');
    });
  });
  