/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

const housesA = [1,2,3,1];
const housesB = [2,7,9,3,1];

// approach A:
  // find position of highest value
  // find values of all positions +2 and -2 away
  // return sum of values

// function rob(houses) {
//   // for an example, let's assume houses = [2,7,9,3,1]

//   // store a variable to save the index of the richest house, and initialize it to the first house
//   // for our example, the first house (houses[0]) has an income of 2.
//   let richestHouseNumber = 0;

//   // for each house...
//   houses.forEach((houseIncome, houseNumber) => { // houseIncome is the income of the current house, while houseNumber is the index
//     // if the current house's income is greater than the richest house's income, change richestHouseNumber to the current houseNumber
    
//     // for the example, richestHouseNumber is initialized to 0. therefore, houses[richestHouseNumber] starts at an income of 2.
//     // when houseNumber is 1, houseIncome is 7. 7 is greater than 2; therefore, we'll change richestHouseNumber to be 1.
//     // when houseNumber is 2, houseIncome is 9. 9 is greater than 7; therefore, we'll change richestHouseNumber again to be 2.
//     // for houseNumbers 3 and 4, houseIncome is 3 and 1 respectively. neither of these is higher than 9, so richestHouseNumber remains 2.
//     if(houseIncome > houses[richestHouseNumber]) richestHouseNumber = houseNumber;
//   })
//   // at the end of the loop, richestHouseNumber is now the index of the house with the highest income.
//   // for the example, richestHouseNumber will be 2, with an income of 9.

//   // now, we want to find the incomes 
  
// }

// approach B:
  // just check all even indices and all odd indices, and return the higher total
  // PROBLEM: they don't have to be consecutive, duh

function rob(houses) {
  const totals = houses.reduce((totalRobbed, houseIncome, houseNumber) => {
    houseNumber % 2 === 0
    ? totalRobbed.evens += houseIncome
    : totalRobbed.odds += houseIncome;

    return totalRobbed;
  }, {evens: 0, odds: 0})

  return totals.evens > totals.odds ? totals.evens : totals.odds;
}

console.log(rob(housesA));
console.log(rob(housesB));
