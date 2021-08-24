export function isIndexExistsFor1D(structure: number[], element: number): boolean {
  let isIndexExists = false;

  if (element != -1 && element != structure.length) {
    try {
      if (structure[element] !== undefined && (structure[element] === 0 || structure[element] === 1)) {
        isIndexExists = true;
      }
    } catch (e) {
      console.log('The index you have entered is invalid ' + e);
    }
  }
  return isIndexExists;
}
