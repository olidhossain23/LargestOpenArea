export function initializeArrayStructure1D(maxElement: number): number[] {
  const structure: number[] = [];

  //initialize 1-d array
  // create filled data structure
  for (let x = 0; x < maxElement; x++) {
    structure[x] = 1;
  }
  return structure;
}
