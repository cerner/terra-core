describe('Tag Variant', ['tiny'], () => {
  describe('Tag Variant', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    describe('tag should be closed initially', () => {
      Terra.it.validatesElement();

      after(() => browser.click('#root'));
    });

    describe('tag should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('tab-focus', { selector: '#root' });

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

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

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

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

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

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('closed-dropdown', { selector: '#root' });
    });

    describe('tag should close when clicking off of the select', () => {
      it('tag should open the dropdown by clicking the select', () => {
        browser.click('[data-terra-select]');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('opened-dropdown', { selector: '#root' });

      it('tag should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      it('tag should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox]')).should.be.false;
      });

      it('tag input should not be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.false;
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('closed-dropdown', { selector: '#root' });
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
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('closed-dropdown', { selector: '#root' });
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

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('select-closed', { selector: '#root' });
    });

    describe('tag should open and close the dropdown by clicking on toggle icon', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
      });

      it('tag should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select] input')).should.be.true;
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('toggle-icon-opened-dropdown', { selector: '#root' });

      it('tag should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('toggle-icon-closed-dropdown', { selector: '#root' });

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

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option', { selector: '#root' });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');

        // talk with Brett. Seems like a bug. even with escape
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

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option', { selector: '#root' });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');

        // talk with Brett. Seems like a bug. even with escape
        browser.click('#root');
      });
    });

    describe('tag should select second option by keyboard interaction', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
      });

      it('tag should navigate to second option', () => {
        browser.keys('Tab');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('second-option-highlighted', { selector: '#root' });

      it('tag should select the second option', () => {
        browser.keys('Enter');
      });

      it('tag input should be focused', async () => {
        (await browser.hasFocus('[data-terra-select-combobox] input')).should.be.true;
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option', { selector: '#root' });

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');

        // talk with Brett. Seems like a bug. even with escape
        browser.click('#root');
      });
    });

    describe('tag should select an option by click', () => {
      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

      it('tag should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option');

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');

        // talk with Brett. Seems like a bug. even with escape
        browser.click('#root');
      });
    });

    describe('tag should select an option by pressing enter', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option');

      after(() => {
        browser.keys(['Backspace']); // remove selected option
        browser.click('#root');

        // talk with Brett. Seems like a bug. even with escape
        browser.click('#root');
      });
    });

    describe('tag should allow a free text entry', () => {
      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

      it('tag should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option');
    });
  });

  describe('Tag Variant - controlled', () => {
    describe('tag controlled should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/controlled-tag');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();

      it('tag controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

      it('tag controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('selected-option');
    });
  });
});
