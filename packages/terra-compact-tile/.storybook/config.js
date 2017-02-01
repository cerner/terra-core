/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { configure, setAddon } from '@kadira/storybook';
import withPropsCombinations, { setDefaults } from 'react-storybook-addon-props-combinations';

function loadStories() {
  require('../stories');
}

setAddon(withPropsCombinations);
setDefaults({
  // overwrite global defaults here
});

configure(loadStories, module);
