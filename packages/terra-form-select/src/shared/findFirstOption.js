import MenuUtil from './_MenuUtil';

/**
 * Finds the first option in the menu options.
 * @param {ReactNode} children - The menu children.
 * @return {ReactNode|null} The first ReactNode option. Returns null if not found.
 */
export default function findFirstOption(children) {
  const options = MenuUtil.flatten(children, true);

  if (options.length > 0) {
    return options[0];
  }
  return null;
}
