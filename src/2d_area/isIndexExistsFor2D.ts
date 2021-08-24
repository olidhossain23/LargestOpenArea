export function isIndexExistsFor2D(structure: number[][], row: number, column: number): boolean {
  let isIndexExists = false;

  if (row != -1 && column != -1 && row != structure.length && column != structure[row].length) {
    try {
      if (structure[row][column] !== undefined && (structure[row][column] === 0 || structure[row][column] === 1)) {
        isIndexExists = true;
      }
    } catch (e) {
      console.log('The index you have entered is invalid ' + e);
    }
  }
  return isIndexExists;
}
