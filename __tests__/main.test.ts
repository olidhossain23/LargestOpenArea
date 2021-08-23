import { getLargestArea } from '../src/main';

describe('Largest open area', () => {
  let structure = [];

  beforeEach(() => {
    structure = initializeArrayStructure();
  });

  it('Check largest open area test 001', () => {
    // create open areas

    // area size = 4
    structure[3][3][3] = 0;
    structure[3][3][4] = 0;
    structure[3][4][4] = 0;
    structure[3][3][5] = 0;

    // area size = 5
    structure[5][6][5] = 0;
    structure[5][7][5] = 0;
    structure[5][8][5] = 0;
    // connected to another floor
    structure[6][5][5] = 0;
    structure[6][6][5] = 0;

    expect(getLargestArea(structure)).toBe(5);
  });

  it('Check largest open area test 002', () => {
    // create open areas
    // area size = 7
    structure[0][0][0] = 0;
    structure[1][0][1] = 0;
    structure[2][0][0] = 0;
    structure[3][0][0] = 0;
    structure[4][0][0] = 0;
    structure[5][0][0] = 0;
    structure[6][0][0] = 0;
    structure[8][0][0] = 0;
    //structure[9][0][0] = 0;

    // area size = 4
    structure[3][3][3] = 0;
    structure[3][3][4] = 0;
    structure[3][4][4] = 0;
    structure[3][3][5] = 0;

    // area size = 5
    structure[5][6][5] = 0;
    structure[5][7][5] = 0;
    structure[5][8][5] = 0;
    // connected to another floor
    structure[6][5][5] = 0;
    structure[6][6][5] = 0;

    //area size = 10
    structure[7][0][0] = 0;
    structure[7][0][1] = 0;
    structure[7][0][2] = 0;
    structure[7][1][0] = 0;
    structure[7][2][0] = 0;
    structure[7][2][1] = 0;
    structure[7][2][2] = 0;
    structure[7][2][3] = 0;
    structure[7][2][4] = 0;
    structure[7][2][5] = 0;

    expect(getLargestArea(structure)).toBe(16);
  });
});

function initializeArrayStructure() {
  const structure: number[][][] = [];

  //initialize 3-d array
  // create filled data structure
  for (let x = 0; x < 10; x++) {
    structure[x] = [];
    for (let y = 0; y < 10; y++) {
      structure[x][y] = [];
      for (let z = 0; z < 10; z++) {
        structure[x][y][z] = 1;
      }
    }
  }
  return structure;
}
