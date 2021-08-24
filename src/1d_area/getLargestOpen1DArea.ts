import { getAdjacentOpenAreaPositionsFor1D } from './getAdjacentOpenAreaPositionsFor1D';

export function getLargestOpen1DArea(structure: number[]): number {
  //Max openAreaSize
  let maxOpenAreaSize = 0;

  for (let element = 0; element < structure.length; element++) {
    //Check for open area
    if (structure[element] === 0) {
      //Get all the adjacent positions and look for open area positions and save it in a array list
      // and repeat the operation until there is no new open area

      //list unique adjacent open area position
      const listOfUniqueAdjacentOpenAreaPositions: string[] = [];

      listOfUniqueAdjacentOpenAreaPositions.push(`${element}`);

      //list all open area positions whose adjacent position has been checked
      const checkedAdjacentOpenAreaPositionList: string[] = [];

      for (let i = 0; i < listOfUniqueAdjacentOpenAreaPositions.length; i++) {
        if (listOfUniqueAdjacentOpenAreaPositions[i] !== undefined && !checkedAdjacentOpenAreaPositionList.includes(listOfUniqueAdjacentOpenAreaPositions[i])) {
          checkedAdjacentOpenAreaPositionList.push(listOfUniqueAdjacentOpenAreaPositions[i]);

          const foundOpenAreaPositions: Array<string> = getAdjacentOpenAreaPositionsFor1D(structure, parseInt(listOfUniqueAdjacentOpenAreaPositions[i], 10));

          //Loop all newly found adjacent open area position and add it in the unique adjacent open area position list if it does not exits
          for (let position = 0; position < foundOpenAreaPositions.length; position++) {
            if (foundOpenAreaPositions[position] !== undefined && !listOfUniqueAdjacentOpenAreaPositions.includes(foundOpenAreaPositions[position])) {
              listOfUniqueAdjacentOpenAreaPositions.push(foundOpenAreaPositions[position]);
            }
          }

          //continue the process until we get all adjacent position
          //Set i = 0  to run the loop again
          i = 0;
        }
      }

      //Set max open area if it is larger than the previous one
      if (listOfUniqueAdjacentOpenAreaPositions.length > maxOpenAreaSize) {
        maxOpenAreaSize = listOfUniqueAdjacentOpenAreaPositions.length;
      }
    }
  }
  return maxOpenAreaSize;
}
