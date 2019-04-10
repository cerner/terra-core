/* eslint-disable import/no-extraneous-dependencies */
import parseCsv from '../icon-utils/parseCsv';
import generateThemeableIcons from './generateThemeableIcons';
import generateStaticIcons from './generateStaticIcons';
/* eslint-enable import/no-extraneous-dependencies */

parseCsv()
  .then(generateStaticIcons)
  .then(generateThemeableIcons);
