/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {

  'Displays a default signature': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas[class*="signature"]').to.be.present;
  },

  'Draw a line signature and verify canvas': (browser) => {
    const mockedLine = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAACRElEQVR4Xu3awU0DMRBG4UkXlEAbtMEdCqAQCoA7bdAGJVAGClFEgBBsr2f3n5mXs7W25ttn5bA74ycxgZ3EKTiEASHyEgABhMgERI5BEUCITEDkGBQBhMgERI7RU8SDmb2Y2bvI2VMdoxXizsyezOzNzG7AmP8OtEJcmdmrmV2DMR9h/8RWiP1aMHwMPp/aAwGGEAQYThi9RRyPwTU1GWQUgjKEIMCYiLGkCK4pMQjKmAAyowjKEIOgjAUgM4ugDDEIyhgA8SiCMsQgKKMDxLMIyhCDoIwGkDWKoAwxCMq4ALJmEZQhBkEZZ0C2KIIyxCAo4wRkyyIoQwyCMgY+p2n4Rzy8pPQHCQpX06lcWQw1iLLXlCJESQxViHIYyhClMNQhymBEgCiBEQUiPUYkiNQY0SDSYkSESIkRFSIdRmSIVBjRIdJgZIBIgZEFIjxGJojQGNkgwmJkhAiJkRUiHEZmiFAY2SHCYFSACIFRBUIeoxKENEY1CFmMihCSGFUh5DAqQ0hhVIeQwQDi8C365l+hA3GA2BwDiC+ITTGA+A6xGQYQvyE2wQDiPMTqGED8DbEqBhCXIVbDAOJ/iFUwgGiDcMcAoh3CFQOIPgg3DCD6IVwwgBiDmI4BxDjEVAwglkFMwwBiOcQUDCDmQCzGAGIexCIMIOZCDGMAMR9iCAMIH4huDCD8IH5i3JvZ81/bAeELccS4NbPHS1sB4Q/RtAMQTWPyXwSE/4ybdgCiaUz+i4Dwn3HTDkA0jcl/ERD+M27a4QMUUPJjEwy/jgAAAABJRU5ErkJggg==';

    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 10, 10) // Move to offset position of 10(x) 10(y)
      .mouseButtonDown(0)
      .moveToElement('canvas#drawline', 90, 90) // Move to offset position of 10(x) 60(y)
      .mouseButtonUp(0);

    browser
      .execute(() => document.getElementById('drawline').toDataURL(), [], (result) => {
        browser.assert.equal(result.value, mockedLine);
      });
  },

});
