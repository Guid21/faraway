import { formattedMass } from "./formatted-mass";

describe('formattedMass', () => {
    it('returns the string "unknown" if mass is "unknown"', () => {
      expect(formattedMass('unknown')).toBe('unknown');
    });
  
    it('returns the formatted string with adding "kg" if mass is not "unknown"', () => {
      expect(formattedMass('182')).toBe('182 kg');
      expect(formattedMass('154')).toBe('154 kg');
    });
  });
  