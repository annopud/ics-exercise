// console.log("‘UBCO’. Hello, Worddld!", "^UBCO (?:(.*?)([1-9]d*)|(0))$");

// let inputText = `UBCO dd0`;
// let inputText = `UBCO 0`;
// let inputText = `UBCO sdf00000001000
// 00001ggg1100001ggg111
// f1fgh1.22221`;
let inputText = `UBCO Jeemmoo Xoosmf2`;

let patternForUbco = /^UBCO (?:(0)|((?:.|\n)*?)([1-9]\d*))$/;
let result = inputText.match(patternForUbco);
console.log(result);
// console.log(result[1]);
// console.log(+result[2]);
if (!result) {
  return;
}

if (result[1]) {
  console.log("Empty string");
  return;
}
let patternVowels = /^[aeiou]$/i;
let patternAlphabet = /^[a-z]$/i;
let alienLanguage = "UBCO Jeemmoo Xoosmf2";
console.log("myResult", translateToEnglish(result[2]));
console.log("englishToAlien", englishToAlien("Hello World"));

// console.log("A".charCodeAt());
// console.log("Z".charCodeAt());
// console.log("a".charCodeAt());
// console.log("z".charCodeAt());

// console.log("z".charCodeAt());
// console.log("getPreviousConsonant", getPreviousConsonant("A"));

function translateToEnglish(alienFormat) {
  const noDoubleVowelStr = replaceDoubleVowel(alienFormat);
  return noDoubleVowelStr.split("").reduce((accumulator, currentChar) => {
    if (!patternVowels.test(currentChar) && patternAlphabet.test(currentChar)) {
      return accumulator + getPreviousConsonant(currentChar);
    }
    return accumulator + currentChar;
  }, "");
}

function replaceDoubleVowel(str) {
  return str.replace(/([aeiou]{2})/g, (substring, ...args) => {
    return substring[0];
  });
}

function getPreviousConsonant(char) {
  let prevChar = String.fromCharCode(
    char.charCodeAt() + ([65, 97].includes(char.charCodeAt()) ? 25 : -1)
  );

  if (patternVowels.test(prevChar)) {
    return getPreviousConsonant(prevChar);
  }

  return prevChar;
}

function englishToAlien(english) {
  const doubleVowelStr = english.replace(/([aeiou])/gi, "$1$1");
  const transformedStr = doubleVowelStr.split("").reduce((accumulator, currentChar) => {
    if (!patternVowels.test(currentChar) && patternAlphabet.test(currentChar)) {
      return accumulator + getNextConsonant(currentChar);
    }
    return accumulator + currentChar;
  }, "");
  return `UBCO ${transformedStr}${transformedStr.split(" ").length}`;
}

function getNextConsonant(char) {
  let nextChar = String.fromCharCode(
    char.charCodeAt() + ([90, 122].includes(char.charCodeAt()) ? -25 : 1)
  );

  if (patternVowels.test(nextChar)) {
    return getNextConsonant(nextChar);
  }

  return nextChar;
}
