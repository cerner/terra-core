const viewports = Terra.viewports('tiny');

describe('Select', () => {
  describe('Default Variant', () => {
    describe('default should open select menu by click', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default should open the dropdown by clicking the select', () => {
        browser.click('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
    });

    describe('default should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should select the first option', () => {
        browser.click('#default');
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('default should open and close the select menu by clicking on toggle icon', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-icon-opened-dropdown', { viewports, selector: '#root' });

      it('default should close the dropdown by clicking the select toggle icon again', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-icon-closed-dropdown', { viewports, selector: '#root' });
    });

    describe('default should close when clicking on toggle icon when select is open', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open on click', () => {
        browser.click('#default');
      });

      it('default should close on toggle icon click', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('select-closed', { viewports, selector: '#root' });
    });

    describe('default should close when clicking on select after it is opened', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open on click', () => {
        browser.click('#default');
      });

      it('default should close on subsequent click', () => {
        browser.click('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('closed', { viewports, selector: '#root' });
    });

    describe('default should select an option by click after clicking on toggle icon', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should select the first option', () => {
        browser.click('[data-terra-form-select-toggle]');
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-icon-selected-option', { viewports, selector: '#root' });
    });

    describe('default should close when clicking off of the select', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open the dropdown by clicking the select', () => {
        browser.click('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

      it('default should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });
    });

    describe('default should close when clicking off of the select after being opened by toggle icon', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-opened-dropdown', { viewports, selector: '#root' });

      it('default should close the dropdown by clicking off the select', () => {
        browser.click('#root');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-closed-dropdown', { viewports, selector: '#root' });
    });

    describe('default should close when pressing tab key to shift focus away from select', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open the dropdown by clicking the select', () => {
        browser.click('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('opened-dropdown', { viewports, selector: '#root' });

      it('default should close the dropdown when tabbing focus away from the select', () => {
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('closed-dropdown', { viewports, selector: '#root' });

      it('default should open the dropdown by clicking the select toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-opened-dropdown', { viewports, selector: '#root' });

      it('default should close the dropdown by clicking off the select', () => {
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('toggle-tab-closed-dropdown', { viewports, selector: '#root' });
    });

    describe('default should select an option by pressing enter', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('default should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('default controlled should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/controlled-default'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default controlled should open the dropdown by clicking the toggle icon', () => {
        browser.click('[data-terra-form-select-toggle]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('default controlled should select the first option', () => {
        browser.click('#terra-select-option-green');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('default should truncate and wrap long text', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default-long-text'));

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
    });

    describe('should render an empty placeholder', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/empty-placeholder'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
    });

    describe('should open the dropdown and honor the set max height', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/max-height'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#maxHeight:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown-max-height', { viewports, selector: '#root' });
    });
  });

  // describe('Combobox Variant', () => {
  //   describe('combobox should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('combobox should open the dropdown by clicking the toggle', () => {
  //       browser.click('#combobox:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('combobox should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('combobox should select an option by pressing enter', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('combobox should open the dropdown by clicking the toggle', () => {
  //       browser.click('#combobox:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('combobox should select the first option by pressing enter', () => {
  //       browser.keys('Enter');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('combobox controlled should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/controlled-combobox');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('combobox controlled should open the dropdown by clicking the toggle', () => {
  //       browser.click('#combobox:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('combobox controlled should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('combobox should allow a free text entry', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('combobox should open the dropdown by clicking the toggle', () => {
  //       browser.click('#combobox:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('combobox should enter a free text entry', () => {
  //       browser.keys(['T', 'a', 'g']);
  //     });

  //     it('combobox should select the first option by pressing enter', () => {
  //       browser.keys('Enter');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });
  // });

  // describe('Multiple Variant', () => {
  //   describe('multiple should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('multiple should open the dropdown by clicking the toggle', () => {
  //       browser.click('#multiple:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('multiple should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('multiple should select an option by pressing enter', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('multiple should open the dropdown by clicking the toggle', () => {
  //       browser.click('#multiple:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('multiple should select the first option by pressing enter', () => {
  //       browser.keys('Enter');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('multiple controlled should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/controlled-multiple');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('multiple controlled should open the dropdown by clicking the toggle', () => {
  //       browser.click('#multiple:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('multiple controlled should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });
  // });

  // describe('Search Variant', () => {
  //   describe('search should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('should set the screen reader aria live region to blank', () => {
  //       expect(browser.getText('[data-terra-select] [aria-live]')).to.equal('');
  //     });

  //     it('search should open the dropdown by clicking the toggle', () => {
  //       browser.click('#search:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('search should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('search should display no matching results when free text is entered and no matching option exists', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
  //       // Removes the blinking cursor to prevent screenshot mismatches.
  //       browser.execute('document.querySelector("input").style.caretColor = "transparent";');
  //     });

  //     it('search should open the dropdown by clicking the toggle', () => {
  //       browser.click('#search:last-child');
  //     });

  //     it('search should enter a free text entry that does not match', () => {
  //       browser.keys(['a', 's', 'd', 'f']);
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('no-matching-results', { viewports, selector: '#root' });

  //     it('should set the screen reader aria live region to blank', () => {
  //       expect(browser.getText('[data-terra-select] [aria-live]')).to.equal('No matching results for "asdf"');
  //     });
  //   });

  //   describe('search should select an option by pressing enter', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('search should open the dropdown by clicking the toggle', () => {
  //       browser.click('#search:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('search should select the first option by pressing enter', () => {
  //       browser.keys('Enter');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('search controlled should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/controlled-search');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('search constrolled should open the dropdown by clicking the toggle', () => {
  //       browser.click('#search:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('search constrolled should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });
  // });

  // describe('Tag Variant', () => {
  //   describe('tag should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('tag should open the dropdown by clicking the toggle', () => {
  //       browser.click('#tag:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('tag should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('tag should select an option by pressing enter', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('tag should open the dropdown by clicking the toggle', () => {
  //       browser.click('#tag:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('tag should select the first option by pressing enter', () => {
  //       browser.keys('Enter');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('tag controlled should select an option by click', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/controlled-tag');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('tag controlled should open the dropdown by clicking the toggle', () => {
  //       browser.click('#tag:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('tag controlled should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });

  //   describe('tag should allow a free text entry', () => {
  //     before(() => {
  //       browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
  //       browser.execute(() => {
  //         // Removes the blinking cursor to prevent screenshot mismatches.
  //         document.querySelector('input').style.caretColor = 'transparent';
  //       });
  //     });

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('tag should open the dropdown by clicking the toggle', () => {
  //       browser.click('#tag:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('tag should enter a free text entry', () => {
  //       browser.keys(['T', 'a', 'g']);
  //     });

  //     it('tag should select the first option by pressing enter', () => {
  //       browser.keys('Enter');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });
  // });

  // describe('OptGroup', () => {
  //   describe('should render an optgroup', () => {
  //     before(() => browser.url('/#/raw/tests/terra-form-select/form-select/opt-group'));

  //     Terra.should.beAccessible({ viewports });
  //     Terra.should.matchScreenshot({ viewports });

  //     it('should open the dropdown by clicking the toggle', () => {
  //       browser.click('#opt-group:last-child');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

  //     it('should select the first option', () => {
  //       browser.click('#terra-select-option-blue');
  //     });

  //     Terra.should.beAccessible();
  //     Terra.should.matchScreenshot('selected-option', { viewports });
  //   });
  // });
});
