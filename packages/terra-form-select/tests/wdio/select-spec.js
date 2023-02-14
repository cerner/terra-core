Terra.describeViewports('Select', ['tiny'], () => {
  it('should render an empty placeholder', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/empty-placeholder');

    Terra.validates.element('empty placeholder');
  });

  it('should render a placeholder', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/default-placeholder');

    Terra.validates.element('default placeholder');
  });

  describe('open the dropdown and honor the set max height', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/max-height'));

    it('should open the dropdown and honor the set max height', () => {
      Terra.validates.element('max height');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      $('#maxHeight:last-child').click();

      Terra.validates.element('open-dropdown-max-height', { selector: '#root' });
    });
  });

  it('should renders an option with a default value of zero', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/default-value-zero');

    Terra.validates.element('default value of zero');
  });

  describe('default should truncate and wrap long text', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-default-long-text'));

    it('default should open the dropdown by clicking the toggle', () => {
      $('[data-terra-select]').click();

      Terra.validates.element('[long-text]open-dropdown', { selector: '#root' });
    });
  });

  describe('Default Variant - uncontrolled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-default'));

    describe('default uncontrolled should be closed initially', () => {
      it('should display closed dropdown', () => {
        Terra.validates.element('closed dropdown');
      });
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display tab focus on the Default select', () => {
        Terra.validates.element('default tab-focus', { selector: '#root' });
      });
    });

    describe('default should open dropdown by click', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
      });

      it('dropdown menu should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[click]open-dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('dropdown menu should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[spacebar]open-dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('dropdown menu should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[arrow-key]open-dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('default should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('default select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed dropdown after enter', { selector: '#root' });
      });
    });

    describe('default should close when clicking off of the select', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#terra-select-option-green').moveTo(); // add to ensure consistent hover styles

        Terra.validates.element('default opened-dropdown', { selector: '#root' });
      });

      it('default should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('select should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed dropdown after clicking off', { selector: '#root' });
      });
    });

    describe('default should close when clicking off of the select after being opened by toggle icon', () => {
      it('default should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
        $('#terra-select-option-green').moveTo(); // add to ensure consistent hover styles

        Terra.validates.element('default toggle-opened-dropdown', { selector: '#root' });
      });

      it('default should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('select should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed dropdown after clicking off select opened with toggle', { selector: '#root' });
      });
    });

    describe('default should close when pressing tab key to shift focus away from select', () => {
      it('default should close the dropdown when tabbing focus away from the select', () => {
        $('[data-terra-select]').click();
        browser.keys('Tab');
      });

      it('default should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('closed dropdown with tabbing away', { selector: '#root' });
      });
    });

    describe('default should close when clicking on toggle icon when select is open', () => {
      it('default should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('dropdown should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('default should close on toggle icon click', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });
      it('should display closed dropdown', () => {
        Terra.validates.element('select-closed', { selector: '#root' });
      });
    });

    describe('default should open and close the dropdown by clicking on the select', () => {
      it('default should open on click', () => {
        $('[data-terra-select]').click();
        $('#terra-select-option-green').moveTo(); // add to ensure consistent hover styles
      });

      it('dropdown should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display opened dropdown', () => {
        Terra.validates.element('opened', { selector: '#root' });
      });

      it('default should close on subsequent click', () => {
        $('[data-terra-select]').click();
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('default closed', { selector: '#root' });
      });
    });

    describe('default should open and close the dropdown by clicking on toggle icon', () => {
      it('default should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
        $('#terra-select-option-green').moveTo(); // add to ensure consistent hover styles
      });

      it('dropdown should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('default toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('default should close the dropdown by clicking the select toggle icon again', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('toggle icon closes dropdown', { selector: '#root' });
      });
    });

    describe('default should select an option by click', () => {
      it('default should select the first option', () => {
        $('[data-terra-select]').click();
        $('#terra-select-option-blue').click();
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('default option selected by click', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should select an option by click after clicking on toggle icon', () => {
      it('default should select the first option', () => {
        $('[data-terra-form-select-toggle]').click();
        $('#terra-select-option-blue').click();
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('toggle-icon-selected-option', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should select an option by pressing enter', () => {
      it('default should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[enter]open-dropdown', { selector: '#root' });
      });

      it('default should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('selected option after pressing enter', { selector: '#root' });
      });
    });

    describe('default should open dropdown by click after initial selection', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#terra-select-option-blue').click();
        $('[data-terra-select]').click();
      });

      it('should display open dropdown after selection', () => {
        Terra.validates.element('open-dropdown-after-selection', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should open dropdown and ensure selected option is hovered', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#root').click();
        $('[data-terra-select]').click();
      });

      it('should display hovered selected option', () => {
        Terra.validates.element('default-selected-and-hovered', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });

  describe('Default Variant - Multiple Dropdown', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/multiple-default-select'));
    describe('default should close all dropdown and open the selected dropdown', () => {
      it('default should open the dropdown by clicking the select and close other dropdown', () => {
        $('[class*=left-select]').click();
        $('[class*=right-select]').click();
      });

      it('should close and open dropdown after selection', () => {
        Terra.validates.element('close-and-open-dropdown-after-selection', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });

  describe('Default Variant - controlled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/controlled-default'));

    describe('default should select an option by keyboard interaction', () => {
      it('default should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('controlled option selected with keyboard', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default should select an option by alternative keyboard interaction', () => {
      it('default should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('controlled option selected with keyboard', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('default controlled should select an option by click', () => {
      it('default controlled should open the dropdown by clicking the toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
        $('#terra-select-option-blue').moveTo(); // add to ensure consistent hover styles
      });

      it('dropdown should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[controlled]open-dropdown', { selector: '#root' });
      });

      it('default controlled should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('controlled option selected');
      });

      after(() => $('#root').click());
    });

    describe('default should select second option by keyboard interaction', () => {
      it('default should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('dropdown menu should be focused', () => {
        expect($('[class*=menu]')).toBeFocused();
      });

      it('should display second option highlighted', () => {
        Terra.validates.element('default second-option-highlighted', { selector: '#root' });
      });

      it('default should select the second option', () => {
        browser.keys('Enter');
      });

      it('select should be focused', () => {
        expect($('[data-terra-select-combobox]')).toBeFocused();
      });

      it('should display select with selected option', () => {
        Terra.validates.element('controlled second option selected with keyboard', { selector: '#root' });
      });
    });
  });

  describe('Combobox Variant - uncontrolled', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-combobox');
    });

    describe('combobox should be closed initially', () => {
      it('should display closed combobox', () => {
        Terra.validates.element('combobox closed dropdown');
      });

      after(() => $('#root').click());
    });

    describe('combobox should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();

        Terra.validates.element('combobox focus on tab', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('combobox should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-arrow-key]open-dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('combobox should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('combobox should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('combobox input keep focus', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-spacebar]open-dropdown', { selector: '#root' });
      });

      after(() => {
        // remove backspace that is added to the input. Bug logged here: https://github.com/cerner/terra-core/issues/2414
        browser.keys('Backspace');
        $('#root').click();
      });
    });

    describe('combobox should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('combobox should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('combobox dropdown not opened by enter', { selector: '#root' });
      });
    });

    describe('combobox should close when clicking off of the select', () => {
      it('combobox should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-clicking-off]open-dropdown', { selector: '#root' });
      });

      it('combobox should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('combobox should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('combobox input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('combobox closes dropdown after clicking off', { selector: '#root' });
      });
    });

    describe('combobox should close when clicking off of the select after being opened by toggle icon', () => {
      it('combobox should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle-opened dropdown', () => {
        Terra.validates.element('toggle-open-dropdown', { selector: '#root' });
      });

      it('combobox should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('combobox should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('combobox input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('combobox clicking off closes dropdown', { selector: '#root' });
      });
    });

    describe('combobox should close when pressing tab key to shift focus away from select', () => {
      it('combobox should close the dropdown when tabbing focus away from the select', () => {
        $('[data-terra-select]').click();
        browser.keys('Tab');
      });

      it('combobox should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('combobox input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
        browser.keys('Tab');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('combobox closed dropdown after tabbing away', { selector: '#root' });
      });
    });

    describe('combobox should close when clicking on toggle icon when select is open', () => {
      it('combobox should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('combobox should close on toggle icon click', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display closed select', () => {
        Terra.validates.element('toggle click closes', { selector: '#root' });
      });
    });

    describe('combobox should open and close the dropdown by clicking on toggle icon', () => {
      it('combobox should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle icon open dropdown', () => {
        Terra.validates.element('toggle-icon-open-dropdown', { selector: '#root' });
      });

      it('combobox should close the dropdown by clicking the select toggle icon again', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle icon closed dropdown', () => {
        Terra.validates.element('combobox toggle icon closes dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('combobox should select an option by keyboard interaction', () => {
      it('combobox should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
        Terra.validates.element('combobox option selected', { selector: '#root' });
      });
    });

    describe('combobox should select an option by click after clicking on toggle icon', () => {
      it('combobox should select the first option', () => {
        $('[data-terra-form-select-toggle]').click();
        $('#terra-select-option-blue').click();
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display toggle icon selected option', () => {
        Terra.validates.element('combobox toggle option selected', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('combobox should select an option by alternative keyboard interaction', () => {
      it('combobox should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox selected option with keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('combobox should select second option by keyboard interaction', () => {
      it('combobox should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('combobox second-option-highlighted', { selector: '#root' });
      });

      it('combobox should select the second option', () => {
        browser.keys('Enter');
      });

      it('combobox input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox selected second option with keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('combobox should select an option by click', () => {
      it('should display default combobox', () => {
        Terra.validates.element('default combobox');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        $('#combobox:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-click]open-dropdown', { selector: '#root' });
      });

      it('combobox should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox option selected with click');
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('combobox should select an option by pressing enter', () => {
      it('should display default combobox', () => {
        Terra.validates.element('pressing enter default combobox');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        $('#combobox:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-enter]open-dropdown', { selector: '#root' });
      });

      it('combobox should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox option selected with enter');
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('combobox should allow a free text entry', () => {
      it('should display default Combobox', () => {
        Terra.validates.element('free text default combobox');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        $('#combobox:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-free-text]open-dropdown', { selector: '#root' });
      });

      it('combobox should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('combobox should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox select free text entry');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('combobox should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#root').click();
        $('[data-terra-select]').click();
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('combobox hover open dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });

  describe('Combobox Variant - controlled', () => {
    describe('combobox controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-select/controlled-combobox');
      });

      it('should display default combobox', () => {
        Terra.validates.element('click default combobox');
      });

      it('combobox controlled should open the dropdown by clicking the toggle', () => {
        $('#combobox:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[combobox-controlled]open-dropdown', { selector: '#root' });
      });

      it('combobox controlled should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox controlled selected option');
      });
    });
  });

  describe('Combobox Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/is-touch-accessible-combobox');
    });

    describe('is touch accessible combobox should be closed initially', () => {
      it('should display closed combobox', () => {
        Terra.validates.element('touch accessible combobox closed');
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
        expect($('[data-terra-select] input')).toBeFocused();

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible combobox should open when clicking on it', () => {
      it('should open on click', () => {
        $('[data-terra-select]').click();
        Terra.validates.element('touch accessible combobox open on click');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Multiple Variant - uncontrolled', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-multiple');
    });

    describe('multiple should be closed initially', () => {
      it('should display closed Multiple select', () => {
        Terra.validates.element('multi select uncontrolled closed');
      });

      after(() => $('#root').click());
    });

    describe('multiple should gain focus when tabbed to', () => {
      it('should tab focus to Multiple select', () => {
        browser.keys('Tab');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display tab focus on the Multiple select', () => {
        Terra.validates.element('multi select tab-focus', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('multiple should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[multi-select-spacebar]open-dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('multiple should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[multi-select-arrow-key]open-dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('multiple should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('multiple should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('multi select does not open on enter press', { selector: '#root' });
      });
    });

    describe('multiple should close when clicking off of the select', () => {
      it('multiple should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('multi select opened-dropdown', { selector: '#root' });
      });

      it('multiple should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('multiple should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('multiple input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('multi select closes after clicking off', { selector: '#root' });
      });
    });

    describe('multiple should close when clicking off of the select after being opened by toggle icon', () => {
      it('multiple should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle opened dropdown', () => {
        Terra.validates.element('multi select toggle-opened-dropdown', { selector: '#root' });
      });

      it('multiple should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('multiple should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('multiple input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('multi select clicking off closes dropdown', { selector: '#root' });
      });
    });

    describe('multiple should close when pressing tab key to shift focus away from select', () => {
      it('multiple should close the dropdown when tabbing focus away from the select', () => {
        $('[data-terra-select]').click();
        browser.keys('Tab');
      });

      it('multiple should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('multiple input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
        browser.keys('Tab');
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('multi select closes dropdown after tabbing away', { selector: '#root' });
      });
    });

    describe('multiple should close when clicking on toggle icon when select is open', () => {
      it('multiple should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('multiple should close on toggle icon click', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display closed select', () => {
        Terra.validates.element('multi select closes on toggle click', { selector: '#root' });
      });
    });

    describe('multiple should open and close the dropdown by clicking on toggle icon', () => {
      it('multiple should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle icon opened dropdown', () => {
        Terra.validates.element('multi select toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('multiple should close the dropdown by clicking the select toggle icon again', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle icon closed dropdown', () => {
        Terra.validates.element('multi select toggle icon closes dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('multiple should select an option by keyboard interaction', () => {
      it('multiple should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('multi select selected option with keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('multiple should select an option by alternative keyboard interaction', () => {
      it('multiple should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('multi select selected option with alternative keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('multiple should select second option by keyboard interaction', () => {
      it('multiple should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('multi select second-option-highlighted', { selector: '#root' });
      });

      it('multiple should select the second option', () => {
        browser.keys('Enter');
      });

      it('multiple input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('multi select second option selected with keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('multiple should select an option by click', () => {
      it('should display default Multiple select', () => {
        Terra.validates.element('multiple select');
      });

      it('multiple should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('[multi-select-click]open-dropdown', { selector: '#root' });
      });

      it('multiple should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('multi select option selected with click');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('multiple should select an option by pressing enter', () => {
      it('should display default Multiple select', () => {
        Terra.validates.element('enter multiple select');
      });

      it('multiple should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('open-dropdown', { selector: '#root' });
      });

      it('multiple should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('multi select option selected with enter');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
        browser.refresh();
      });
    });

    describe('multiple should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#root').click();
        $('[data-terra-select]').click();
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('multi select hover open dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });

  describe('Multiple Variant - controlled', () => {
    describe('multiple controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-select/controlled-multiple');
      });

      it('should display default multiple select', () => {
        Terra.validates.element('click multi select default');
      });

      it('multiple controlled should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('controlled multi select open by click', { selector: '#root' });
      });

      it('multiple controlled should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('multi select controlled option selected');
      });
    });
  });

  describe('Multiple Variant - placeholder', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/multi-select-placeholder');
    });

    describe('Multiple placeholder should be shown initially', () => {
      it('should display placeholder', () => {
        Terra.validates.element('multi select placeholder');
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

      it('multiple input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('navigates to the next focusable element', () => {
        browser.keys('Tab');
      });

      it('next focusable element should be focused', () => {
        expect($('#focusable')).toBeFocused();
      });

      it('placeholder should disappear after selection and blur', () => {
        Terra.validates.element('placeholder disappears');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });
  });

  describe('Multiple Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/is-touch-accessible-multi-select');
    });

    describe('is touch accessible multiple should be closed initially', () => {
      it('should display closed Multiple select', () => {
        Terra.validates.element('touch accessible multi select closed');
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
        expect($('[data-terra-select] input').isFocused()).toBe(true);

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible multiple should open when clicking on it', () => {
      it('should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('touch accessible multi select open by click');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Search Variant - uncontrolled', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-search');
    });

    describe('search should be closed initially', () => {
      it('should display closed Search select', () => {
        Terra.validates.element('search uncontrolled closed');
      });

      after(() => $('#root').click());
    });

    describe('search should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display tab focus on the Search select', () => {
        Terra.validates.element('search tab-focus', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('search should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('search open dropdown by spacebar', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('search should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('search open dropdown by down arrow', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('search should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('search should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('search does not open on enter', { selector: '#root' });
      });
    });

    describe('search should close when clicking off of the select', () => {
      it('search should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('search opened-dropdown', { selector: '#root' });
      });

      it('search should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('search should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('search input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('search closes dropdown after clicking off', { selector: '#root' });
      });
    });

    describe('search should close when clicking off of the select after being opened by toggle icon', () => {
      it('search should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle opened dropdown', () => {
        Terra.validates.element('search toggle-opened-dropdown', { selector: '#root' });
      });

      it('search should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('search should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('search input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display toggle closed dropdown', () => {
        Terra.validates.element('search close on outside click after toggle open', { selector: '#root' });
      });
    });

    describe('search should close when pressing tab key to shift focus away from select', () => {
      it('search should close the dropdown when tabbing focus away from the select', () => {
        $('[data-terra-select]').click();
        browser.keys('Tab');
      });

      it('search should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('search input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
        browser.keys('Tab');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('search closes after tabbing away', { selector: '#root' });
      });
    });

    describe('search should close when clicking on toggle icon when select is open', () => {
      it('search should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('search should close on toggle icon click', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display closed select', () => {
        Terra.validates.element('search closes on toggle click', { selector: '#root' });
      });
    });

    describe('search should open and close the dropdown by clicking on toggle icon', () => {
      it('search should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle icon open dropdown', () => {
        Terra.validates.element('search toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('search should close the dropdown by clicking the select toggle icon again', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display toggle icon closed dropdown', () => {
        Terra.validates.element('search toggle icon closes dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('search should select an option by keyboard interaction', () => {
      it('search should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('search option selected with keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace', 'Backspace', 'Backspace', 'Backspace']); // remove selected option
      });
    });

    describe('search should select an option by click after clicking on toggle icon', () => {
      it('search should select the first option', () => {
        $('[data-terra-select]').click();
        $('#terra-select-option-blue').click();
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display toggle icon selected option', () => {
        Terra.validates.element('search toggle selected option', { selector: '#root' });
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

      it('search input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('search option selected with alternative keyboard', { selector: '#root' });
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

      it('search input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('search second-option-highlighted', { selector: '#root' });
      });

      it('search should select the second option', () => {
        browser.keys('Enter');
      });

      it('search input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('search second option selected with keyboard', { selector: '#root' });
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should select an option by click', () => {
      it('should display default Search select', () => {
        Terra.validates.element('display search select');
      });

      it('should set the screen reader aria live region to blank', () => {
        expect($('[data-terra-select-combobox] [aria-live]').getText()).toBe('');
      });

      it('search should open the dropdown by clicking the toggle', () => {
        $('#search:last-child').click();
      });
      it('should display open dropdown', () => {
        Terra.validates.element('search dropdown open before option selected by click', { selector: '#root' });
      });

      it('search should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('search option selected by click');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should display no matching results when free text is entered and no matching option exists', () => {
      it('search should open the dropdown by clicking the toggle', () => {
        $('#search:last-child').click();
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
        Terra.validates.element('display search select for enter');
      });

      it('search should open the dropdown by clicking the toggle', () => {
        $('#search:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('search open dropdown before select by enter', { selector: '#root' });
      });

      it('search should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('search option selected with enter');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('search should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#root').click();
        $('[data-terra-select]').click();
      });
      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('search hover open dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });

  describe('Search Variant - controlled', () => {
    describe('search controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-select/controlled-search');
      });

      it('should display default Search select', () => {
        Terra.validates.element('display controlled search select');
      });

      it('search controlled should open the dropdown by clicking the toggle', () => {
        $('#search:last-child').click();
        $('#terra-select-option-blue').moveTo();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('Search controlled open dropdown', { selector: '#root' });
      });

      it('search controlled should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('search controlled option selected');
      });
    });
  });

  describe('Search Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/is-touch-accessible-search-select');
    });

    describe('is touch accessible search should be closed initially', () => {
      it('should display closed Search select', () => {
        Terra.validates.element('touch accessible search closed');
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
        expect($('[data-terra-select] input').isFocused()).toBe(true);

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible search should open when clicking on it', () => {
      it('should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('touch accessible search open by click');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Tag Variant', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-tag');
    });

    describe('tag should be closed initially', () => {
      it('should display closed Tag select', () => {
        Terra.validates.element('tag closed');
      });

      after(() => $('#root').click());
    });

    describe('tag should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display tab focus on the Tag select', () => {
        Terra.validates.element('tag tab-focus', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('tag should open dropdown by spacebar key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag should open the dropdown by spacebar key press', () => {
        browser.keys('Space');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('tag dropdown open by spacebar', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('tag should open dropdown by down arrow key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag should open the dropdown by arrow down key press', () => {
        browser.keys('ArrowDown');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('tag dropdown open by arrow key', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('tag should not open dropdown by enter key press', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag should not open the dropdown by enter key press', () => {
        browser.keys('Enter');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('tag does not open on enter', { selector: '#root' });
      });
    });

    describe('tag should close when clicking off of the select', () => {
      it('tag should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
      });

      it('should display toggle opened dropdown', () => {
        Terra.validates.element('toggle-opened', { selector: '#root' });
      });

      it('tag should close the dropdown by clicking off the select', () => {
        $('#root').click();
      });

      it('tag should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('tag input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('tag closes after clicking off', { selector: '#root' });
      });
    });

    describe('tag should close when pressing tab key to shift focus away from select', () => {
      it('tag should close the dropdown when tabbing focus away from the select', () => {
        $('[data-terra-select]').click();
        browser.keys('Tab');
      });

      it('tag should not be focused', () => {
        expect($('[data-terra-select-combobox]')).not.toBeFocused();
      });

      it('tag input should not be focused', () => {
        expect($('[data-terra-select-combobox] input')).not.toBeFocused();
        browser.keys('Tab');
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('tag closes after tabbing away', { selector: '#root' });
      });
    });

    describe('tag should close when clicking on toggle icon when select is open', () => {
      it('tag should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select] input')).toBeFocused();
      });

      it('tag should close on toggle icon click', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display closed select', () => {
        Terra.validates.element('tag closes on toggle click', { selector: '#root' });
      });
    });

    describe('tag should open and close the dropdown by clicking on toggle icon', () => {
      it('tag should open the dropdown by clicking the select toggle icon', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('tag toggle-icon-opened-dropdown', { selector: '#root' });
      });

      it('tag should close the dropdown by clicking the select toggle icon again', () => {
        $('[data-terra-form-select-toggle]').click();
      });

      it('should display closed dropdown', () => {
        Terra.validates.element('tag toggle icon closes dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });

    describe('tag should select an option by keyboard interaction', () => {
      it('tag should select the first option', () => {
        browser.keys('Tab');
        browser.keys('Space');
        browser.keys('Enter');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('tag selected option by keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('tag should select an option by alternative keyboard interaction', () => {
      it('tag should select the first option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('Enter');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('tag option selected with alternative keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('tag should select second option by keyboard interaction', () => {
      it('tag should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display highlighted second option', () => {
        Terra.validates.element('tag second-option-highlighted', { selector: '#root' });
      });

      it('tag should select the second option', () => {
        browser.keys('Enter');
      });

      it('tag input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('should display selected option', () => {
        Terra.validates.element('tag second option selected by keyboard', { selector: '#root' });
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('tag should select an option by click', () => {
      it('should display default Tag select', () => {
        Terra.validates.element('display tag select');
      });

      it('tag should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('tag open dropdown before selecting option by click', { selector: '#root' });
      });

      it('tag should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('tag option selected by click');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('tag should select an option by pressing enter', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-select/uncontrolled-tag');
      });

      it('should display default Tag select', () => {
        Terra.validates.element('display tag select for enter');
      });

      it('tag should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('tag dropdown open before selecting with enter', { selector: '#root' });
      });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('tag option selected with enter');
      });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        $('#root').click();
      });
    });

    describe('tag should allow a free text entry', () => {
      it('should display default Tag', () => {
        Terra.validates.element('free text tag select');
      });

      it('tag should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('free text tag open dropdown', { selector: '#root' });
      });

      it('tag should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      it('should display selected option', () => {
        Terra.validates.element('tag free text selected option');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });

    describe('tag should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#root').click();
        $('[data-terra-select]').click();
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('tag hover open dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });

  describe('Tag Variant - placeholder', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/tag-select-placeholder');
    });

    describe('tag placeholder should be shown initially', () => {
      it('should display placeholder', () => {
        Terra.validates.element('tag placeholder');
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

      it('tag input should be focused', () => {
        expect($('[data-terra-select-combobox] input')).toBeFocused();
      });

      it('navigates to the next focusable element', () => {
        browser.keys('Tab');
      });

      it('next focusable element should be focused', () => {
        expect($('#focusable')).toBeFocused();
      });

      it('placeholder should disappear after selection and blur', () => {
        Terra.validates.element('tag select placeholder disappears');
      });

      after(() => {
        browser.refresh(); // remove selected option
      });
    });
  });

  describe('Tag Variant - Is Touch Accessible', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/is-touch-accessible-tag-select');
    });

    describe('is touch accessible tag should be closed initially', () => {
      it('should display closed dropdown', () => {
        Terra.validates.element('touch accessible tag closed');
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
        expect($('[data-terra-select] input').isFocused()).toBe(true);

        Terra.validates.element('is-touch-accessible-tab-focus', { selector: '#root' });
      });

      after(() => {
        browser.refresh();
      });
    });

    describe('is touch accessible tag should open when clicking on it', () => {
      it('should open on click', () => {
        $('[data-terra-select]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('touch accessible tag open dropdown');
      });

      after(() => {
        browser.refresh();
      });
    });
  });

  describe('Combobox Variant - clear option', () => {
    describe('combobox should deselect the selected item when clicking on the clear option.', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-select/allow-clear');
      });

      it('should display default combobox', () => {
        Terra.validates.element('Combobox clear option');
      });

      it('combobox should open the dropdown by clicking the toggle', () => {
        $('#allowclear:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('combobox clear option open dropdown', { selector: '#root' });
      });

      it('combobox should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('combobox clear option selected option');
      });

      it('combobox should open the dropdown by clicking the toggle again', () => {
        $('#allowclear:last-child').click();
      });

      it('combobox should select the clear option', () => {
        $('#terra-select-option-').click();
      });

      it('should display selected clear option', () => {
        Terra.validates.element('selected-clear-option');
      });
    });
  });

  describe('Tag Variant - controlled', () => {
    describe('tag controlled should select an option by click', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-select/controlled-tag');
      });

      it('should display default tag', () => {
        Terra.validates.element('Controlled tag select');
      });

      it('tag controlled should open the dropdown by clicking the toggle', () => {
        $('[data-terra-select-combobox]').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('tag open dropdown', { selector: '#root' });
      });

      it('tag controlled should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('tag controlled selected option');
      });
    });
  });

  describe('OptGroup', () => {
    describe('should render an optgroup', () => {
      before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/opt-group'));

      it('should display default optGroup', () => {
        Terra.validates.element('display optgroup');
      });

      it('should open the dropdown by clicking the toggle', () => {
        $('#opt-group:last-child').click();
      });

      it('should display open dropdown', () => {
        Terra.validates.element('OptGroup open dropdown', { selector: '#root' });
      });

      it('should select the first option', () => {
        $('#terra-select-option-blue').click();
      });

      it('should display selected option', () => {
        Terra.validates.element('selected-option');
      });
    });
  });

  describe('Default variant', () => {
    it('should display incomplete Default select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/incomplete-default');

      Terra.validates.element('incomplete default');
    });

    it('should display invalid Default select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/invalid-default');

      Terra.validates.element('invalid default');
    });
  });

  describe('Combobox variant', () => {
    it('should display incomplete Combobox select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/incomplete-combobox');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete combobox', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Combobox select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/invalid-combobox');

      Terra.validates.element('invalid combobox');
    });
  });

  describe('Multiple variant', () => {
    it('should display incomplete Multiple select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/incomplete-multiple');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete multi select', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Multiple select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/invalid-multiple');

      Terra.validates.element('invalid multi select');
    });
  });

  describe('Search variant', () => {
    it('should display incomplete Search select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/incomplete-search');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete search', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Search select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/invalid-search');

      Terra.validates.element('invalid search');
    });
  });

  describe('Tag variant', () => {
    it('should display incomplete Tag select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/incomplete-tag');

      // TODO: remove disabled color-contrast rule: https://github.com/cerner/terra-core/issues/2992
      Terra.validates.element('incomplete tag', { rules: { 'color-contrast': { enabled: false } } });
    });

    it('should display invalid Tag select', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-select/invalid-tag');

      Terra.validates.element('invalid tag');
    });
  });

  describe('With-Iframe should not cause page jump when', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/select-inside-iframe'));

    it('open the dropdown by clicking the toggle', () => {
      const frame = $('#frmSelectFrame');
      frame.waitForDisplayed();
      browser.switchToFrame(frame);
      $('#frmSelectSingle').scrollIntoView();
      $('#frmSelectSingle').click();
      $('#frmSelectSingle').moveTo();
    });

    it('should display opened form-select', () => {
      Terra.validates.element('opened form-select', { selector: '#root' });
    });

    it('select the option which is hidden from visible frame of form-select', () => {
      $('#terra-select-option-17').scrollIntoView();
      $('#terra-select-option-17').moveTo();
      $('#terra-select-option-17').click();
      $('#frmSelectSingle').click();
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
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/is-touch-accessible-bottom'));

    it('should display Tag select', () => {
      Terra.validates.element('[Dropdown should not detach]tag select displays');
    });

    it('Tag should open and search', () => {
      $('[data-terra-select-combobox]').click();
      browser.keys(['T', 'a', 'g']);
    });

    it('should display open dropdown', () => {
      Terra.validates.element('tag open dropdown not detached', { selector: '#root' });
    });
  });

  describe('Default Variant Hover- uncontrolled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/default-hover'));

    describe('default should hover first option after reopening while clicking root to close', () => {
      it('default should open the dropdown by clicking the select', () => {
        $('[data-terra-select]').click();
        $('#root').click();
        $('[data-terra-select]').click();
      });

      it('should hover first option after reopening while clicking root to close', () => {
        Terra.validates.element('default hover open dropdown', { selector: '#root' });
      });

      after(() => $('#root').click());
    });
  });
});
