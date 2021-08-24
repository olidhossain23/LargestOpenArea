export function isIndexExistsFor3D(structure: number[][][], block: number, row: number, column: number): boolean {
  let isIndexExists = false;

  if (block != -1 && row != -1 && column != -1 && block != structure.length && row != structure[block].length && column != structure[block][row].length) {
    try {
      if (structure[block][row][column] !== undefined && (structure[block][row][column] === 0 || structure[block][row][column] === 1)) {
        isIndexExists = true;
      }
    } catch (e) {
      console.log('The index you have entered is invalid ' + e);
    }
  }
  return isIndexExists;
}
