import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Button-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ButtonBlock from '../example/ButtonBlock';
import ButtonBlockSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonBlock';
import ButtonAnchor from '../example/ButtonAnchor';
import ButtonAnchorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonAnchor';
import ButtonCompact from '../example/ButtonCompact';
import ButtonCompactSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonCompact';
import ButtonDisabled from '../example/ButtonDisabled';
import ButtonDisabledSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonDisabled';
import ButtonOnClick from '../example/ButtonOnClick';
import ButtonOnClickSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonOnClick';
import ButtonIcon from '../example/ButtonIcon';
import ButtonIconSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonIcon';
import ButtonVariant from '../example/ButtonVariant';
import ButtonVariantSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonVariant';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Variant',
        example: <ButtonVariant />,
        source: ButtonVariantSrc,
      },
      {
        title: 'Block',
        example: <ButtonBlock />,
        source: ButtonBlockSrc,
      },
      {
        title: 'Compact',
        example: <ButtonCompact />,
        source: ButtonCompactSrc,
      },
      {
        title: 'Anchor',
        example: <ButtonAnchor />,
        source: ButtonAnchorSrc,
      },
      {
        title: 'Disabled',
        example: <ButtonDisabled />,
        source: ButtonDisabledSrc,
      },
      {
        title: 'OnClick',
        example: <ButtonOnClick />,
        source: ButtonOnClickSrc,
      },
      {
        title: 'Icon',
        example: <ButtonIcon />,
        source: ButtonIconSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
