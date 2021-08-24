import { isIndexExistsFor1D } from './isIndexExistsFor1D';

export function getAdjacentOpenAreaPositionsFor1D(structure: number[], element: number): Array<string> {
  const listAdjacentZeroPositions: Array<string> = [];

  try {
    let right = -1;
    if (isIndexExistsFor1D(structure, element + 1)) {
      right = structure[element + 1];
    }
    if (right === 0) {
      listAdjacentZeroPositions.push(`${element + 1}`);
    }
    let left = -1;
    if (isIndexExistsFor1D(structure, element - 1)) {
      left = structure[element - 1];
    }
    if (left === 0) {
      listAdjacentZeroPositions.push(`${element - 1}`);
    }
  } catch (e) {
    console.log('The index you have entered is invalid');
  }

  return listAdjacentZeroPositions;
}
