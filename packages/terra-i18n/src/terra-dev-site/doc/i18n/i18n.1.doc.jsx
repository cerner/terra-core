import React from 'react';
import DocTemplate from 'terra-doc-template';
import classNames from 'classnames/bind';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/I18nProvider-props-table.md';
import { name } from '../../../../package.json';
import styles from './i18n.1.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import I18nDemo from '../example/I18nDemo';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
