const translateService = require('./translate.service');

describe('test translate function', () => {
  test('translateToEnglish from "UBCO Jeemmoo Xoosmf2" must return "Hello World"', () => {
    expect(translateService.translateToEnglish('UBCO Jeemmoo Xoosmf2')).toBe(
      'Hello World'
    );
  });

  test('englishToAlien from "UBCO Mooseen iiqtuun foomoos tiiv aaneev, doopteedveevuus aafiiqiitdiiph eemiiv.8" must return "Lorem ipsum dolor sit amet, consectetur adipiscing elit."', () => {
    expect(
      translateService.translateToEnglish(
        'UBCO Mooseen iiqtuun foomoos tiiv aaneev, doopteedveevuus aafiiqiitdiiph eemiiv.8'
      )
    ).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

  test('englishToAlien from "Lorem ipsum dolor sit amet, consectetur adipiscing elit." must return "UBCO Mooseen iiqtuun foomoos tiiv aaneev, doopteedveevuus aafiiqiitdiiph eemiiv.8"', () => {
    expect(
      translateService.englishToAlien(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    ).toBe(
      'UBCO Mooseen iiqtuun foomoos tiiv aaneev, doopteedveevuus aafiiqiitdiiph eemiiv.8'
    );
  });

  test('translateToEnglish from "Hello World" must return "UBCO Jeemmoo Xoosmf2"', () => {
    expect(translateService.englishToAlien('Hello World')).toBe(
      'UBCO Jeemmoo Xoosmf2'
    );
  });
});

describe('test replaceDoubleVowel function', () => {
  test('replaceDoubleVowel get "SSaaaa" must return "SSaa"', () => {
    expect(translateService.replaceDoubleVowel('SSaaaa')).toBe('SSaa');
  });
});

describe('test getPreviousConsonant function', () => {
  test('getPreviousConsonant get "Z" must return "Y"', () => {
    expect(translateService.getPreviousConsonant('Z')).toBe('Y');
  });
});

describe('test getNextConsonant function', () => {
  test('getNextConsonant get "Z" must return "B"', () => {
    expect(translateService.getNextConsonant('Z')).toBe('B');
  });
});
