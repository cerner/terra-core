/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['small'], {
  // Verifty contentAttachment = "top left"
  '[1] Display correctly for contentAttachment="top left" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-top-left`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[2] Display correctly for contentAttachment="top left" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[3] Display correctly for contentAttachment="top left" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[4] Display correctly for contentAttachment="top left" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[5] Display correctly for contentAttachment="top left" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[6] Display correctly for contentAttachment="top left" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[7] Display correctly for contentAttachment="top left" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  '[8] Display correctly for contentAttachment="top left" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  '[9] Display correctly for contentAttachment="top left" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

    // Verifty contentAttachment = "top center"
  '[10] Display correctly for contentAttachment="top center" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-top-center`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[11] Display correctly for contentAttachment="top center" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[12] Display correctly for contentAttachment="top center" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[13] Display correctly for contentAttachment="top center" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[14] Display correctly for contentAttachment="top center" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[15] Display correctly for contentAttachment="top center" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[16] Display correctly for contentAttachment="top center" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  '[17] Display correctly for contentAttachment="top center" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  '[18] Display correctly for contentAttachment="top center" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  // Verifty contentAttachment = "top right"
  '[19] Display correctly for contentAttachment="top right" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-top-right`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[20] Display correctly for contentAttachment="top right" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[21] Display correctly for contentAttachment="top right" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[22] Display correctly for contentAttachment="top right" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[23] Display correctly for contentAttachment="top right" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[24] Display correctly for contentAttachment="top right" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[25] Display correctly for contentAttachment="top right" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  '[26] Display correctly for contentAttachment="top right" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  '[27] Display correctly for contentAttachment="top right" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 91);
    });
  },

  // Verifty contentAttachment = "middle left"
  '[28] Display correctly for contentAttachment="middle left" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-middle-left`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[29] Display correctly for contentAttachment="middle left" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[30] Display correctly for contentAttachment="middle left" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[31] Display correctly for contentAttachment="middle left" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[32] Display correctly for contentAttachment="middle left" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[33] Display correctly for contentAttachment="middle left" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[34] Display correctly for contentAttachment="middle left" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[35] Display correctly for contentAttachment="middle left" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[36] Display correctly for contentAttachment="middle left" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  // Verifty contentAttachment = "middle center"
  '[37] Display correctly for contentAttachment="middle center" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-middle-center`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[38] Display correctly for contentAttachment="middle center" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[39] Display correctly for contentAttachment="middle center" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[40] Display correctly for contentAttachment="middle center" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[41] Display correctly for contentAttachment="middle center" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[42] Display correctly for contentAttachment="middle center" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[43] Display correctly for contentAttachment="middle center" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[44] Display correctly for contentAttachment="middle center" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[45] Display correctly for contentAttachment="middle center" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  // Verifty contentAttachment = "middle right"
  '[46] Display correctly for contentAttachment="middle right" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-middle-right`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[47] Display correctly for contentAttachment="middle right" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[48] Display correctly for contentAttachment="middle right" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[49] Display correctly for contentAttachment="middle right" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[50] Display correctly for contentAttachment="middle right" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[51] Display correctly for contentAttachment="middle right" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[52] Display correctly for contentAttachment="middle right" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[53] Display correctly for contentAttachment="middle right" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  '[54] Display correctly for contentAttachment="middle right" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35/2 (half content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 73.5);
    });
  },

  // Verifty contentAttachment = "bottom left"
  '[55] Display correctly for contentAttachment="bottom left" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-bottom-left`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[56] Display correctly for contentAttachment="bottom left" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[57] Display correctly for contentAttachment="bottom left" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[58] Display correctly for contentAttachment="bottom left" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[59] Display correctly for contentAttachment="bottom left" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[60] Display correctly for contentAttachment="bottom left" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[61] Display correctly for contentAttachment="bottom left" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[62] Display correctly for contentAttachment="bottom left" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 271);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[63] Display correctly for contentAttachment="bottom left" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 321);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  // Verifty contentAttachment = "bottom center"
  '[64] Display correctly for contentAttachment="bottom center" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-bottom-center`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[65] Display correctly for contentAttachment="bottom center" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[66] Display correctly for contentAttachment="bottom center" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[67] Display correctly for contentAttachment="bottom center" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[68] Display correctly for contentAttachment="bottom center" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[69] Display correctly for contentAttachment="bottom center" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[70] Display correctly for contentAttachment="bottom center" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[71] Display correctly for contentAttachment="bottom center" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 171);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[72] Display correctly for contentAttachment="bottom center" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200/2 (half content width) + 100 (targt width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 221);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  // Verifty contentAttachment = "bottom right"
  '[73] Display correctly for contentAttachment="bottom right" & targetAttachment="top left"': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/hookshot-tests/content-attachment-bottom-right`);
    browser.click('#attach-TL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[74] Display correctly for contentAttachment="bottom right" & targetAttachment="top center"': (browser) => {
    browser.click('#attach-TC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[75] Display correctly for contentAttachment="bottom right" & targetAttachment="top right"': (browser) => {
    browser.click('#attach-TR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 21);
    });
  },

  '[76] Display correctly for contentAttachment="bottom right" & targetAttachment="middle left"': (browser) => {
    browser.click('#attach-ML');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[77] Display correctly for contentAttachment="bottom right" & targetAttachment="middle center"': (browser) => {
    browser.click('#attach-MC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[78] Display correctly for contentAttachment="bottom right" & targetAttachment="middle right"': (browser) => {
    browser.click('#attach-MR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35/2 (half target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 38.5);
    });
  },

  '[79] Display correctly for contentAttachment="bottom right" & targetAttachment="bottom left"': (browser) => {
    browser.click('#attach-BL');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 21);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[80] Display correctly for contentAttachment="bottom right" & targetAttachment="bottom center"': (browser) => {
    browser.click('#attach-BC');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100/2 (half target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 71);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },

  '[81] Display correctly for contentAttachment="bottom right" & targetAttachment="bottom right"': (browser) => {
    browser.click('#attach-BR');
    browser.expect.element('#attachment-content').to.be.present;
    // x value calculation: value = 220 (margin) - 200 (content width) + 100 (target width) + 1
    // y value calculation: value =  55 (margin) - 35 (content height) + 35 (target height) + 1
    browser.getLocation('#attachment-content', (coordinates) => {
      browser.assert.equal(coordinates.value.x, 121);
      browser.assert.equal(coordinates.value.y, 56);
    });
  },
});
