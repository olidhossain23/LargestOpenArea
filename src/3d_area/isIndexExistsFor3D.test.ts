import { isIndexExistsFor3D } from './isIndexExistsFor3D';
import { initializeArrayStructure3D } from './initializeArrayStructure3D';

describe('Check 3D array index', () => {
  it('Given array index should return true', () => {
    const structure3D = initializeArrayStructure3D(8, 7, 5);

    expect(isIndexExistsFor3D(structure3D, 7, 6, 4)).toBe(true);
  });

  it('Given array index should return false', () => {
    const structure3D = initializeArrayStructure3D(8, 7, 5);

    expect(isIndexExistsFor3D(structure3D, 8, 6, 4)).toBe(false);
  });
});
