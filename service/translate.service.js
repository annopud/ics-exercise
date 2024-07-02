const patternVowels = /^[aeiou]$/i;
const patternAlphabet = /^[a-z]$/i;
const patternForUbco = /^UBCO (?:(0)|((?:.|\n)*?)([1-9]\d*))$/;

function englishAlienTranslator(body) {
  const inputText = body.message;
  if (!inputText) {
    return {
      from: null,
      to: null,
      result: null,
      error:
        'Please provide a valid input | UBCO Qmeeaatee qsoowiifee aa waamiif iipquuv5',
    };
  }

  const result = inputText.match(patternForUbco);
  const wordCountResult = wordCount(inputText);

  if (
    !result ||
    wordCountResult.actualWordCount !== wordCountResult.userWordCount
  ) {
    return {
      from: 'English',
      to: 'UBCO',
      result: englishToAlien(inputText),
      warning:
        wordCountResult.actualWordCount !== wordCountResult.userWordCount
          ? `We assumed you have entered message in English : The actual word count is ${wordCountResult.actualWordCount} but you provided ${wordCountResult.userWordCount}`
          : null,
    };
  }

  return {
    from: 'UBCO',
    to: 'English',
    result: translateToEnglish(inputText),
    warning:
      wordCountResult.actualWordCount !== wordCountResult.userWordCount
        ? `The actual word count is ${wordCountResult.actualWordCount} but you provided ${wordCountResult.userWordCount}`
        : null,
  };
}

function wordCount(alienFormat) {
  const result = alienFormat.match(patternForUbco);
  if (!result) {
    return {
      actualWordCount: 0,
      userWordCount: 0,
    };
  }
  return {
    actualWordCount: result[2].split(' ').length,
    userWordCount: +result[3],
  };
}

function translateToEnglish(alienFormat) {
  const matchResult = alienFormat.match(patternForUbco);
  if (!matchResult) return null;

  const noDoubleVowelStr = replaceDoubleVowel(matchResult[2]);
  return noDoubleVowelStr.split('').reduce((accumulator, currentChar) => {
    if (!patternVowels.test(currentChar) && patternAlphabet.test(currentChar)) {
      return accumulator + getPreviousConsonant(currentChar);
    }
    return accumulator + currentChar;
  }, '');
}

function replaceDoubleVowel(str) {
  return str.replace(/([aeiou]{2})/gi, (substring, ...args) => {
    return substring[0];
  });
}

function getPreviousConsonant(char) {
  const prevChar = String.fromCharCode(
    char.charCodeAt() + ([65, 97].includes(char.charCodeAt()) ? 25 : -1)
  );

  if (patternVowels.test(prevChar)) {
    return getPreviousConsonant(prevChar);
  }

  return prevChar;
}

function englishToAlien(english) {
  const doubleVowelStr = english.replace(/([aeiou])/gi, '$1$1');
  const transformedStr = doubleVowelStr
    .split('')
    .reduce((accumulator, currentChar) => {
      if (
        !patternVowels.test(currentChar) &&
        patternAlphabet.test(currentChar)
      ) {
        return accumulator + getNextConsonant(currentChar);
      }
      return accumulator + currentChar;
    }, '');
  return `UBCO ${transformedStr}${transformedStr.split(' ').length}`;
}

function getNextConsonant(char) {
  const nextChar = String.fromCharCode(
    char.charCodeAt() + ([90, 122].includes(char.charCodeAt()) ? -25 : 1)
  );

  if (patternVowels.test(nextChar)) {
    return getNextConsonant(nextChar);
  }

  return nextChar;
}

const services = {
  englishAlienTranslator,
  translateToEnglish,
  englishToAlien,
  replaceDoubleVowel,
  getPreviousConsonant,
  getNextConsonant,
};

module.exports = services;
