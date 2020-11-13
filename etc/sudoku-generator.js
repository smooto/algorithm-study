/*
let's make a sudoku board generator!

expectations (number placement):
  - the board will be a 9x9 grid of 9x9 subgrids.
  - each integer 1-9 will be placed on the board exactly 9 times.
  - each column/row will contain exactly one instance of each integer.

expectations (hiding numbers for play):
  - # cells blanked out will correspond to difficulty level
  - cells will be blanked out in consistent patterns

base grid layout:
 0  1  2 |  3  4  5 |  6  7  8 | 
 9 10 11 | 12 13 14 | 15 16 17 | 
18 19 20 | 21 22 23 | 24 25 26 | 
--------------------------------
27 28 29 | 30 31 32 | 33 34 35 | 
36 37 38 | 39 40 41 | 42 43 44 | 
45 46 47 | 48 49 50 | 51 52 53 |
-------------------------------- 
54 55 56 | 57 58 59 | 60 61 62 | 
63 64 65 | 66 67 68 | 69 70 71 | 
72 73 74 | 75 76 77 | 78 79 80 | 

ex.: if placing 4s... (assuming no other numbers placed yet)
  instance | placement cell | cells now invalid -- 4s can no longer be placed here
  ---------------------------------------------------------------------------------
  1        | 17             | 17 (now taken)
           |                | 9 - 16 (intersecting row)
           |                | 8,26,35,44,53,62,71,80 (intersecting column)
           |                | 6,7,24,25 (subgrid now contains a 4)
  ---------------------------------------------------------------------------------
  2        | 51             | 17 / 51 (now taken)
           |                | 9 - 16 / 45 - 53 (intersecting rows)
           |                | 8,26,35,44,53,62,71,80 / 6,15,24,33,42,60,69,78 (intersecting columns)
           |                | 6,7,24,25 / 34,43 (both subgrids now contain 4s)
  
  etc....

full grid notes:
**row start is always 0 or a multiple of 9
**row end is always 1 less than a multiple of 9
**column neighbors are always 9 away from a given cell

subgrid notes:
**TL cells always 3 apart from next subgrid's TL cell
**BR cells always 20 apart from TL of its cell

data structure:
  core concerns -- for a given cell i...
    Which cells are in the same row as i?
    Which cells are in the same column as i?
    Which cells are in the same subgrid as i?

when a number n is placed in cell i...
  - all numbers gain i as an invalid index
  - n also gains as an invalid index for...
    - every extant cell in its column -- i - 9 (above) & i + 9 (below)
    - every extant cell in its row -- row start will be the closest multiple of 9 that's less than i, while row end will be 1 - the closest multiple of 9 that's greater than i
    - every extant cell in its subgrid
      -- if i is a multiple of 3, then it's in the first column of the subgrid, and we should invalidate cells in the 2 columns immediately to its right
      -- if i + 1 is a multiple of 3, then it's in the third column of the subgrid, and we should invalidate cells in the 2 columns immediately to its left
      -- if i meets neither condition, then it's in the middle column of the subgrid, and we should invalidate cells in the columns immediately to its left and right

approach:
*/

function printDemoGrid() {
  let grid = '';

  // increment by 3 whenever reached
  let nextDivider = 2;
  // increment by 9 whenever reached
  let nextNewline = 8;
  // increment by 27 whenever reached
  let nextHorizontal = 26;

  for(let i = 0; i <= 80; i++) {
    if(i < 10) grid += ' ';

    grid += `${i} `;

    if(i === nextDivider) {
      grid += '| '
      nextDivider += 3;
    }

    if(i === nextNewline) {
      grid += '\n'
      nextNewline += 9;
    }

    if(i === nextHorizontal && i != 80) {
      grid += '--------------------------------\n'
      nextHorizontal += 27;
    }

  }
  return grid;
}

console.log(printDemoGrid());
