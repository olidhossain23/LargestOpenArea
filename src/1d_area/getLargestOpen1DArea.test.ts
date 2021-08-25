import { getLargestOpen1DArea } from '../1d_area/getLargestOpen1DArea';
import { initializeArrayStructure1D } from './initializeArrayStructure1D';

describe('Get largest 1D open area', () => {
  it('Get largest 1D open area test 001', () => {
    const structure1D = initializeArrayStructure1D(12);
    // create open areas

    // area size = 3
    structure1D[3] = 0;
    structure1D[4] = 0;
    structure1D[5] = 0;

    // area size = 5
    structure1D[7] = 0;
    structure1D[8] = 0;
    structure1D[9] = 0;
    structure1D[10] = 0;
    structure1D[11] = 0;

    expect(getLargestOpen1DArea(structure1D)).toBe(5);
  });

  it('Get largest 1D open area test 002', () => {
    const structure1D = initializeArrayStructure1D(13);
    // create open areas

    // area size = 4
    structure1D[0] = 0;
    structure1D[1] = 0;
    structure1D[2] = 0;
    structure1D[3] = 0;

    // area size = 5
    structure1D[5] = 0;
    structure1D[6] = 0;
    structure1D[7] = 0;
    structure1D[8] = 0;
    structure1D[9] = 0;

    //area size = 1
    structure1D[11] = 0;

    expect(getLargestOpen1DArea(structure1D)).toBe(5);
  });

  it('Get largest 1D open area test 003', () => {
    const structure1D = initializeArrayStructure1D(9);
    // No open area

    expect(getLargestOpen1DArea(structure1D)).toBe(0);
  });

  it('Get largest 1D open area test 004', () => {
    const structure1D = initializeArrayStructure1D(20);
    // create open areas

    //area size = 10
    structure1D[0] = 0;
    structure1D[1] = 0;
    structure1D[2] = 0;
    structure1D[3] = 0;
    structure1D[4] = 0;
    structure1D[5] = 0;
    structure1D[6] = 0;
    structure1D[7] = 0;
    structure1D[8] = 0;
    structure1D[9] = 0;

    // area size = 4
    structure1D[11] = 0;
    structure1D[12] = 0;
    structure1D[13] = 0;
    structure1D[14] = 0;

    // area size = 3
    structure1D[16] = 0;
    structure1D[17] = 0;
    structure1D[18] = 0;

    expect(getLargestOpen1DArea(structure1D)).toBe(10);
  });
});
