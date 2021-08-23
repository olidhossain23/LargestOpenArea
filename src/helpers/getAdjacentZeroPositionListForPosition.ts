import { isIndexExists } from './isIndexExists';

export function getAdjacentOpenAreaPositionsForGivenPosition(structure: number[][][], block: number, row: number, column: number): Array<string> {
  const listAdjacentZeroPositions: Array<string> = [];

  try {
    let midRight = -1;
    if (isIndexExists(structure, block, row, column + 1)) {
      midRight = structure[block][row][column + 1];
    }
    if (midRight === 0) {
      listAdjacentZeroPositions.push(`${block},${row},${column + 1}`);
    }
    let midLeft = -1;
    if (isIndexExists(structure, block, row, column - 1)) {
      midLeft = structure[block][row][column - 1];
    }
    if (midLeft === 0) {
      listAdjacentZeroPositions.push(`${block},${row},${column - 1}`);
    }
    let front = -1;
    if (isIndexExists(structure, block, row - 1, column)) {
      front = structure[block][row - 1][column];
    }
    if (front === 0) {
      listAdjacentZeroPositions.push(`${block},${row - 1},${column}`);
    }
    let back = -1;
    if (isIndexExists(structure, block, row + 1, column)) {
      back = structure[block][row + 1][column];
    }
    if (back === 0) {
      listAdjacentZeroPositions.push(`${block},${row + 1},${column}`);
    }
    let top = -1;
    if (isIndexExists(structure, block + 1, row, column)) {
      top = structure[block + 1][row][column];
    }
    if (top === 0) {
      listAdjacentZeroPositions.push(`${block + 1},${row},${column}`);
    }
    let bottom = -1;
    if (isIndexExists(structure, block - 1, row, column)) {
      bottom = structure[block - 1][row][column];
    }
    if (bottom === 0) {
      listAdjacentZeroPositions.push(`${block - 1},${row},${column}`);
    }
  } catch (e) {
    console.log('The index you have entered is invalid');
  }

  return listAdjacentZeroPositions;
}
