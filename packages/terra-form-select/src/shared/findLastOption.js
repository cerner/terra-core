import MenuUtil from './_MenuUtil';

/**
 * Finds the first option in the menu options.
 * @param {ReactNode} children - The menu children.
 * @return {ReactNode|null} The last ReactNode option. Returns null if not found.
 */
export default function findLastOption(children) {
  const options = MenuUtil.flatten(children, true);

  if (options.length > 0) {
    return options[options.length - 1];
  }
  return null;
}
