import './breakpoints.scss';

let breakpoints;

/**
 * Translates SASS defined breakpoints into a javascript accessible object
 * @returns {Object} - Returns SASS defined breakpoints in pixels units as key value pairs
 */
const getBreakpoints = () => {
  if (breakpoints) {
    return breakpoints;
  }

  let data;
  const datasource = document.createElement('div');
  datasource.className = 'terra-Breakpoints';

  document.body.appendChild(datasource);

  data = window.getComputedStyle(datasource, ':before').getPropertyValue('content');
  data = data.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');

  breakpoints = JSON.parse(data);

  document.body.removeChild(datasource);

  return breakpoints;
};

export default getBreakpoints;
