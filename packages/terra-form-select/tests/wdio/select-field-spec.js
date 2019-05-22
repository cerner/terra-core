// const viewports = Terra.viewports('tiny');

// describe('Select Field', () => {
//   describe('should select an option by click', () => {
//     before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

//     Terra.should.beAccessible({ viewports });
//     Terra.should.matchScreenshot({ viewports });

//     it('should open the dropdown by clicking the toggle', () => {
//       browser.click('#select-field:last-child');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//     it('should select the first option', () => {
//       browser.click('#terra-select-option-xSmall');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('selected-option', { viewports });
//   });

//   describe('disabled', () => {
//     it('should render a disabled Select Field', () => {
//       browser.url('/#/raw/tests/terra-form-select/form-select/disabled-select-field');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot();
//   });

//   describe('should select an option by pressing enter', () => {
//     before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

//     Terra.should.beAccessible({ viewports });
//     Terra.should.matchScreenshot({ viewports });

//     it('should open the dropdown by clicking the toggle', () => {
//       browser.click('#select-field:last-child');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//     it('should select the first option by pressing enter', () => {
//       browser.keys('ArrowUp');
//       browser.keys('Enter');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('selected-option', { viewports });
//   });

//   describe('should select the maximum number of items allowed.', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-form-select/form-select/max-selection');
//       // Removes the blinking cursor to prevent screenshot mismatches.
//       browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//     });

//     Terra.should.beAccessible({ viewports });
//     Terra.should.matchScreenshot({ viewports });

//     it('should open the dropdown by clicking the toggle', () => {
//       browser.click('#select-field');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//     it('should select the first option', () => {
//       browser.click('#terra-select-option-blue');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('selected-first-option', { viewports, selector: '#root' });

//     it('should select the second option', () => {
//       browser.click('#terra-select-option-cyan');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('max-selection-count-reached', { viewports, selector: '#root' });

//     it('should unselect the second option', () => {
//       browser.click('#terra-select-option-cyan');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('unselect-second-option', { viewports, selector: '#root' });

//     it('should select the second option again', () => {
//       browser.click('#terra-select-option-green');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('max-selection-count-reached-again', { viewports, selector: '#root' });

//     it('should not be able to select additional options as the max count as reached', () => {
//       browser.keys('ArrowDown');
//       browser.keys('Enter');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('options-disabled', { viewports, selector: '#root' });

//     it('should show the max count text with the help text', () => {
//       browser.keys('Escape');
//     });

//     Terra.should.beAccessible();
//     Terra.should.matchScreenshot('max-selection-count-text', { viewports });
//   });

//   describe('should show the max selection option on search', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-form-select/form-select/max-selection');
//       // Removes the blinking cursor to prevent screenshot mismatches.
//       browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//     });

//     Terra.should.matchScreenshot({ viewports });

//     it('should open the dropdown by clicking the toggle', () => {
//       browser.click('#select-field');
//     });

//     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//     it('should select the first option', () => {
//       browser.click('#terra-select-option-blue');
//       browser.click('#terra-select-option-cyan');
//     });

//     Terra.should.matchScreenshot('max-selection-count-reached', { viewports, selector: '#root' });

//     it('should show the max selection option', () => {
//       browser.keys('x');
//     });

//     Terra.should.matchScreenshot('max-selection-option', { viewports, selector: '#root' });
//   });
// });
