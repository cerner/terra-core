/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-select/docs/README.md';
import { name } from 'terra-form-select/package.json';

// Component Source
import SelectSrc from '!raw-loader!terra-form-select/src/Select';
import SelectOptionSrc from '!raw-loader!terra-form-select/src/SelectOption';

// Example Files
import DefaultSelect from './DefaultSelect';
import DefaultSelectSrc from '!raw-loader!./DefaultSelect';
import InvalidSelect from './InvalidSelect';
import InvalidSelectSrc from '!raw-loader!./InvalidSelect';
import HiddenPlaceholderSelect from './HiddenPlaceholderSelect';
import HiddenPlaceholderSelectSrc from '!raw-loader!./HiddenPlaceholderSelect';
import BlankSelect from './BlankSelect';
import BlankSelectSrc from '!raw-loader!./BlankSelect';
import SelectWithoutDefault from './SelectWithoutDefault';
import SelectWithoutDefaultSrc from '!raw-loader!./SelectWithoutDefault';
import DisabledSelect from './DisabledSelect';
import DisabledSelectSrc from '!raw-loader!./DisabledSelect';
import SelectInsideModal from './SelectInsideModal';
import SelectInsideModalSrc from '!raw-loader!./SelectInsideModal';
import BoundedSelect from './BoundedSelect';
import BoundedSelectSrc from '!raw-loader!./BoundedSelect';
import LongTextSelect from './LongTextSelect';
import LongTextSelectSrc from '!raw-loader!./LongTextSelect';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Select component with default initial value',
        example: <DefaultSelect />,
        source: DefaultSelectSrc,
      },
      {
        title: 'Invalid select component',
        example: <InvalidSelect />,
        source: InvalidSelectSrc,
      },
      {
        title: 'Select component with placeholder hidden',
        example: <HiddenPlaceholderSelect />,
        source: HiddenPlaceholderSelectSrc,
      },
      {
        title: 'Select component with no default value and placeholder hidden',
        example: <BlankSelect />,
        source: BlankSelectSrc,
      },
      {
        title: 'Select component with no initial value set',
        example: <SelectWithoutDefault />,
        source: SelectWithoutDefaultSrc,
      },
      {
        title: 'Disabled select component',
        example: <DisabledSelect />,
        source: DisabledSelectSrc,
      },
      {
        title: 'Bounded Select',
        example: <BoundedSelect />,
        source: BoundedSelectSrc,
      },
      {
        title: 'Long Text Select',
        example: <LongTextSelect />,
        source: LongTextSelectSrc,
      },
      {
        title: 'Select inside a modal',
        example: <SelectInsideModal />,
        source: SelectInsideModalSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Select',
        componentSrc: SelectSrc,
      },
      {
        componentName: 'Select.Option',
        componentSrc: SelectOptionSrc,
      },
    ]}
  />
);

export default DocPage;
