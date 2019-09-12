import MenuUtil from './_MenuUtil';

/**
 * Finds the option following the active option.
 * @param {ReactNode} children - The node being flattened.
 * @param {string} value - The value of the current active option.
 * @return {ReactNode|null} The ReactNode option. Returns null if not found.
 */
export default function findNextActiveOption(children, value) {
  const options = MenuUtil.flatten(children, true);
  const index = options.findIndex(({ props }) => MenuUtil.isEqual(props.value, value));

  return index >= 0 ? options[Math.min(index + 1, options.length - 1)] : null;
}
