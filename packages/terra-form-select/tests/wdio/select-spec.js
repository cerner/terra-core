// const viewports = Terra.viewports('tiny');

// describe('Select', () => {
//   describe('Default Variant', () => {
//     describe('default uncontrolled should be closed initially', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });
//     });

//     describe('default should gain focus when tabbed to', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('default should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('tab-focus', { viewports, selector: '#root' });
//     });

//     describe('default should open dropdown by click', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open the dropdown by clicking the select', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('dropdown menu should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should open dropdown by spacebar key press', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('default should open the dropdown by spacebar key press', () => {
//         browser.keys('Space');
//       });

//       it('dropdown menu should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should open dropdown by down arrow key press', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('default should open the dropdown by arrow down key press', () => {
//         browser.keys('ArrowDown');
//       });

//       it('dropdown menu should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should not open dropdown by enter key press', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('default should not open the dropdown by enter key press', () => {
//         browser.keys('Enter');
//       });

//       it('default select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should close when clicking off of the select', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open the dropdown by clicking the select', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

//       it('default should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('select should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should close when clicking off of the select after being opened by toggle icon', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-opened-dropdown', { viewports, selector: '#root' });

//       it('default should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('select should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should close when pressing tab key to shift focus away from select', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should close the dropdown when tabbing focus away from the select', () => {
//         browser.click('[data-terra-select]');
//         browser.keys('Tab');
//       });

//       it('default should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should close when clicking on toggle icon when select is open', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open on click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('dropdown should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       it('default should close on toggle icon click', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('select-closed', { viewports, selector: '#root' });
//     });

//     describe('default should open and close the dropdown by clicking on the select', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open on click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('dropdown should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.matchScreenshot('opened', { viewports, selector: '#root' });

//       it('default should close on subsequent click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed', { viewports, selector: '#root' });
//     });

//     describe('default should open and close the dropdown by clicking on toggle icon', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('dropdown should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-opened-dropdown', { viewports, selector: '#root' });

//       it('default should close the dropdown by clicking the select toggle icon again', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('default should select an option by click', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should select the first option', () => {
//         browser.click('[data-terra-select]');
//         browser.click('#terra-select-option-blue');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('default should select an option by keyboard interaction', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/controlled-default'));

//       it('default should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('Space');
//         browser.keys('Enter');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('default should select an option by click after clicking on toggle icon', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should select the first option', () => {
//         browser.click('[data-terra-form-select-toggle]');
//         browser.click('#terra-select-option-blue');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-selected-option', { viewports, selector: '#root' });
//     });

//     describe('default should select an option by alternative keyboard interaction', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/controlled-default'));

//       it('default should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('Enter');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('default should select an option by pressing enter', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

//       it('default should open the dropdown by clicking the toggle', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('default should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('default should select second option by keyboard interaction', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/controlled-default'));

//       it('default should navigate to second option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('ArrowDown');
//       });

//       it('dropdown menu should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('second-option-highlighted', { viewports, selector: '#root' });

//       it('default should select the second option', () => {
//         browser.keys('Enter');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('default controlled should select an option by click', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/controlled-default'));

//       it('default controlled should open the dropdown by clicking the toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('dropdown should be focused', async () => {
//         (await browser.hasFocus('#terra-select-menu')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('default controlled should select the first option', () => {
//         browser.click('#terra-select-option-green');
//       });

//       it('select should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('default should truncate and wrap long text', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default-long-text'));

//       it('default should open the dropdown by clicking the toggle', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('should render an empty placeholder', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/empty-placeholder'));

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });
//     });

