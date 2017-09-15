/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default signature': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas[class*="signature"]').to.be.present;
  },

  'Draw a line signature and verify canvas': (browser) => {
    const mockedLine = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAACBUlEQVR4Xu3a4W7CMAxF4fL+D71pQtNAMNKktnNtH35HSuSPkwrR28FHYgI3iVNwiAMIkS8BEECITEDkGBQBhMgERI5BEUCITEDkGBSREOLrOPjd4eU2WwQYThKzED/HAMMBYwUCDCEIMIwxVov4PQbXlBHIVQjKEIIAwwDDogiuKTEIyrgAYlkEZYhBUMYCiEcRlCEGQRkTIJ5FUIYYBGWcAIkogjLEICjjA0hkEZQhBkEZb0B2FEEZYhCU8QCyswjKEIOgDLH3lFr/7apwNT0+utpiqEG0vaYUIVpiqEK0w1CGaIWhDtEGIwNEC4wsEOUxMkGUxsgGURYjI0RJjKwQ5TAyQ5TCyA5RBqMCRAmMKhDpMSpBpMaoBpEWoyJESoyqEOkwKkOkwqgOkQajA0QKjC4Q8hidIKQxukHIYnSEkMToCiGH0RlCCqM7hAwGEPd30be/hQ7EHWI7BhB/EFsxgHiG2IYBxCvEFgwg3kOEYwDxP0QoBhCfIcIwgBhDhGAAcQ7CHQOI8xCuGEDMQbhhADEP4YIBxBqEOQYQ6xCmGEBcgzDDAOI6hAkGEDYQlzGAsIO4hAGELcQyBhD2EEsYQPhATGMA4QcxhQGEL8RpDCD8IU5hABEDMdwFiOGIYhYAETPn4S5ADEcUswCImDkPdwFiOKKYBUDEzHm4CxDDEcUs+AZPWVBjp60diQAAAABJRU5ErkJggg==';

    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 10, 10)
      .mouseButtonDown(0)
      .moveToElement('canvas#drawline', 90, 90)
      .mouseButtonUp(0);

    browser
      .execute(function () {
        return document.getElementById('drawline').toDataURL();
      }, [], function (result) {
        browser.assert.equal(result.value, mockedLine);
      });
  },
});
