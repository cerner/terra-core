/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
