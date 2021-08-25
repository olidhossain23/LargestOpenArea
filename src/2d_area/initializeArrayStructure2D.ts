export function initializeArrayStructure2D(maxRow: number, maxColumn: number): number[][] {
  const structure: number[][] = [];

  //initialize 2-d array
  // create filled data structure
  for (let x = 0; x < maxRow; x++) {
    structure[x] = [];
    for (let y = 0; y < maxColumn; y++) {
      structure[x][y] = 1;
    }
  }
  return structure;
}
