import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Radio-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import DefaultRadio from '../example/radio/DefaultRadioExample';
import DefaultRadioSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/radio/DefaultRadioExample';
import DisabledRadio from '../example/radio/DisabledRadioExample';
import DisabledRadioSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/radio/DisabledRadioExample';
import HiddenLabelRadio from '../example/radio/HiddenLabelRadioExample';
import HiddenLabelRadioSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/radio/HiddenLabelRadioExample';
import LongTextRadio from '../example/radio/LongTextRadioExample';
import LongTextRadioSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/radio/LongTextRadioExample';
import InlineRadios from '../example/radio/InlineRadiosExample';
import InlineRadiosSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/radio/InlineRadiosExample';
import MultipleRadios from '../example/radio/MultipleRadiosExample';
import MultipleRadiosSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/radio/MultipleRadiosExample';
import MobileButton from '../example/radio/MobileButton';

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
        packageVersion={version}
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
        propsTablesMarkdown={[PropsTable]}
      />
    );
  }
}

export default DocPage;
