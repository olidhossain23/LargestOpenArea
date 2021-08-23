import { getAdjacentOpenAreaPositionsForGivenPosition } from './helpers/getAdjacentZeroPositionListForPosition';

export function getLargestArea(structure: number[][][]): number {
  /*
      Instructions:
      - Consider git for version control, we want to see how you use it
      - Feel free to use any npm libraries
      - Tip: Make this a npm project
      
      - The solution doesn't have to be perfect or even find the correct solution
      - We will try to see the thought process and the way that you tried or did find a way to solve the problem
      - Tip: We value readability over performance
      - Tip: Make helper classes
      - Tip: Switch to use TypeScript
      - Tip: Reduce the problem dimension to 2D or even 1D
      
      - We like to see how you approach testing
      - Tip: Consider using a testing library for running the tests
      - Tip: Try to spot any corner cases
      - Tip: At least some of the tests should fail if you didn't find a solution
      - Ask help or clarification from the developer who gave you this task if needed
    */

  //Max openAreaSize
  let maxOpenAreaSize = 0;

  for (let block = 0; block < structure.length; block++) {
    for (let row = 0; row < structure[block].length; row++) {
      for (let column = 0; column < structure[block][row].length; column++) {
        //Check for open area
        if (structure[block][row][column] === 0) {
          //Get all the adjacent positions and look for open area positions and save it in a array list
          // and repeat the operation until there is no new open area

          //list unique adjacent open area position
          const listOfUniqueAdjacentOpenAreaPositions: string[] = [];

          listOfUniqueAdjacentOpenAreaPositions.push(`${block},${row},${column}`);

          //list all open area positions whose adjacent position has been checked
          const checkedAdjacentOpenAreaPositionList: string[] = [];

          for (let i = 0; i < listOfUniqueAdjacentOpenAreaPositions.length; i++) {
            if (listOfUniqueAdjacentOpenAreaPositions[i] !== undefined && !checkedAdjacentOpenAreaPositionList.includes(listOfUniqueAdjacentOpenAreaPositions[i])) {
              checkedAdjacentOpenAreaPositionList.push(listOfUniqueAdjacentOpenAreaPositions[i]);

              const [firstPosition, secondPosition, thirdPosition] = listOfUniqueAdjacentOpenAreaPositions[i].split(',', 3);

              const foundOpenAreaPositions: Array<string> = getAdjacentOpenAreaPositionsForGivenPosition(
                structure,
                parseInt(firstPosition, 10),
                parseInt(secondPosition, 10),
                parseInt(thirdPosition, 10),
              );

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
    }
  }
  return maxOpenAreaSize;
}
