/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Form-Textarea', () => {
  describe('TextareaField', () => {
    describe('Valid TextareaField', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/form-textarea/textarea-field');
      });

      Terra.should.matchScreenshot({ viewports });
    });

    describe('Invalid TextareaField', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/form-textarea/textarea-field');
        browser.click('#validity-toggle');
      });

      Terra.should.matchScreenshot({ viewports });
    });
  });
});
