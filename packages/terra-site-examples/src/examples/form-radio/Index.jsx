/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-radio/docs/README.md';
import { version } from 'terra-form-radio/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import RadioSrc from '!raw-loader!terra-form-radio/src/Radio';

// Example Files

import DefaultRadio from './DefaultRadioExample';
import DisabledRadio from './DisabledRadioExample';
import HiddenLabelRadio from './HiddenLabelRadioExample';
import LongTextRadio from './LongTextRadioExample';
import InlineRadios from './InlineRadiosExample';
import MultipleRadios from './MultipleRadiosExample';
import MobileButton from './MobileButton';

class RadioExamples extends React.Component {
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
        <PropsTable id="props" src={RadioSrc} />
        <h2 id="default">Default Radio</h2>
        <DefaultRadio />
        <br />
        <h2 id="disabled">Disabled Radio</h2>
        <DisabledRadio />
        <br />
        <h2 id="hidden">Hidden Label Radio</h2>
        <HiddenLabelRadio />
        <br />
        <h2 id="longtext">Long Text Radio</h2>
        <LongTextRadio />
        <br />
        <h2 id="inline">Multiple Inline Radios</h2>
        <InlineRadios />
        <br />
        <h2 id="multiple">Multiple Radios - first defaults to checked</h2>
        <MultipleRadios />
        <br />
        <h2 id="mobile">[Theme Specific] Resize radio buttons on non-desktop touch device</h2>
        <MobileButton onChange={this.onChange} />
      </div>
    );
  }
}

export default RadioExamples;
