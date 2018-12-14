import {
  calculateHash, getColorVariant, validateColor, setColor,
} from '../../src/common/AvatarUtils';

const alt = 'User';
const hashValue = 'sample hashValue';
const nine = 'nine';
const five = 'five';

describe('AvatarUtils', () => {
  it('should calculate a hash based on a given string', () => {
    const hash = calculateHash(hashValue);

    expect(hash).toEqual(2108909069);
  });

  it('should return a color variant based on a given hashValue', () => {
    const variant = getColorVariant(hashValue);
    const variantTwo = getColorVariant(alt);

    expect(variant).toEqual(nine);
    expect(variantTwo).toEqual(five);
  });

  it('should validate color variants', () => {
    const invalidColor = validateColor('eleven');
    const validColor = validateColor(nine);

    expect(invalidColor).toBeFalsy();
    expect(validColor).toBeTruthy();
  });

  it('should return a color variant, based on precedence of color, hashvalue, and alt values', () => {
    const colorVariant = setColor(alt, nine, hashValue);
    const hashValueVariant = setColor(alt, null, hashValue);
    const altVariant = setColor(alt, null, null);

    expect(colorVariant).toEqual(nine);
    expect(hashValueVariant).toEqual(nine);
    expect(altVariant).toEqual(five);
  });
});
