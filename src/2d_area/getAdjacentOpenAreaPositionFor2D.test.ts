import { getAdjacentOpenAreaPositionsFor2D } from './getAdjacentOpenAreaPositionsFor2D';
import { initializeArrayStructure2D } from './initializeArrayStructure2D';

describe('Get adjacent open area position for a given position', () => {
  it('Get adjacent position top, bottom, left, right for a given position', () => {
    const structure2D = initializeArrayStructure2D(9, 9);

    //Given position
    structure2D[1][1] = 0;
    //right
    structure2D[1][2] = 0;
    //left
    structure2D[1][0] = 0;
    //top
    structure2D[0][1] = 0;
    //bottom
    structure2D[2][1] = 0;

    const listOfAdjacentZeroPositions = getAdjacentOpenAreaPositionsFor2D(structure2D, 1, 1);

    expect(listOfAdjacentZeroPositions.length).toBe(4);
    expect(listOfAdjacentZeroPositions.includes('1,2')).toBe(true);
    expect(listOfAdjacentZeroPositions.includes('1,0')).toBe(true);
    expect(listOfAdjacentZeroPositions.includes('0,1')).toBe(true);
    expect(listOfAdjacentZeroPositions.includes('2,1')).toBe(true);
  });

  it('Get adjacent position top, left, right for a given position', () => {
    const structure2D = initializeArrayStructure2D(10, 10);

    //Given position
    structure2D[3][3] = 0;
    //right
    structure2D[3][4] = 0;
    //left
    structure2D[3][2] = 0;
    //top
    structure2D[2][3] = 0;

    const listOfAdjacentZeroPositions = getAdjacentOpenAreaPositionsFor2D(structure2D, 3, 3);

    expect(listOfAdjacentZeroPositions.length).toBe(3);
    expect(listOfAdjacentZeroPositions.includes('3,4')).toBe(true);
    expect(listOfAdjacentZeroPositions.includes('3,2')).toBe(true);
    expect(listOfAdjacentZeroPositions.includes('2,3')).toBe(true);
  });
});
