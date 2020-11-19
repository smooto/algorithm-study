/*
A legal document is represented as an array of strings where each word is located at an index in the array. A user wants to query for two words that may be at max k words apart. Design an algorithm to make this query as time efficient as possible, even if it requires training time initially.
Legal document = [“The”, “quick”, “brown”, “fox”, … ]
W1 = legal
W2 = jurisdiction
max k 
K = 2
“Legal area of jurisdiction” → true
“Legal language surrounding this jurisdiction” → false
*/

// given that speed is the priority...
  // we want to cut down on the amount of data being processed by as much as possible
  // if output is a boolean, then early return will be our friend

// approach A: assumes boolean output, W2 must follow W1
  // we ONLY care about instances of W1 and the k + 1 strings immediately after it
    // copy input array for mutating -- i don't know how this algorithm will be used later, so i want to maintain source of truth, but i also want to be able to literally cut out irrelevant data
    // iteration starts at index of first instance of W1 (document.indexOf(w1)) -- anything before that is irrelevant
    // if any string within k + 1 spaces away is W2, then return true and exit function
    // otherwise...
      // discard all elements up to the string k + 2 spaces away
      // set w1 pointer to the index of the next instance
      // repeat loop
    // if no matches found, document.indexOf(w1) will return invalid (-1), ending the while loop and exiting the function with a return value of false
  
  // variables -- for accessibility, avoiding abbreviations
    // legalDoc, firstWord, secondWord, maxDistance -- input values
    // copiedDoc -- will be used instead of legalDoc for any iteration and mutation
    // currentInstance -- index of the first remaining instance of firstWord in copiedDoc

const { oregonConstitution, constitutionSnippet } = require('./test-docs/oregon-constitution');

function validateQuery(legalDoc, firstWord, secondWord, maxDistance) {
  let copiedDoc = [...legalDoc];

  let currentInstance = copiedDoc.indexOf(firstWord);

  // while instances of firstWord remain in the mutated document...
  while(currentInstance >= 0) {
    // check each string immediately following the currentInstance, within maxDistance + 1; if a match is found for secondWord, exit the function entirely and return true
    for(let i = currentInstance + 1; i <= (currentInstance + maxDistance + 1); i++) {
      if(copiedDoc[i] == secondWord) return true;
      // if no match was found, exit for loop and continue with while loop
    }
    // if the program reaches this point, then no matches were found in the section we checked. in that case, it'll remove everything from the start of the copied array through the first instance of firstWord.
      // we need to do this so that indexOf() will accurately return the next instance of firstWord; otherwise, it'll just return the same instance again, and we'll be stuck in the loop!
      // as a note, while it's tempting to slice from (currentInstance + maxDistance + 2), which is the first index we haven't examined at all, there's a chance that one of the strings examined in the for loop could be the next instance of firstWord (even if it didn't match secondWord).
    copiedDoc = copiedDoc.slice(currentInstance + 1, copiedDoc.length);
    // now that we've removed the first section of copiedDoc, we can reassign the value of currentInstance to the next instance of firstWord, wherever that happens to occur in the mutated copiedDoc, and repeat the loop.
    currentInstance = copiedDoc.indexOf(firstWord);
  }
  // if no matches are ever found for secondWord, we'll eventually run out of instances of firstWord, and copiedDoc.indexOf(firstWord) will evaluate to -1.
  // at that point, we'll exit the while loop and return false.
  return false;
}

const stringA = `
(a) The Legislative Assembly is in session at the time the catastrophic disaster is declared
A finding required by this subsection shall specify the nature of the catastrophic disaster
`.split('\n').join(' ').split(' ');

const stringB = 'Legal area of jurisdiction'.split(' ');

// console.log(oregonConstitution);
// console.log(constitutionSnippet);
// console.log(oregonConstitution.slice(131, 135));
console.log(validateQuery(oregonConstitution, 'catastrophic', 'declared', 2))
// console.log(validateQuery(constitutionSnippet, 'catastrophic', 'declared', 5))
// console.log(validateQuery(stringA, 'catastrophic', 'declared', 2))
// console.log(validateQuery(stringB, 'Legal', 'jurisdiction', 2))
