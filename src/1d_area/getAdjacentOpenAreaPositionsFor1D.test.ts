import { getAdjacentOpenAreaPositionsFor1D } from './getAdjacentOpenAreaPositionsFor1D';
import { initializeArrayStructure1D } from './initializeArrayStructure1D';

describe('Get adjacent open area position for a given position', () => {
  it('Get adjacent position left, right for a given position', () => {
    const structure1D = initializeArrayStructure1D(9);

    //Given position
    structure1D[1] = 0;
    //right
    structure1D[2] = 0;
    //left
    structure1D[0] = 0;

    const listOfAdjacentZeroPositions = getAdjacentOpenAreaPositionsFor1D(structure1D, 1);

    expect(listOfAdjacentZeroPositions.length).toBe(2);
    expect(listOfAdjacentZeroPositions.includes('2')).toBe(true);
    expect(listOfAdjacentZeroPositions.includes('0')).toBe(true);
  });

  it('Get adjacent position right for a given position', () => {
    const structure1D = initializeArrayStructure1D(10);

    //Given position
    structure1D[3] = 0;
    //right
    structure1D[4] = 0;

    const listOfAdjacentZeroPositions = getAdjacentOpenAreaPositionsFor1D(structure1D, 3);

    expect(listOfAdjacentZeroPositions.length).toBe(1);
    expect(listOfAdjacentZeroPositions.includes('4')).toBe(true);
  });
});