//     describe('should open the dropdown and honor the set max height', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/max-height'));

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('default should open the dropdown by clicking the toggle', () => {
//         browser.click('#maxHeight:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown-max-height', { viewports, selector: '#root' });
//     });

//     describe('default renders an option with a value of zero', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/default-value-zero'));

//       Terra.should.matchScreenshot({ viewports });
//     });
//   });

//   describe('Combobox Variant', () => {
//     describe('combobox should be closed initially', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });
//     });

//     describe('combobox should gain focus when tabbed to', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('tab-focus', { viewports, selector: '#root' });
//     });

//     describe('combobox should open dropdown by spacebar key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('combobox should open the dropdown by spacebar key press', () => {
//         browser.keys('Space');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should open dropdown by down arrow key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('combobox should open the dropdown by arrow down key press', () => {
//         browser.keys('ArrowDown');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should not open dropdown by enter key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('combobox should not open the dropdown by enter key press', () => {
//         browser.keys('Enter');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should close when clicking off of the select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should open the dropdown by clicking the select', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

//       it('combobox should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('combobox should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('combobox input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should close when clicking off of the select after being opened by toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-opened-dropdown', { viewports, selector: '#root' });

//       it('combobox should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('combobox should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('combobox input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should close when pressing tab key to shift focus away from select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should close the dropdown when tabbing focus away from the select', () => {
//         browser.click('[data-terra-select]');
//         browser.keys('Tab');
//       });

//       it('combobox should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('combobox input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should close when clicking on toggle icon when select is open', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should open on click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       it('combobox should close on toggle icon click', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('select-closed', { viewports, selector: '#root' });
//     });

//     describe('combobox should open and close the dropdown by clicking on toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-opened-dropdown', { viewports, selector: '#root' });

//       it('combobox should close the dropdown by clicking the select toggle icon again', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should select an option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('Space');
//         browser.keys('Enter');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('combobox should select an option by click after clicking on toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should select the first option', () => {
//         browser.click('[data-terra-form-select-toggle]');
//         browser.click('#terra-select-option-blue');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-selected-option', { viewports, selector: '#root' });
//     });

//     describe('combobox should select an option by alternative keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('Enter');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('combobox should select second option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('combobox should navigate to second option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('ArrowDown');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('second-option-highlighted', { viewports, selector: '#root' });

//       it('combobox should select the second option', () => {
//         browser.keys('Enter');
//       });

//       it('combobox input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('combobox should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('combobox should open the dropdown by clicking the toggle', () => {
//         browser.click('#combobox:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('combobox should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('combobox should select an option by pressing enter', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('combobox should open the dropdown by clicking the toggle', () => {
//         browser.click('#combobox:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('combobox should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('combobox controlled should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/controlled-combobox');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('combobox controlled should open the dropdown by clicking the toggle', () => {
//         browser.click('#combobox:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('combobox controlled should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('combobox should allow a free text entry', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('combobox should open the dropdown by clicking the toggle', () => {
//         browser.click('#combobox:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('combobox should enter a free text entry', () => {
//         browser.keys(['T', 'a', 'g']);
//       });

//       it('combobox should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });
//   });

//   describe('Multiple Variant', () => {
//     describe('multiple should be closed initially', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });
//     });

//     describe('multiple should gain focus when tabbed to', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('tab-focus', { viewports, selector: '#root' });
//     });

//     describe('multiple should open dropdown by spacebar key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('multiple should open the dropdown by spacebar key press', () => {
//         browser.keys('Space');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should open dropdown by down arrow key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('multiple should open the dropdown by arrow down key press', () => {
//         browser.keys('ArrowDown');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should not open dropdown by enter key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('multiple should not open the dropdown by enter key press', () => {
//         browser.keys('Enter');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should close when clicking off of the select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should open the dropdown by clicking the select', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

//       it('multiple should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('multiple should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('multiple input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should close when clicking off of the select after being opened by toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-opened-dropdown', { viewports, selector: '#root' });

//       it('multiple should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('multiple should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('multiple input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should close when pressing tab key to shift focus away from select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should close the dropdown when tabbing focus away from the select', () => {
//         browser.click('[data-terra-select]');
//         browser.keys('Tab');
//       });

//       it('multiple should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('multiple input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should close when clicking on toggle icon when select is open', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should open on click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       it('multiple should close on toggle icon click', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('select-closed', { viewports, selector: '#root' });
//     });

//     describe('multiple should open and close the dropdown by clicking on toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-opened-dropdown', { viewports, selector: '#root' });

//       it('multiple should close the dropdown by clicking the select toggle icon again', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('multiple should select an option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('Space');
//         browser.keys('Enter');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('multiple should select an option by alternative keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('Enter');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('multiple should select second option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('multiple should navigate to second option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('ArrowDown');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('second-option-highlighted', { viewports, selector: '#root' });

//       it('multiple should select the second option', () => {
//         browser.keys('Enter');
//       });

//       it('multiple input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('multiple should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('multiple should open the dropdown by clicking the toggle', () => {
//         browser.click('#multiple:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('multiple should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('multiple should select an option by pressing enter', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('multiple should open the dropdown by clicking the toggle', () => {
//         browser.click('#multiple:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('multiple should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('multiple controlled should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/controlled-multiple');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('multiple controlled should open the dropdown by clicking the toggle', () => {
//         browser.click('#multiple:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('multiple controlled should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });
//   });

//   describe('Search Variant', () => {
//     describe('search should be closed initially', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });
//     });

//     describe('search should gain focus when tabbed to', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('tab-focus', { viewports, selector: '#root' });
//     });

//     describe('search should open dropdown by spacebar key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('search should open the dropdown by spacebar key press', () => {
//         browser.keys('Space');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should open dropdown by down arrow key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('search should open the dropdown by arrow down key press', () => {
//         browser.keys('ArrowDown');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should not open dropdown by enter key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('search should not open the dropdown by enter key press', () => {
//         browser.keys('Enter');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should close when clicking off of the select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should open the dropdown by clicking the select', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

//       it('search should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('search should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('search input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should close when clicking off of the select after being opened by toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-opened-dropdown', { viewports, selector: '#root' });

//       it('search should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('search should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('search input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should close when pressing tab key to shift focus away from select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should close the dropdown when tabbing focus away from the select', () => {
//         browser.click('[data-terra-select]');
//         browser.keys('Tab');
//       });

//       it('search should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('search input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should close when clicking on toggle icon when select is open', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should open on click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       it('search should close on toggle icon click', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('select-closed', { viewports, selector: '#root' });
//     });

//     describe('search should open and close the dropdown by clicking on toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-opened-dropdown', { viewports, selector: '#root' });

//       it('search should close the dropdown by clicking the select toggle icon again', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('search should select an option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('Space');
//         browser.keys('Enter');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('search should select an option by click after clicking on toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should select the first option', () => {
//         browser.click('[data-terra-form-select-toggle]');
//         browser.click('#terra-select-option-blue');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-selected-option', { viewports, selector: '#root' });
//     });

//     describe('search should select an option by alternative keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('Enter');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('search should select second option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('search should navigate to second option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('ArrowDown');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('second-option-highlighted', { viewports, selector: '#root' });

//       it('search should select the second option', () => {
//         browser.keys('Enter');
//       });

//       it('search input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('search should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('should set the screen reader aria live region to blank', () => {
//         expect(browser.getText('[data-terra-select-combobox] [aria-live]')).to.equal('');
//       });

//       it('search should open the dropdown by clicking the toggle', () => {
//         browser.click('#search:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('search should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('search should display no matching results when free text is entered and no matching option exists', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       it('search should open the dropdown by clicking the toggle', () => {
//         browser.click('#search:last-child');
//       });

//       it('search should enter a free text entry that does not match', () => {
//         browser.keys(['a', 's', 'd', 'f']);
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('no-matching-results', { viewports, selector: '#root' });
//     });

//     describe('search should select an option by pressing enter', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('search should open the dropdown by clicking the toggle', () => {
//         browser.click('#search:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('search should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('search controlled should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/controlled-search');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('search constrolled should open the dropdown by clicking the toggle', () => {
//         browser.click('#search:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('search constrolled should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });
//   });

//   describe('Tag Variant', () => {
//     describe('tag should be closed initially', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });
//     });

//     describe('tag should gain focus when tabbed to', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('tab-focus', { viewports, selector: '#root' });
//     });

//     describe('tag should open dropdown by spacebar key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('tag should open the dropdown by spacebar key press', () => {
//         browser.keys('Space');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('tag should open dropdown by down arrow key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('tag should open the dropdown by arrow down key press', () => {
//         browser.keys('ArrowDown');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
//     });

//     describe('combobox should deselect the selected item when clicking on the clear option.', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/allow-clear');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('combobox should open the dropdown by clicking the toggle', () => {
//         browser.click('#allowclear:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('combobox should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });

//       it('combobox should open the dropdown by clicking the toggle again', () => {
//         browser.click('#allowclear:last-child');
//       });

//       it('combobox should select the clear option', () => {
//         browser.click('#terra-select-option-');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-clear-option', { viewports });
//     });

//     describe('tag should not open dropdown by enter key press', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('should tab focus to the select', () => {
//         browser.keys('Tab');
//       });

//       it('tag should not open the dropdown by enter key press', () => {
//         browser.keys('Enter');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('tag should close when clicking off of the select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should open the dropdown by clicking the select', () => {
//         browser.click('[data-terra-select]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

//       it('tag should close the dropdown by clicking off the select', () => {
//         browser.click('#root');
//       });

//       it('tag should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('tag input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('tag should close when pressing tab key to shift focus away from select', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should close the dropdown when tabbing focus away from the select', () => {
//         browser.click('[data-terra-select]');
//         browser.keys('Tab');
//       });

//       it('tag should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
//       });

//       it('tag input should not be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('tag should close when clicking on toggle icon when select is open', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should open on click', () => {
//         browser.click('[data-terra-select]');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       it('tag should close on toggle icon click', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('select-closed', { viewports, selector: '#root' });
//     });

//     describe('tag should open and close the dropdown by clicking on toggle icon', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should open the dropdown by clicking the select toggle icon', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-opened-dropdown', { viewports, selector: '#root' });

//       it('tag should close the dropdown by clicking the select toggle icon again', () => {
//         browser.click('[data-terra-form-select-toggle]');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('toggle-icon-closed-dropdown', { viewports, selector: '#root' });
//     });

//     describe('tag should select an option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('Space');
//         browser.keys('Enter');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('tag should select an option by alternative keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should select the first option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('Enter');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('tag should select second option by keyboard interaction', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         browser.execute(() => {
//           // Removes the blinking cursor to prevent screenshot mismatches.
//           document.querySelector('input').style.caretColor = 'transparent';
//         });
//       });

//       it('tag should navigate to second option', () => {
//         browser.keys('Tab');
//         browser.keys('ArrowDown');
//         browser.keys('ArrowDown');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('second-option-highlighted', { viewports, selector: '#root' });

//       it('tag should select the second option', () => {
//         browser.keys('Enter');
//       });

//       it('tag input should be focused', async () => {
//         (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports, selector: '#root' });
//     });

//     describe('tag should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('tag should open the dropdown by clicking the toggle', () => {
//         browser.click('#tag:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('tag should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('tag should select an option by pressing enter', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('tag should open the dropdown by clicking the toggle', () => {
//         browser.click('#tag:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('tag should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('tag controlled should select an option by click', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/controlled-tag');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('tag controlled should open the dropdown by clicking the toggle', () => {
//         browser.click('#tag:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('tag controlled should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });

//     describe('tag should allow a free text entry', () => {
//       before(() => {
//         browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
//         // Removes the blinking cursor to prevent screenshot mismatches.
//         browser.execute('document.querySelector("input").style.caretColor = "transparent";');
//       });

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('tag should open the dropdown by clicking the toggle', () => {
//         browser.click('#tag:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('tag should enter a free text entry', () => {
//         browser.keys(['T', 'a', 'g']);
//       });

//       it('tag should select the first option by pressing enter', () => {
//         browser.keys('Enter');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });
//   });

//   describe('OptGroup', () => {
//     describe('should render an optgroup', () => {
//       before(() => browser.url('/#/raw/tests/terra-form-select/form-select/opt-group'));

//       Terra.should.beAccessible({ viewports });
//       Terra.should.matchScreenshot({ viewports });

//       it('should open the dropdown by clicking the toggle', () => {
//         browser.click('#opt-group:last-child');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

//       it('should select the first option', () => {
//         browser.click('#terra-select-option-blue');
//       });

//       Terra.should.beAccessible();
//       Terra.should.matchScreenshot('selected-option', { viewports });
//     });
//   });
// });
