###
# https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/python
# Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

#  Three 1's => 1000 points
#  Three 6's =>  600 points
#  Three 5's =>  500 points
#  Three 4's =>  400 points
#  Three 3's =>  300 points
#  Three 2's =>  200 points
#  One   1   =>  100 points
#  One   5   =>   50 point
# A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

# Example scoring

#  Throw       Score
#  ---------   ------------------
#  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
#  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
#  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
# In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
###

# scored only if:
  # at least one 1
  # at least one 5
  # at least three of anything else
# points for one 1 and/or one 5 added to points for any extant triplet
# 5 dice >> only one triplet possible
  # highest possible roll: [1,1,1,1,1] >> 1200 points

# approaches:
  # hash map -- store & count instances of each (expensive but straightforward)
  # score counter -- loop through, store running total

# hash-forward approach -- ugly, but works
def score(dice):
  rolls = {}

  score = 0

  for roll in dice:
    if roll in rolls:
      rolls[roll] += 1
    else:
      rolls[roll] = 1

  if 1 in rolls:
    if rolls[1] >= 3:
      score += 1000
      rolls[1] -= 3
    score += 100 * rolls[1]
    del rolls[1]

  if 5 in rolls:
    if rolls[5] >= 3:
      score += 500
      rolls[5] -= 3
    score += 50 * rolls[5]
    del rolls[5]

  for roll in rolls:
    if rolls[roll] >= 3:
      score += 100 * int(roll)

  return score


print(score([1, 1, 1, 3, 1]))
print(score([5, 1, 3, 4, 1]))
print(score([2, 4, 4, 5, 4]))
print(score([2, 3, 4, 6, 2]))

# interesting community solution -- clever use of lists; ED = my comments
# https://www.codewars.com/kata/reviews/5bec571875977717ee002238/groups/5bec577e75977717ee002247
# def score(dice): 
#   sum = 0
    # ED: counter[i], points[i], and extra[i] will all refer to the same roll ('die') value, which means they can be directly compared
#   counter = [0,0,0,0,0,0]
#   points = [1000, 200, 300, 400, 500, 600]
#   extra = [100,0,0,0,50,0]
#   for die in dice: 
      # ED: given this data structure, index for each roll ('die') in the counter list is 1 - the value of the roll
#     counter[die-1] += 1
    # ED: enumerate(counter) builds a counter ('count') directly into the loop, to track instances of each iterable value ('i')
      # so, we add to the sum...
        # the triplet points for the current value, if 'count' >= 3, or 0 if count < 3
        # the extra points for any remaining (count%3) instances; only 1s and 5s actually have bonus points, so this will evaluate to 0 for any other value
#   for (i, count) in enumerate(counter):
#     sum += (points[i] if count >= 3 else 0) + extra[i] * (count%3)

#   return sum 