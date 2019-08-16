import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Checkbox-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import DefaultCheckbox from '../example/checkbox/DefaultCheckboxExample';
import DefaultCheckboxSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/DefaultCheckboxExample';
import DisabledCheckbox from '../example/checkbox/DisabledCheckboxExample';
import DisabledCheckboxSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/DisabledCheckboxExample';
import HiddenLabelCheckbox from '../example/checkbox/HiddenLabelCheckboxExample';
import HiddenLabelCheckboxSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/HiddenLabelCheckboxExample';
import LongTextCheckbox from '../example/checkbox/LongTextCheckboxExample';
import LongTextCheckboxSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/LongTextCheckboxExample';
import InlineCheckboxes from '../example/checkbox/InlineCheckboxesExample';
import InlineCheckboxesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/InlineCheckboxesExample';
import MultipleCheckboxes from '../example/checkbox/MultipleCheckboxesExample';
import MultipleCheckboxesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/checkbox/MultipleCheckboxesExample';
import MobileCheckbox from '../example/checkbox/MobileCheckboxExample';

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
            title: 'Default Checkbox',
            example: <DefaultCheckbox />,
            source: DefaultCheckboxSrc,
          },
          {
            title: 'Disabled Checkbox',
            example: <DisabledCheckbox />,
            source: DisabledCheckboxSrc,
          },
          {
            title: 'Hidden Label Checkbox',
            example: <HiddenLabelCheckbox />,
            source: HiddenLabelCheckboxSrc,
          },
          {
            title: 'Long Text Checkbox',
            example: <LongTextCheckbox />,
            source: LongTextCheckboxSrc,
          },
          {
            title: 'Multiple Inline Checkboxes',
            example: <InlineCheckboxes />,
            source: InlineCheckboxesSrc,
          },
          {
            title: 'Multiple Checkboxes - first defaults to checked',
            example: <MultipleCheckboxes />,
            source: MultipleCheckboxesSrc,
          },
          {
            title: '[Theme Specific] Resize checkboxes on non-desktop touch device',
            example: <MobileCheckbox onChange={this.onChange} />,
          },
        ]}
        propsTablesMarkdown={[PropsTable]}
      />
    );
  }
}

export default DocPage;
