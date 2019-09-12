import MenuUtil from './_MenuUtil';

/**
 * Finds the active option
 * @param {ReactNode} children - The menu children.
 * @param {object} options - options object
 * @param {ReactNode} options.activeOption - The current active option ReactNode
 * @param {string} options.value - The select's current value
 * @return {ReactNode|null} The ReactNode active option. Returns null if not found.
 */
export default function findActiveOption(children, { activeOption = null, value = '' } = {}) {
  const options = MenuUtil.flatten(children, true);

  // no options => no activeOption
  if (options.length === 0) {
    return null;
  }

  // activeOption exists and is in the given options list
  if (activeOption !== null && options.find(option => MenuUtil.isEqual(option.props.value, activeOption.props.value))) {
    return activeOption;
  }

  // activeOption should default to the selected value, if present
  // Array.prototype.find returns `undefined` if not found
  const selectedOption = options.find(option => (Array.isArray(value)
    ? MenuUtil.includes(value, option.props.value)
    : MenuUtil.isEqual(value, option.props.value)));

  return selectedOption !== undefined ? selectedOption : options[0];
}
