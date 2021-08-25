import { initializeArrayStructure1D } from './initializeArrayStructure1D';
import { isIndexExistsFor1D } from './isIndexExistsFor1D';

describe('Check 1D array index', () => {
  it('Given array index should return true', () => {
    const structure1D = initializeArrayStructure1D(7);

    expect(isIndexExistsFor1D(structure1D, 6)).toBe(true);
  });

  it('Given array index should return false', () => {
    const structure1D = initializeArrayStructure1D(4);

    expect(isIndexExistsFor1D(structure1D, 6)).toBe(false);
  });
});
