/*
solution source: https://leetcode.com/problems/house-robber/discuss/913941/Dynamic-programming-solution-wvideo-whiteboard-explanation
whiteboard example: https://www.youtube.com/watch?v=iGkRO_lgHzg&feature=emb_logo

let rob = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    } else if (nums.length == 1) {
        return nums[0];
    }

    let runningTotal = [];
    runningTotal[0] = nums[0],
    runningTotal[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        runningTotal[i] = Math.max(nums[i] + runningTotal[i - 2], runningTotal[i - 1]);
    }

    return runningTotal[runningTotal.length - 1];
};
*/

const exampleHouses = [5, 50, 7, 10];

function rob(houses) {
    // first, we initialize an empty array to store the running total amount of money robbed
    // each element in the array is going to represent the maximum amount of money that can possibly be robbed so far
    const runningTotal = [];

    // then, we instantiate two values in the array:

    // we assign position 0 the income for the first house
        // runningTotal is now [5]
    runningTotal[0] = houses[0];

    // we then assign position 1 the income of either the first or second house, depending on which one is the higher value
        // runningTotal is now [5, 50]
        // if the input array were [50, 5, 7, 10], then runningTotal would instead be [50, 50], because 50 > 5
    runningTotal[1] = Math.max(houses[0], houses[1]);

    // for the loop, we'll start at the 2nd index of the houses array (the 3rd house)
    // we do this because we've already looked at and compared the incomes of the first two houses, and added the appropriate values to the runningTotal array
    for (let i = 2; i < houses.length; i++) {
        // for each index in the houses array, starting at houses[2], we're going to find the higher of two values:

            // value A is the sum of the current house's income and the income stored in runningTotal[i - 2]
                // for the first iteration (i = 2), this value comes out to 13
                    // houses[2] = 7, and runningTotal[0] = 5

            // value B is the income stored in runningTotal[i - 1]
                // for the first iteration (i = 2), this value comes out to 50
                    // runningTotal[1] = 50
        
        // once we have the two values, the function compares them with Math.max(), and assigns the higher value to runningTotal[i]
            // Math.max(13, 50) evaluates to 50, so we assign runningTotal[2] the value of 50
        
        // at the end of this loop, runningTotal is now [5, 50, 50]
        runningTotal[i] = Math.max(houses[i] + runningTotal[i - 2], runningTotal[i - 1]);

        // we then increment i from 2 to 3, and repeat until we reach the end of the array
        // in this case, i = 3 will be the last loop

        // so, when i = 3...
            // runningTotal is currently [5, 50, 50]
            // valueA is houses[3] (10) + runningTotal[1] (50), which comes out to 60
            // valueB is runningTotal[2] (50)
            // 60 > 50, so runningTotal[3] is assigned the value of 60
            // we increment i again, but because there's no houses[4], we exit the for loop
        }
        
    // at the end of the loop, runningTotal is [5, 50, 50, 60]
    // the last value in runningTotal represents the maximum amount of money that can be robbed, so we just return this value
    return runningTotal[runningTotal.length - 1];
}
