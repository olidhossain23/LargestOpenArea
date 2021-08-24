//Initialize 3D array structure
export function initializeArrayStructure3D(maxBlock: number, maxRow: number, maxColumn: number): number[][][] {
  const structure: number[][][] = [];

  //initialize 3-d array
  // create filled data structure
  for (let x = 0; x < maxBlock; x++) {
    structure[x] = [];
    for (let y = 0; y < maxRow; y++) {
      structure[x][y] = [];
      for (let z = 0; z < maxColumn; z++) {
        structure[x][y][z] = 1;
      }
    }
  }
  return structure;
}
