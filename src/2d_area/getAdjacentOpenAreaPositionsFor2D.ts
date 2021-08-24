import { isIndexExistsFor2D } from './isIndexExistsFor2D';

export function getAdjacentOpenAreaPositionsFor2D(structure: number[][], row: number, column: number): Array<string> {
  const listAdjacentZeroPositions: Array<string> = [];

  try {
    let right = -1;
    if (isIndexExistsFor2D(structure, row + 1, column)) {
      right = structure[row + 1][column];
    }
    if (right === 0) {
      listAdjacentZeroPositions.push(`${row + 1},${column}`);
    }
    let left = -1;
    if (isIndexExistsFor2D(structure, row - 1, column)) {
      left = structure[row - 1][column];
    }
    if (left === 0) {
      listAdjacentZeroPositions.push(`${row - 1},${column}`);
    }
    let top = -1;
    if (isIndexExistsFor2D(structure, row, column - 1)) {
      top = structure[row][column - 1];
    }
    if (top === 0) {
      listAdjacentZeroPositions.push(`${row},${column - 1}`);
    }
    let bottom = -1;
    if (isIndexExistsFor2D(structure, row, column + 1)) {
      bottom = structure[row][column + 1];
    }
    if (bottom === 0) {
      listAdjacentZeroPositions.push(`${row},${column + 1}`);
    }
  } catch (e) {
    console.log('The index you have entered is invalid');
  }

  return listAdjacentZeroPositions;
}
