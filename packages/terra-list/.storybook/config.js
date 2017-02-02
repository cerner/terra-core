/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { configure, setAddon } from '@kadira/storybook';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

function loadStories() {
  require('../stories');
}

setAddon(withPropsCombinations);

configure(loadStories, module);
