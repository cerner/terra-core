/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-checkbox/docs/README.md';
import { name } from 'terra-form-checkbox/package.json';

// Component Source
import CheckboxSrc from '!raw-loader!terra-form-checkbox/src/Checkbox';

// Example Files
import DefaultCheckbox from './DefaultCheckboxExample';
import DefaultCheckboxSrc from '!raw-loader!./DefaultCheckboxExample';
import DisabledCheckbox from './DisabledCheckboxExample';
import DisabledCheckboxSrc from '!raw-loader!./DisabledCheckboxExample';
import HiddenLabelCheckbox from './HiddenLabelCheckboxExample';
import HiddenLabelCheckboxSrc from '!raw-loader!./HiddenLabelCheckboxExample';
import LongTextCheckbox from './LongTextCheckboxExample';
import LongTextCheckboxSrc from '!raw-loader!./LongTextCheckboxExample';
import InlineCheckboxes from './InlineCheckboxesExample';
import InlineCheckboxesSrc from '!raw-loader!./InlineCheckboxesExample';
import MultipleCheckboxes from './MultipleCheckboxesExample';
import MultipleCheckboxesSrc from '!raw-loader!./MultipleCheckboxesExample';
import MobileCheckbox from './MobileCheckboxExample';

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
        propsTables={[
          {
            componentName: 'Checkbox',
            componentSrc: CheckboxSrc,
          },
        ]}
      />
    );
  }
}

export default DocPage;
