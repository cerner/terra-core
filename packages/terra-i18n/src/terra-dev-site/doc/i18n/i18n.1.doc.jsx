import React from 'react';
import DocTemplate from 'terra-doc-template';
import classNames from 'classnames/bind';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';
import styles from './i18n.1.module.scss';

const cx = classNames.bind(styles);

// Example Files
import I18nPropsTable from '!terra-props-table-loader!../../../../src/I18nProvider';
import I18nSrc from '!raw-loader!../../../../src/I18nProvider';
import I18nDemo from '../example/I18nDemo';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'I18nProvider Example',
        description: (
          <p className={cx('example-description')}>
            <span className={cx('weighted-text')}>Note:</span>
            {' '}
            This is an example of a nested I18nProvider. The site overall is an example of using an application-level I18nProvider implemented through the terra-base component.
          </p>
        ),
        example: <I18nDemo />,
      },
    ]}
    propsTables={[
      {
        componentName: 'I18n Provider',
        componentSrc: I18nSrc,
        componentProps: I18nPropsTable,
      },
    ]}
  />
);

export default DocPage;
