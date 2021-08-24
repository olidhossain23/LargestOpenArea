import { getLargestArea } from '../3d_area/getLargestOpen3DArea';
import { initializeArrayStructure3D } from './initializeArrayStructure3D';

describe('Get largest 3D open area', () => {
  it('Get largest 3D open area test 001', () => {
    const structure3D = initializeArrayStructure3D(10, 10, 10);
    // create open areas

    // area size = 4
    structure3D[3][3][3] = 0;
    structure3D[3][3][4] = 0;
    structure3D[3][4][4] = 0;
    structure3D[3][3][5] = 0;

    // area size = 5
    structure3D[5][6][5] = 0;
    structure3D[5][7][5] = 0;
    structure3D[5][8][5] = 0;
    // connected to another floor
    structure3D[6][5][5] = 0;
    structure3D[6][6][5] = 0;

    expect(getLargestArea(structure3D)).toBe(5);
  });

  it('Get largest 3D open area test 002', () => {
    const structure3D = initializeArrayStructure3D(10, 10, 10);

    // create open areas

    // area size = 4
    structure3D[3][3][3] = 0;
    structure3D[3][3][4] = 0;
    structure3D[3][4][4] = 0;
    structure3D[3][3][5] = 0;

    // area size = 5
    structure3D[5][6][5] = 0;
    structure3D[5][7][5] = 0;
    structure3D[5][8][5] = 0;
    // connected to another floor
    structure3D[6][5][5] = 0;
    structure3D[6][6][5] = 0;

    //area size = 17
    structure3D[0][0][0] = 0;
    structure3D[1][0][1] = 0;
    structure3D[2][0][0] = 0;
    structure3D[3][0][0] = 0;
    structure3D[4][0][0] = 0;
    structure3D[5][0][0] = 0;
    structure3D[6][0][0] = 0;
    structure3D[8][0][0] = 0;
    structure3D[9][0][0] = 0;
    structure3D[7][0][0] = 0;
    structure3D[7][0][1] = 0;
    structure3D[7][0][2] = 0;
    structure3D[7][1][0] = 0;
    structure3D[7][2][0] = 0;
    structure3D[7][2][1] = 0;
    structure3D[7][2][2] = 0;
    structure3D[7][2][3] = 0;
    structure3D[7][2][4] = 0;
    structure3D[7][2][5] = 0;

    expect(getLargestArea(structure3D)).toBe(17);
  });

  it('Get largest 3D open area test 003', () => {
    const structure3D = initializeArrayStructure3D(9, 9, 9);
    // No open area

    expect(getLargestArea(structure3D)).toBe(0);
  });

  it('Get largest 3D open area test 004', () => {
    const structure3D = initializeArrayStructure3D(10, 10, 10);
    // create open areas

    //area size = 10
    structure3D[0][0][0] = 0;
    structure3D[1][0][0] = 0;
    structure3D[2][0][0] = 0;
    structure3D[3][0][0] = 0;
    structure3D[4][0][0] = 0;
    structure3D[5][0][0] = 0;
    structure3D[6][0][0] = 0;
    structure3D[7][0][0] = 0;
    structure3D[8][0][0] = 0;
    structure3D[9][0][0] = 0;

    // area size = 4
    structure3D[3][3][3] = 0;
    structure3D[3][3][4] = 0;
    structure3D[3][4][4] = 0;
    structure3D[3][3][5] = 0;

    // area size = 5
    structure3D[5][6][5] = 0;
    structure3D[5][7][5] = 0;
    structure3D[5][8][5] = 0;
    // connected to another floor
    structure3D[6][5][5] = 0;
    structure3D[6][6][5] = 0;
    expect(getLargestArea(structure3D)).toBe(10);
  });
});
