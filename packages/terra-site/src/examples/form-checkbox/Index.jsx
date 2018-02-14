/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-checkbox/docs/README.md';
import { version } from 'terra-form-checkbox/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CheckboxSrc from '!raw-loader!terra-form-checkbox/src/Checkbox';

// Example Files
import DefaultCheckbox from './DefaultCheckboxExample';
import DisabledCheckbox from './DisabledCheckboxExample';
import HiddenLabelCheckbox from './HiddenLabelCheckboxExample';
import LongTextCheckbox from './LongTextCheckboxExample';
import InlineCheckboxes from './InlineCheckboxesExample';
import MultipleCheckboxes from './MultipleCheckboxesExample';
import MobileCheckbox from './MobileCheckboxExample';

class CheckboxExamples extends React.Component {
  constructor() {
    super();
    this.state = { isMobile: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (!window.ontouchstart) {
      this.setState({ isMobile: true });
      window.ontouchstart = 'true';
    } else if (this.state.isMobile) {
      delete window.ontouchstart;
      this.setState({ isMobile: false });
    }
  }

  render() {
    return (
      <div>
        <div id="version">Version: {version}</div>
        <Markdown id="readme" src={ReadMe} />
        <PropsTable id="props" src={CheckboxSrc} />
        <h2 id="default">Default Checkbox</h2>
        <DefaultCheckbox />
        <br />
        <h2 id="disabled">Disabled Checkbox</h2>
        <DisabledCheckbox />
        <br />
        <h2 id="hidden">Hidden Label Checkbox</h2>
        <HiddenLabelCheckbox />
        <br />
        <h2 id="longtext">Long Text Checkbox</h2>
        <LongTextCheckbox />
        <br />
        <h2 id="inline">Multiple Inline Checkboxes</h2>
        <InlineCheckboxes />
        <br />
        <h2 id="multiple">Multiple Checkboxes - first defaults to checked</h2>
        <MultipleCheckboxes />
        <br />
        <h2 id="mobile">[Theme Specific] Resize checkbox on non-desktop touch device</h2>
        <MobileCheckbox onChange={this.onChange} />
      </div>
    );
  }
  }

export default CheckboxExamples;
