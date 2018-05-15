/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-radio/docs/README.md';
import { name } from 'terra-form-radio/package.json';

// Component Source
import RadioSrc from '!raw-loader!terra-form-radio/src/Radio';

// Example Files
import DefaultRadio from './DefaultRadioExample';
import DefaultRadioSrc from '!raw-loader!./DefaultRadioExample';
import DisabledRadio from './DisabledRadioExample';
import DisabledRadioSrc from '!raw-loader!./DisabledRadioExample';
import HiddenLabelRadio from './HiddenLabelRadioExample';
import HiddenLabelRadioSrc from '!raw-loader!./HiddenLabelRadioExample';
import LongTextRadio from './LongTextRadioExample';
import LongTextRadioSrc from '!raw-loader!./LongTextRadioExample';
import InlineRadios from './InlineRadiosExample';
import InlineRadiosSrc from '!raw-loader!./InlineRadiosExample';
import MultipleRadios from './MultipleRadiosExample';
import MultipleRadiosSrc from '!raw-loader!./MultipleRadiosExample';
import MobileButton from './MobileButton';

class DocPage extends React.Component {
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
      <DocTemplate
        packageName={name}
        readme={ReadMe}
        srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
        examples={[
          {
            title: 'Default Radio',
            example: <DefaultRadio />,
            source: DefaultRadioSrc,
          },
          {
            title: 'Disabled Radio',
            example: <DisabledRadio />,
            source: DisabledRadioSrc,
          },
          {
            title: 'Hidden Label Radio',
            example: <HiddenLabelRadio />,
            source: HiddenLabelRadioSrc,
          },
          {
            title: 'Long Text Radio',
            example: <LongTextRadio />,
            source: LongTextRadioSrc,
          },
          {
            title: 'Multiple Inline Radios',
            example: <InlineRadios />,
            source: InlineRadiosSrc,
          },
          {
            title: 'Multiple Radios - first defaults to checked',
            example: <MultipleRadios />,
            source: MultipleRadiosSrc,
          },
          {
            title: '[Theme Specific] Resize radio buttons on non-desktop touch device',
            example: <MobileButton onChange={this.onChange} />,
          },
        ]}
        propsTables={[
          {
            componentName: 'Radio',
            componentSrc: RadioSrc,
          },
        ]}
      />
    );
  }
}

export default DocPage;
