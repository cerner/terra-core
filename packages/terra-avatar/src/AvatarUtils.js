// const Variants = {
//   AUTO: 'auto',
//   NEUTRAL: 'neutral',
//   ONE: 'one',
//   TWO: 'two',
//   THREE: 'three',
//   FOUR: 'four',
//   FIVE: 'five',
//   SIX: 'six',
//   SEVEN: 'seven',
//   EIGHT: 'eight',
//   NINE: 'nine',
//   TEN: 'ten',
// };
// /**
//  * Map that contains automated color variants.
//  */
// const VariantsMap = new Map([
//   [1, Variants.ONE],
//   [2, Variants.TWO],
//   [3, Variants.THREE],
//   [4, Variants.FOUR],
//   [5, Variants.FIVE],
//   [6, Variants.SIX],
//   [7, Variants.SEVEN],
//   [8, Variants.EIGHT],
//   [9, Variants.NINE],
//   [10, Variants.TEN],
// ]);

/**
 * Map that contains automated color variants.
 */
// const VariantsMap = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
//   [4, 'four'],
//   [5, 'five'],
//   [6, 'six'],
//   [7, 'seven'],
//   [8, 'eight'],
//   [9, 'nine'],
//   [10, 'ten'],
// ]);

const Variants = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

// const createVariantsMap = (object) {
//   for( let key in object ) {

//   }
// }

/**
 * Calculates a hash, based on a given string s.
 * @param {*} s
 */
const calculateHash = (s) => {
  let hash = 0;
  let char;

  if (s.trim().length === 0) {
    return hash;
  }

  /* eslint-disable no-bitwise */
  for (let i = 0; i < s.length; i += 1) {
    char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    // Convert to 32bit integer
    hash &= hash;
  }

  // Always return positive hash
  return Math.abs(hash);
};

/**
 *  Returns a color variant, based on a given hash.
 * @param {*} hash
 */
const getVariant = (hash) => {
  const size = Variants.length - 1;
  const index = hash % size;
  return Variants[index];
};


const Utils = {
  Variants,
  // VariantsMap,
  calculateHash,
  getVariant,
};

export default Utils;
