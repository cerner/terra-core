const generateMarkdown = require('../../bin/generateMarkdown');

const invalidInput = {};
const validInput = {props: "test"};

describe('generateMarkdown with invalid input', () => {
  it('should throw an error', () => {
    expect(() => {
      generateMarkdown(invalidInput);
    }).toThrow();
  });
});
