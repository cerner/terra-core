/* global browser, Terra */
describe('Form-Textarea', () => {
  describe('TextareaField', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/form-textarea/textarea-field');
    });

    Terra.should.matchScreenshot();
  });
});
