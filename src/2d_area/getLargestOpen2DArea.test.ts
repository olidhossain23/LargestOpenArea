import { getLargestOpen2DArea } from '../2d_area/getLargestOpen2DArea';
import { initializeArrayStructure2D } from './initializeArrayStructure2D';

describe('Get largest 2D open area', () => {
  it('Get largest 2D open area test 001', () => {
    const structure2D = initializeArrayStructure2D(10, 10);
    // create open areas

    // area size = 4
    structure2D[3][3] = 0;
    structure2D[3][4] = 0;
    structure2D[4][4] = 0;
    structure2D[3][5] = 0;

    // area size = 8
    structure2D[6][9] = 0;
    structure2D[7][9] = 0;
    structure2D[8][6] = 0;
    structure2D[8][7] = 0;
    structure2D[8][9] = 0;
    structure2D[9][7] = 0;
    structure2D[9][8] = 0;
    structure2D[9][9] = 0;

    expect(getLargestOpen2DArea(structure2D)).toBe(8);
  });

  it('Get largest 2D open area test 002', () => {
    const structure2D = initializeArrayStructure2D(10, 10);
    // create open areas

    // area size = 4
    structure2D[3][3] = 0;
    structure2D[3][4] = 0;
    structure2D[4][4] = 0;
    structure2D[3][5] = 0;

    // area size = 5
    structure2D[6][5] = 0;
    structure2D[7][5] = 0;
    structure2D[8][5] = 0;
    structure2D[5][5] = 0;
    structure2D[6][5] = 0;

    //area size = 12
    structure2D[0][8] = 0;
    structure2D[0][9] = 0;
    structure2D[1][8] = 0;
    structure2D[1][9] = 0;
    structure2D[2][8] = 0;
    structure2D[2][9] = 0;
    structure2D[3][8] = 0;
    structure2D[3][9] = 0;
    structure2D[4][8] = 0;
    structure2D[4][9] = 0;
    structure2D[5][8] = 0;
    structure2D[5][9] = 0;

    expect(getLargestOpen2DArea(structure2D)).toBe(12);
  });

  it('Get largest 2D open area test 003', () => {
    const structure2D = initializeArrayStructure2D(9, 9);
    // No open area

    expect(getLargestOpen2DArea(structure2D)).toBe(0);
  });

  it('Get largest 2D open area test 004', () => {
    const structure2D = initializeArrayStructure2D(10, 10);
    // create open areas

    //area size = 10
    structure2D[0][0] = 0;
    structure2D[1][0] = 0;
    structure2D[2][0] = 0;
    structure2D[3][0] = 0;
    structure2D[4][0] = 0;
    structure2D[5][0] = 0;
    structure2D[6][0] = 0;
    structure2D[7][0] = 0;
    structure2D[8][0] = 0;
    structure2D[9][0] = 0;

    // area size = 4
    structure2D[3][3] = 0;
    structure2D[3][4] = 0;
    structure2D[3][5] = 0;
    structure2D[4][4] = 0;

    // area size = 5
    structure2D[5][5] = 0;
    structure2D[6][5] = 0;
    structure2D[7][5] = 0;
    structure2D[8][5] = 0;
    structure2D[9][5] = 0;
    expect(getLargestOpen2DArea(structure2D)).toBe(10);
  });
});
