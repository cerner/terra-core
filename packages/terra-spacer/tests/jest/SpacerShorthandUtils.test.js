import { shorthandValidator, mapShorthandToObject, ShorthandPropErrors } from '../../src/_spacerShorthandUtils';
import { SpacerSizes } from '../../src/_spacerConstants';

describe('_spacerShorthandUtils', () => {
  describe('shorthandValidator', () => {
    it('should return an error about existing, conflicting prop names', () => {
      const props = { margin: SpacerSizes.LARGE, marginTop: SpacerSizes.LARGE };
      const expectedError = ShorthandPropErrors.conflictingPropName('margin', 'marginTop');
      const validatorOutput = shorthandValidator(props, 'margin');
      expect(validatorOutput).toEqual(expectedError);
    });

    it('should return an error when too few shorthand arguments are supplied', () => {
      const props = { margin: '' };
      const expectedError = ShorthandPropErrors.invalidShorthandLength('margin', 0);
      const validatorOutput = shorthandValidator(props, 'margin');
      expect(validatorOutput).toEqual(expectedError);
    });

    it('should return an error when too many shorthand arguments are supplied', () => {
      const props = { margin: `${SpacerSizes.LARGE} `.repeat(5).trim() };
      const expectedError = ShorthandPropErrors.invalidShorthandLength('margin', 5);
      const validatorOutput = shorthandValidator(props, 'margin');
      expect(validatorOutput).toEqual(expectedError);
    });

    it('should return an error when unrecognized arguments are passed for spacer sizing', () => {
      const invalidArgs = ['yellow', 'red', 'blue'];
      const props = { margin: invalidArgs.join(' ') };
      const expectedError = ShorthandPropErrors.invalidShorthandArg('margin', invalidArgs);
      const validatorOutput = shorthandValidator(props, 'margin');
      expect(validatorOutput).toEqual(expectedError);
    });
  });

  describe('mapShorthandToObject', () => {
    it('should properly map 1 valid `SpacerSizes` value to an object with all four cardinal directions set.', () => {
      const shorthandValue = SpacerSizes.SMALL;
      const expectedOutput = {
        paddingTop: SpacerSizes.SMALL,
        paddingRight: SpacerSizes.SMALL,
        paddingBottom: SpacerSizes.SMALL,
        paddingLeft: SpacerSizes.SMALL,
      };
      const mapperOutput = mapShorthandToObject('padding', shorthandValue);
      expect(mapperOutput).toMatchObject(expectedOutput);
    });

    it('should properly map 2 valid `SpacerSizes` value to an object with all four cardinal directions set.', () => {
      const shorthandValue = `${SpacerSizes.SMALL} ${SpacerSizes.LARGE}`;
      const expectedOutput = {
        paddingTop: SpacerSizes.SMALL,
        paddingRight: SpacerSizes.LARGE,
        paddingBottom: SpacerSizes.SMALL,
        paddingLeft: SpacerSizes.LARGE,
      };
      const mapperOutput = mapShorthandToObject('padding', shorthandValue);
      expect(mapperOutput).toMatchObject(expectedOutput);
    });

    it('should properly map 3 valid `SpacerSizes` value to an object with all four cardinal directions set.', () => {
      const shorthandValue = `${SpacerSizes.SMALL} ${SpacerSizes.MEDIUM} ${SpacerSizes.LARGE}`;
      const expectedOutput = {
        paddingTop: SpacerSizes.SMALL,
        paddingRight: SpacerSizes.MEDIUM,
        paddingBottom: SpacerSizes.LARGE,
        paddingLeft: SpacerSizes.MEDIUM,
      };
      const mapperOutput = mapShorthandToObject('padding', shorthandValue);
      expect(mapperOutput).toMatchObject(expectedOutput);
    });

    it('should properly map 4 valid `SpacerSizes` value to an object with all four cardinal directions set.', () => {
      const shorthandValue = `${SpacerSizes.SMALL} ${SpacerSizes.MEDIUM} ${SpacerSizes.LARGE} ${SpacerSizes['LARGE+1']}`;
      const expectedOutput = {
        paddingTop: SpacerSizes.SMALL,
        paddingRight: SpacerSizes.MEDIUM,
        paddingBottom: SpacerSizes.LARGE,
        paddingLeft: SpacerSizes['LARGE+1'],
      };
      const mapperOutput = mapShorthandToObject('padding', shorthandValue);
      expect(mapperOutput).toMatchObject(expectedOutput);
    });
  });
});
