/**
 * https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
const calculateHash = (s) => {
  let hash = 0;

  if (s.length === 0) {
    return hash;
  }

  /* eslint-disable no-bitwise */
  for (let i = 0; i < s.length; i += 1) {
    const char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash;
};

export default calculateHash;
