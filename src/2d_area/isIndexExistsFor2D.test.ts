import { initializeArrayStructure2D } from './initializeArrayStructure2D';
import { isIndexExistsFor2D } from './isIndexExistsFor2D';

describe('Check 2D array index', () => {
  it('Given array index should return true', () => {
    const structure2D = initializeArrayStructure2D(7, 5);

    expect(isIndexExistsFor2D(structure2D, 6, 4)).toBe(true);
  });

  it('Given array index should return false', () => {
    const structure3D = initializeArrayStructure2D(6, 4);

    expect(isIndexExistsFor2D(structure3D, 6, 4)).toBe(false);
  });
});
