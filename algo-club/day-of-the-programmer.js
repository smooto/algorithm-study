/*
***Day of the Programmer***

https://www.hackerrank.com/challenges/day-of-the-programmer/problem

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

- Divisible by 400.
- Divisible by 4 and not divisible by 100.

Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer

/// Input Format

A single integer denoting year y.

Constraints

- 1700 \le y \le 2700

/// Output Format

Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

Sample Input 0

2017

Sample Output 0

13.09.2017

Explanation 0

In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

Sample Input 1

2016
Sample Output 1

12.09.2016
Explanation 1

Year  = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017. When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244. Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that it falls on day 12 of the 9th month (September). We then print the full date in the specified format, which is 12.09.2016.

Sample Input 2

1800
Sample Output 2

12.09.1800
Explanation 2

Since 1800 is leap year as per Julian calendar. Day lies on 12 September.
*/

/*
***Approach***

Goal:
Given a year, y...
  Find the date of the 256th day of that year according to the official Russian calendar during that year.
  Return as string in format 'dd.mm.yyyy', where dd is the two-digit day, mm is the two-digit month, and yyyy is y.
For fun, let's try to build this in a way that can be used to find other dates, too.

Steps:
1. Determine which calendar
  if y < 1918, julian
  if y > 1918, gregorian
  if y === 1918 --- special case: day 32 = feb 14
2. Determine if leap year
  if julian, leap year = true if (y % 4 === 0)
  if gregorian, leap year = true if (y % 400 === 0) or (y % 4 === 0 && y % 100 != 0)
  if y === 1918, skip
3. Find 256th day
  sum days of first 8 months
  find day in september by 
    if leap year, subtract additional 1 from date
    if 1918, then date is 13 days later than usual (9/26)
4. Format and return string

*/

// const firstDays = {
//   1: 1,
//   2: 32,
//   3: 60,
//   4: 90,
//   5: 121,
//   6: 151,
//   7: 182,
//   8: 213,
//   9: 243,
//   10: 274,
//   11: 304,
//   12: 335
// }

const dayOfTheProgrammer = (year) => {
  // these could be done inline on 120 with an OR operator (||) between them, but i opted to pull them out and label by calendar for readability
  const isJulianLeapYear = (year < 1918 && year % 4 === 0) ? true : false
  const isGregorianLeapYear = !isJulianLeapYear && ((year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)) ? true : false

  return year === 1918 ? `26.09.${year}`
    :  isJulianLeapYear || isGregorianLeapYear ? `12.09.${year}`
    : `13.09.${year}`
}

// attempt at dynamic solution (should works with any numeric day of the year)
// oh except i got a few things backward, it turns out. need to change that in the logic here

// const firstDays = [1, 32, 60, 90, 121, 151, 182, 213, 243, 274, 304, 335]

// const dayOfTheProgrammerDynamic = (year, day) => {
//   const calendar = year === 1918 ? 'transition' : year < 1918 ? 'julian' : 'gregorian'

//   let offset = 0
  
//   switch(calendar) {
//     case 'transition':
//       offset = 13
//       break
//     case 'julian':
//       if((y % 400 === 0) || (y % 4 === 0 && y % 100 != 0)) {
//         offset = 1
//       }
//       break
//     case 'gregorian':
//       if(y % 4 === 0) {
//         offset = 1
//       }
//       break
//     default:
//       offset = 0
//   }

//   let startIndex = 0
  
//   while(startIndex < firstDays.length) {
//     let middleIndex = Math.floor(firstDays.length / 2)

//     if(firstDays[middleIndex] < 256)
//   }
// }

module.exports = dayOfTheProgrammer
