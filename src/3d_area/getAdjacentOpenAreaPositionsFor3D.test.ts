import { getAdjacentOpenAreaPositionsFor3D } from './getAdjacentOpenAreaPositionsFor3D';
import { initializeArrayStructure3D } from './initializeArrayStructure3D';

describe('Get adjacent open area position for a given position', () => {
  it('Get adjacent position top, bottom, midLeft, midRight, front, back for a given position', () => {
    const structure3D = initializeArrayStructure3D(9, 9, 9);

    //Given position
    structure3D[1][1][1] = 0;
    //front
    structure3D[1][0][1] = 0;
    //back
    structure3D[1][2][1] = 0;
    //midLeft
    structure3D[1][1][0] = 0;
    //midRight
    structure3D[1][1][2] = 0;
    //top
    structure3D[0][1][1] = 0;
    //bottom
    structure3D[2][1][1] = 0;

    const listAdjacentZeroPositions = getAdjacentOpenAreaPositionsFor3D(structure3D, 1, 1, 1);

    expect(listAdjacentZeroPositions.length).toBe(6);
    expect(listAdjacentZeroPositions.includes('1,0,1')).toBe(true);
    expect(listAdjacentZeroPositions.includes('1,2,1')).toBe(true);
    expect(listAdjacentZeroPositions.includes('1,1,0')).toBe(true);
    expect(listAdjacentZeroPositions.includes('1,1,2')).toBe(true);
    expect(listAdjacentZeroPositions.includes('0,1,1')).toBe(true);
    expect(listAdjacentZeroPositions.includes('2,1,1')).toBe(true);
  });

  it('Get adjacent position top, midLeft, midRight for a given position', () => {
    const structure3D = initializeArrayStructure3D(10, 10, 10);

    //Given position
    structure3D[3][3][3] = 0;
    //midLeft
    structure3D[3][3][2] = 0;
    //midRight
    structure3D[3][3][4] = 0;
    //top
    structure3D[3][2][3] = 0;

    const listAdjacentZeroPositions = getAdjacentOpenAreaPositionsFor3D(structure3D, 3, 3, 3);

    expect(listAdjacentZeroPositions.length).toBe(3);
    expect(listAdjacentZeroPositions.includes('3,3,2')).toBe(true);
    expect(listAdjacentZeroPositions.includes('3,3,4')).toBe(true);
    expect(listAdjacentZeroPositions.includes('3,2,3')).toBe(true);
  });
});
