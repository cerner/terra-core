
export default function flatten(list = []) {
  if (!Array.isArray(list)) {
    return list;
  }

  return list.reduce((acc, val) => (Array.isArray(val)
    ? acc.concat(flatten(val))
    : acc.concat(val)
  ), []);
}
