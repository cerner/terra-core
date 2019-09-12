import MenuUtil from './_MenuUtil';

/**
 * Finds the option preceding the active option.
 * @param {ReactNode} children - The node being flattened.
 * @param {string} value - The value of the current active option.
 * @return {string|null} - The value of the previous option. Returns null if not found.
 */
export default function findPreviousActiveOption(children, value) {
  const options = MenuUtil.flatten(children, true);
  const index = options.findIndex(({ props }) => MenuUtil.isEqual(props.value, value));
  return index === -1 ? null : options[Math.max(index - 1, 0)];
}
