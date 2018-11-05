import AvatarUtils from '../../src/common/AvatarUtils';

const alt = 'User';
const hashValue = 'sample hashValue';
const nine = 'nine';
const five = 'five';

describe('AvatarUtils', () => {
  it('should calculate a hash based on a given string', () => {
    const hash = AvatarUtils.calculateHash(hashValue);

    expect(hash).toEqual(2108909069);
  });

  it('should return color variant nine based on given hashValue', () => {
    const variant = AvatarUtils.getColorVariant(hashValue);
    const variantTwo = AvatarUtils.getColorVariant(alt);

    expect(variant).toEqual(nine);
    expect(variantTwo).toEqual(five);
  });

  it('should validate color variants', () => {
    const invalidColor = AvatarUtils.validateColor('eleven');
    const validColor = AvatarUtils.validateColor(nine);

    expect(invalidColor).toBeFalsy();
    expect(validColor).toBeTruthy();
  });

  it('should return a color variant, based on precedence', () => {
    const colorVariant = AvatarUtils.setColor(alt, nine, hashValue);
    const hashValueVariant = AvatarUtils.setColor(alt, null, hashValue);
    const altVariant = AvatarUtils.setColor(alt, null, null);

    expect(colorVariant).toEqual(nine);
    expect(hashValueVariant).toEqual(nine);
    expect(altVariant).toEqual(five);
  });
});
