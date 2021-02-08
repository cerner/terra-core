Terra.describeViewports('Select', ['tiny'], () => {
  it('should render an empty placeholder', () => {
    browser.url('/raw/tests/terra-form-select/form-select/empty-placeholder');

    Terra.validates.element('empty placeholder');
  });

  it('should render a placeholder', () => {
    browser.url('/raw/tests/terra-form-select/form-select/default-placeholder');

    Terra.validates.element('placeholder');
  });

  describe('open the dropdown and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/max-height'));

    it('should open the dropdown and honor the set max height', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#maxHeight:last-child');

      Terra.validates.element('open-dropdown-max-height', { selector: '#root' });
    });
  });

  it('should renders an option with a default value of zero', () => {
    browser.url('/raw/tests/terra-form-select/form-select/default-value-zero');

    Terra.validates.element('default value of zero');
  });

  describe('default should truncate and wrap long text', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-default-long-text'));

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-select]');

      Terra.validates.element('open-dropdown', { selector: '#root' });
    });
  });

  describe('Default Variant - uncontrolled', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-default'));

    describe('default uncontrolled should be closed initially', () => {
      it('should display closed dropdown', () => {
        Terra.validates.element('default');
      });
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display tab focus on the Default select', () => {
        Terra.validates.element('tab-focus', { selector: '#root' });
      });
    });

    describe('default should open dropdown by click', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
      });

      it('dropdown menu should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('dropdown menu should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('dropdown menu should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('default select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('default should close when clicking off of the select', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.moveToObject('#terra-select-option-green'); // add to ensure consistent hover styles

        Terra.validates.element('opened-dropdown', { selector: '#root' });
      });

      it('default should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('select should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('default should close when clicking off of the select after being opened by toggle icon', () => {
      it('default should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
        browser.moveToObject('#terra-select-option-green'); // add to ensure consistent hover styles

        Terra.validates.element('toggle-opened-dropdown', { selector: '#root' });
      });

      it('default should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('select should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('default should close when pressing tab key to shift focus away from select', () => {
      it('default should close the dropdown when tabbing focus away from the select', () => {
        browser.click('[data-terra-select]');
        browser.keys('Tab');
      });

      it('default should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('default should close when clicking on toggle icon when select is open', () => {
      it('default should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('dropdown should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('default should close on toggle icon click', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });
      it('should display closed dropdown', () => {
        Terra.validates.element('select-closed', { selector: '#root' });
      });
    });

    describe('default should open and close the dropdown by clicking on the select', () => {
      it('default should open on click', () => {
        browser.click('[data-terra-select]');
        browser.moveToObject('#terra-select-option-green'); // add to ensure consistent hover styles
      });

      it('dropdown should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display opened dropdown', () => {
        Terra.validates.element('opened', { selector: '#root' });
      });

      it('default should close on subsequent click', () => {
        browser.click('[data-terra-select]');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed', { selector: '#root' });
      });
    });

    describe('default should open and close the dropdown by clicking on toggle icon', () => {
      it('default should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
        browser.moveToObject('#terra-select-option-green'); // add to ensure consistent hover styles
      });

      it('dropdown should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('default should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('toggle-icon-closed-dropdown', { selector: '#root' });
      });
    });

    describe('default should select an option by click', () => {
      it('default should select the first option', () => {
        browser.click('[data-terra-select]');
        browser.click('#terra-select-option-blue');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should select an option by click after clicking on toggle icon', () => {
      it('default should select the first option', () => {
        browser.click('[data-terra-form-select-toggle]');
        browser.click('#terra-select-option-blue');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('toggle-icon-selected-option', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should select an option by pressing enter', () => {
      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('default should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });
    });

    describe('default should open dropdown by click after initial selection', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#terra-select-option-blue');
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown after selection', () => {
        Terra.validates.element('open-dropdown-after-selection', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should open dropdown and ensure selected option is hovered', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#root');
        browser.click('[data-terra-select]');
      });

      it('should display hovered selected option', () => {
        Terra.validates.element('default-selected-and-hovered', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });

  describe('Default Variant - Multiple Dropdown', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/multiple-default-select'));
    describe('default should close all dropdown and open the selected dropdown', () => {
      it('default should open the dropdown by clicking the select and close other dropdown', () => {
        browser.click('[class*=left-select]');
        browser.click('[class*=right-select]');
      });

      it('should close and open dropdown after selection', () => {
        Terra.validates.element('close-and-open-dropdown-after-selection', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });

  describe('Default Variant - controlled', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/controlled-default'));

    describe('default should select an option by keyboard interaction', () => {
      it('default should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default should select an option by alternative keyboard interaction', () => {
      it('default should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('default controlled should select an option by click', () => {
      it('default controlled should open the dropdown by clicking the toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
        browser.moveToObject('#terra-select-option-blue'); // add to ensure consistent hover styles
      });

      it('dropdown should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('default controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => browser.click('#root'));
    });

    describe('default should select second option by keyboard interaction', () => {
      it('default should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('dropdown menu should be focused', async () => {
        (await browser.hasFocus('[class*=menu]')).should.be.true;
      });

      it('should display second option highlighted', () => {
        Terra.validates.element('second-option-highlighted', { selector: '#root' });
      });

      it('default should select the second option', () => {
        browser.keys('Enter');
      });

      it('select should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.true;
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });
    });
  });

  describe('Combobox Variant - uncontrolled', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
    });

    describe('combobox should be closed initially', () => {
      it('should display closed combobox', () => {
        Terra.validates.element('default');
      });

      after(() => browser.click('#root'));
    });

    describe('combobox should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox input should be focused', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;

        Terra.validates.element('tab-focus', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('combobox should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('combobox should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox input should be focused', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;
      });

      it('combobox should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('combobox input keep focus', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => {
        // remove backspace that is added to the input. Bug logged here: https://github.com/cerner/terra-core/issues/2414
        browser.keys('Backspace');
        browser.click('#root');
      });
    });

    describe('combobox should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('combobox should close when clicking off of the select', () => {
      it('combobox should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('combobox should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('combobox should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('combobox input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('combobox should close when clicking off of the select after being opened by toggle icon', () => {
      it('combobox should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle-opened dropdown', () => {
        Terra.validates.element('toggle-open-dropdown', { selector: '#root' });
      });

      it('combobox should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('combobox should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('combobox input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('toggle-closed-dropdown', { selector: '#root' });
      });
    });

    describe('combobox should close when pressing tab key to shift focus away from select', () => {
      it('combobox should close the dropdown when tabbing focus away from the select', () => {
        browser.click('[data-terra-select]');
        browser.keys('Tab');
      });

      it('combobox should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('combobox input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
        browser.keys('Tab');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('combobox should close when clicking on toggle icon when select is open', () => {
      it('combobox should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('combobox should close on toggle icon click', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display closed select', () => {
        Terra.validates.element('select-closed', { selector: '#root' });
      });
    });

    describe('combobox should open and close the dropdown by clicking on toggle icon', () => {
      it('combobox should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle icon open dropdown', () => {
        Terra.validates.element('toggle-icon-open-dropdown', { selector: '#root' });
      });

      it('combobox should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle icon closed dropdown', () => {
        Terra.validates.element('toggle-icon-closed-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('combobox should select an option by keyboard interaction', () => {
      it('combobox should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
        Terra.validates.element('selected-option', { selector: '#root' });
      });
    });

    describe('combobox should select an option by click after clicking on toggle icon', () => {
      it('combobox should select the first option', () => {
        browser.click('[data-terra-form-select-toggle]');
        browser.click('#terra-select-option-blue');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display toggle icon selected option', () => {
        Terra.validates.element('toggle-icon-selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('combobox should select an option by alternative keyboard interaction', () => {
      it('combobox should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('combobox should select second option by keyboard interaction', () => {
      it('combobox should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('second-option-highlighted', { selector: '#root' });
      });

      it('combobox should select the second option', () => {
        browser.keys('Enter');
      });

      it('combobox input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('combobox should select an option by click', () => {
      it('should display default combobox', () => {
        Terra.validates.element('default');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('combobox should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('combobox should select an option by pressing enter', () => {
      it('should display default combobox', () => {
        Terra.validates.element('default');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child ');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('combobox should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('combobox should allow a free text entry', () => {
      it('should display default Combobox', () => {
        Terra.validates.element('default');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('combobox should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('combobox should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('combobox should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#root');
        browser.click('[data-terra-select]');
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('open-dropdown-hover-check', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });

  describe('Combobox Variant - controlled', () => {
    describe('combobox controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-select/form-select/controlled-combobox');
      });

      it('should display default combobox', () => {
        Terra.validates.element('default');
      });

      it('combobox controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('combobox controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });
    });
  });

  describe('Combobox Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/is-touch-accessible-combobox');
    });

    describe('is touch accessible combobox should be closed initially', () => {
      it('should display closed combobox', () => {
        Terra.validates.element('closed');
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('combobox should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox input should be focused', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible combobox should open when clicking on it', () => {
      it('should open on click', () => {
        browser.click('[data-terra-select]');
        Terra.validates.element('default');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Multiple Variant - uncontrolled', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
    });

    describe('multiple should be closed initially', () => {
      it('should display closed Multiple select', () => {
        Terra.validates.element('closed');
      });

      after(() => browser.click('#root'));
    });

    describe('multiple should gain focus when tabbed to', () => {
      it('should tab focus to Multiple select', () => {
        browser.keys('Tab');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display tab focus on the Multiple select', () => {
        Terra.validates.element('tab-focus', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('multiple should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('multiple should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('multiple should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('multiple should close when clicking off of the select', () => {
      it('multiple should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('opened-dropdown', { selector: '#root' });
      });

      it('multiple should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('multiple should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('multiple input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('multiple should close when clicking off of the select after being opened by toggle icon', () => {
      it('multiple should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle opened dropdown', () => {
        Terra.validates.element('toggle-opened-dropdown', { selector: '#root' });
      });

      it('multiple should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('multiple should not be focused', () => {
        browser.hasFocus('[data-terra-select-combobox]').should.be.false;
      });

      it('multiple input should not be focused', () => {
        browser.hasFocus('[data-terra-select-combobox] input').should.be.false;
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('toggle-closed-dropdown', { selector: '#root' });
      });
    });

    describe('multiple should close when pressing tab key to shift focus away from select', () => {
      it('multiple should close the dropdown when tabbing focus away from the select', () => {
        browser.click('[data-terra-select]');
        browser.keys('Tab');
      });

      it('multiple should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('multiple input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
        browser.keys('Tab');
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('multiple should close when clicking on toggle icon when select is open', () => {
      it('multiple should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('multiple should close on toggle icon click', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display closed select', () => {
        Terra.validates.element('select-closed', { selector: '#root' });
      });
    });

    describe('multiple should open and close the dropdown by clicking on toggle icon', () => {
      it('multiple should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle icon opened dropdown', () => {
        Terra.validates.element('toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('multiple should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle icon closed dropdown', () => {
        Terra.validates.element('toggle-icon-closed-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('multiple should select an option by keyboard interaction', () => {
      it('multiple should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('multiple should select an option by alternative keyboard interaction', () => {
      it('multiple should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('multiple should select second option by keyboard interaction', () => {
      it('multiple should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('second-option-highlighted', { selector: '#root' });
      });

      it('multiple should select the second option', () => {
        browser.keys('Enter');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('multiple should select an option by click', () => {
      it('should display default Multiple select', () => {
        Terra.validates.element('default');
      });

      it('multiple should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('multiple should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('multiple should select an option by pressing enter', () => {
      it('should display default Multiple select', () => {
        Terra.validates.element('default');
      });

      it('multiple should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('multiple should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
        browser.refresh();
      });
    });

    describe('multiple should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#root');
        browser.click('[data-terra-select]');
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('open-dropdown-hover-check', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });

  describe('Multiple Variant - controlled', () => {
    describe('multiple controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-select/form-select/controlled-multiple');
      });

      it('should display default multiple select', () => {
        Terra.validates.element('default');
      });

      it('multiple controlled should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('multiple controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });
    });
  });

  describe('Multiple Variant - placeholder', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/multi-select-placeholder');
    });

    describe('Multiple placeholder should be shown initially', () => {
      it('should display placeholder', () => {
        Terra.validates.element('placeholder');
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('multiple placeholder should disappear after selection and blur', () => {
      it('multiple should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('multiple input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('navigates to the next focusable element', () => {
        browser.keys('Tab');
      });

      it('next focusable element should be focused', async () => {
        (await browser.hasFocus('#focusable')).should.be.true;
      });

      it('placeholder should disappear after selection and blur', () => {
        Terra.validates.element('default');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });
  });

  describe('Multiple Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/is-touch-accessible-multi-select');
    });

    describe('is touch accessible multiple should be closed initially', () => {
      it('should display closed Multiple select', () => {
        Terra.validates.element('closed');
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('multiple should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple input should be focused', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible multiple should open when clicking on it', () => {
      it('should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Search Variant - uncontrolled', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-search');
    });

    describe('search should be closed initially', () => {
      it('should display closed Search select', () => {
        Terra.validates.element('closed');
      });

      after(() => browser.click('#root'));
    });

    describe('search should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display tab focus on the Search select', () => {
        Terra.validates.element('tab-focus', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('search should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('search should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('search should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('search should close when clicking off of the select', () => {
      it('search should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('opened-dropdown', { selector: '#root' });
      });

      it('search should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('search should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('search input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('search should close when clicking off of the select after being opened by toggle icon', () => {
      it('search should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle opened dropdown', () => {
        Terra.validates.element('toggle-opened-dropdown', { selector: '#root' });
      });

      it('search should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('search should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('search input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('toggle-closed-dropdown', { selector: '#root' });
      });
    });

    describe('search should close when pressing tab key to shift focus away from select', () => {
      it('search should close the dropdown when tabbing focus away from the select', () => {
        browser.click('[data-terra-select]');
        browser.keys('Tab');
      });

      it('search should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('search input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
        browser.keys('Tab');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('search should close when clicking on toggle icon when select is open', () => {
      it('search should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('search should close on toggle icon click', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display closed select', () => {
        Terra.validates.element('select-closed', { selector: '#root' });
      });
    });

    describe('search should open and close the dropdown by clicking on toggle icon', () => {
      it('search should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle icon open dropdown', () => {
        Terra.validates.element('toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('search should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display toggle icon closed dropdown', () => {
        Terra.validates.element('toggle-icon-closed-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('search should select an option by keyboard interaction', () => {
      it('search should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
      });
    });

    describe('search should select an option by click after clicking on toggle icon', () => {
      it('search should select the first option', () => {
        browser.click('[data-terra-select]');
        browser.click('#terra-select-option-blue');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display toggle icon selected option', () => {
        Terra.validates.element('toggle-icon-selected-option', { selector: '#root' });
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should select an option by alternative keyboard interaction', () => {
      it('search should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should select second option by keyboard interaction', () => {
      it('search should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('second-option-highlighted', { selector: '#root' });
      });

      it('search should select the second option', () => {
        browser.keys('Enter');
      });

      it('search input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should select an option by click', () => {
      it('should display default Search select', () => {
        Terra.validates.element('default');
      });

      it('should set the screen reader aria live region to blank', () => {
        expect(browser.getText('[data-terra-select-combobox] [aria-live]')).to.equal('');
      });

      it('search should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });
      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('search should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should display no matching results when free text is entered and no matching option exists', () => {
      it('search should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      it('search should enter a free text entry that does not match', () => {
        browser.keys(['a', 's', 'd', 'f']);

        Terra.validates.element('no-matching-results', { selector: '#root' });
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should select an option by pressing enter', () => {
      it('should display default Search select', () => {
        Terra.validates.element('default');
      });

      it('search should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('search should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#root');
        browser.click('[data-terra-select]');
      });
      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('open-dropdown-hover-check', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });

  describe('Search Variant - controlled', () => {
    describe('search controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-select/form-select/controlled-search');
      });

      it('should display default Search select', () => {
        Terra.validates.element('default');
      });

      it('search controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
        browser.moveToObject('#terra-select-option-blue');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('search controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });
    });
  });

  describe('Search Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/is-touch-accessible-search-select');
    });

    describe('is touch accessible search should be closed initially', () => {
      it('should display closed Search select', () => {
        Terra.validates.element('closed');
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('search should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search input should be focused', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible search should open when clicking on it', () => {
      it('should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Tag Variant', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-tag');
    });

    describe('tag should be closed initially', () => {
      it('should display closed Tag select', () => {
        Terra.validates.element('closed');
      });

      after(() => browser.click('#root'));
    });

    describe('tag should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display tab focus on the Tag select', () => {
        Terra.validates.element('tab-focus', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('tag should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('tag should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('tag should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('tag should close when clicking off of the select', () => {
      it('tag should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
      });

      it('should display toggle opened dropdown', () => {
        Terra.validates.element('toggle-opened', { selector: '#root' });
      });

      it('tag should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('tag should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('tag input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('tag should close when pressing tab key to shift focus away from select', () => {
      it('tag should close the dropdown when tabbing focus away from the select', () => {
        browser.click('[data-terra-select]');
        browser.keys('Tab');
      });

      it('tag should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('tag input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
        browser.keys('Tab');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed-dropdown', { selector: '#root' });
      });
    });

    describe('tag should close when clicking on toggle icon when select is open', () => {
      it('tag should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      it('tag should close on toggle icon click', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display closed select', () => {
        Terra.validates.element('select-closed', { selector: '#root' });
      });
    });

    describe('tag should open and close the dropdown by clicking on toggle icon', () => {
      it('tag should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('tag should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('toggle-icon-closed-dropdown', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });

    describe('tag should select an option by keyboard interaction', () => {
      it('tag should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('tag should select an option by alternative keyboard interaction', () => {
      it('tag should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('tag should select second option by keyboard interaction', () => {
      it('tag should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('second-option-highlighted', { selector: '#root' });
      });

      it('tag should select the second option', () => {
        browser.keys('Enter');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('tag should select an option by click', () => {
      it('should display default Tag select', () => {
        Terra.validates.element('default');
      });

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('tag should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('tag should select an option by pressing enter', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-tag');
      });

      it('should display default Tag select', () => {
        Terra.validates.element('default');
      });

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');
      });
    });

    describe('tag should allow a free text entry', () => {
      it('should display default Tag', () => {
        Terra.validates.element('default');
      });

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('tag should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('tag should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#root');
        browser.click('[data-terra-select]');
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('open-dropdown-hover-check', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });

  describe('Tag Variant - placeholder', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/tag-select-placeholder');
    });

    describe('tag placeholder should be shown initially', () => {
      it('should display placeholder', () => {
        Terra.validates.element('placeholder');
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('tag placeholder should disappear after selection and blur', () => {
      it('tag should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      it('navigates to the next focusable element', () => {
        browser.keys('Tab');
      });

      it('next focusable element should be focused', async () => {
        (await browser.hasFocus('#focusable')).should.be.true;
      });

      it('placeholder should disappear after selection and blur', () => {
        Terra.validates.element('default');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });
  });

  describe('Tag Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/is-touch-accessible-tag-select');
    });

    describe('is touch accessible tag should be closed initially', () => {
      it('should display closed dropdown', () => {
        Terra.validates.element('closed');
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('tag should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag input should be focused', () => {
        browser.hasFocus('[data-terra-select] input').should.be.true;

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible tag should open when clicking on it', () => {
      it('should open on click', () => {
        browser.click('[data-terra-select]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Combobox Variant - clear option', () => {
    describe('combobox should deselect the selected item when clicking on the clear option.', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-select/form-select/allow-clear');
      });

      it('should display default combobox', () => {
        Terra.validates.element('default');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#allowclear:last-child');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('combobox should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });

      it('combobox should open the dropdown by clicking the toggle again', () => {
        browser.click('#allowclear:last-child');
      });

      it('combobox should select the clear option', () => {
        browser.click('#terra-select-option-');
      });

      it('should display selected clear option', () => {
        Terra.validates.element('selected-clear-option');
      });
    });
  });

  describe('Tag Variant - controlled', () => {
    describe('tag controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-select/form-select/controlled-tag');
      });

      it('should display default tag', () => {
        Terra.validates.element('default');
      });

      it('tag controlled should open the dropdown by clicking the toggle', () => {
        browser.click('[data-terra-select-combobox]');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('tag controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });
    });
  });

  describe('OptGroup', () => {
    describe('should render an optgroup', () => {
      before(() => browser.url('/raw/tests/terra-form-select/form-select/opt-group'));

      it('should display default optGroup', () => {
        Terra.validates.element();
      });

      it('should open the dropdown by clicking the toggle', () => {
        browser.click('#opt-group:last-child');
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });
    });
  });

  describe('Default variant', () => {
    it('should display incomplete Default select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/incomplete-default');

      Terra.validates.element('incomplete');
    });

    it('should display invalid Default select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/invalid-default');

      Terra.validates.element('invalid');
    });
  });

  describe('Combobox variant', () => {
    it('should display incomplete Combobox select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/incomplete-combobox');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Combobox select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/invalid-combobox');

      Terra.validates.element('invalid');
    });
  });

  describe('Multiple variant', () => {
    it('should display incomplete Multiple select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/incomplete-multiple');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Multiple select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/invalid-multiple');

      Terra.validates.element('invalid');
    });
  });

  describe('Search variant', () => {
    it('should display incomplete Search select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/incomplete-search');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Search select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/invalid-search');

      Terra.validates.element('invalid');
    });
  });

  describe('Tag variant', () => {
    it('should display incomplete Tag select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/incomplete-tag');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Tag select', () => {
      browser.url('/raw/tests/terra-form-select/form-select/invalid-tag');

      Terra.validates.element('invalid');
    });
  });

  describe('With-Iframe should not cause page jump when', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/select-inside-iframe'));

    it('open the dropdown by clicking the toggle', () => {
      const frame = $('#frmSelectFrame');
      frame.waitForVisible();
      browser.frame(frame.value);
      browser.scroll(0, 700);
      browser.click('#frmSelectSingle');
      browser.moveToObject('#frmSelectSingle');
    });

    it('should display opened form-select', () => {
      Terra.validates.element('opened form-select', { selector: '#root' });
    });

    it('select the option which is hidden from visible frame of form-select', () => {
      // eslint-disable-next-line prefer-arrow-callback
      browser.execute(function scrollOptionIntoView() {
        document.getElementById('terra-select-option-17').scrollIntoView();
      });
      browser.moveToObject('#terra-select-option-17');
      browser.click('#terra-select-option-17');
      browser.click('#frmSelectSingle');
    });

    it('should display opened form-select with selected-option', () => {
      Terra.validates.element('opened form-select with selected-option', { selector: '#root' });
    });

    it('should navigate to the next option of form-select on down arrow key press', () => {
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');

      Terra.validates.element('navigated to the next option using key-board navigation', { selector: '#root' });
    });

    it('should navigate to the previous option of form-select on down arrow key press', () => {
      browser.keys('ArrowDown');
      browser.keys('ArrowUp');

      Terra.validates.element('navigated to previous option using key-board navigation', { selector: '#root' });
    });
  });

  describe('dropdown should not detach on search', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/is-touch-accessible-bottom'));

    it('should display Tag select', () => {
      Terra.validates.element('default');
    });

    it('Tag should open and search', () => {
      browser.click('[data-terra-select-combobox]');
      browser.keys(['T', 'a', 'g']);
    });

    it('should display open dropdown', () => {
      Terra.validates.element('open-dropdown', { selector: '#root' });
    });
  });

  describe('Default Variant Hover- uncontrolled', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/default-hover'));

    describe('default should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
        browser.click('#root');
        browser.click('[data-terra-select]');
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('open-dropdown-hover-check', { selector: '#root' });
      });

      after(() => browser.click('#root'));
    });
  });
});
