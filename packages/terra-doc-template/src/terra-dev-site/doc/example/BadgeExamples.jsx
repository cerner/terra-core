import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import classNames from 'classnames/bind';
import { name } from '../../../../package.json';
import styles from '../../../DocTemplate.module.scss';

const cx = classNames.bind(styles);

const packageUrl = 'https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template';
const packageVersion = '2.13.0';

const badgeExamples = () => (
  <div>
    <p>Dynamically generated npm badge:</p>
    <a href={`https://www.npmjs.org/package/${name}`}>
      <img src={`https://badgen.net/npm/v/${name}`} alt="NPM version" />
    </a>
    <p>Custom Badge with packageVersion prop set:</p>
    <a className={cx('badge')} href={`https://www.npmjs.org/package/${name}/v/${packageVersion}`}>
      <span className={cx('badge-name')}>
        {'npm'}
      </span>
      <span className={cx('badge-version')}>
        {`v${packageVersion}`}
      </span>
    </a>
    <p>Custom Badge with packageUrl and packageVersion props set:</p>
    <a className={cx('badge')} href={packageUrl}>
      <span className={cx('badge-name')}>
        {'package'}
      </span>
      <span className={cx('badge-version')}>
        {`v${packageVersion}`}
      </span>
    </a>
  </div>
);

export default badgeExamples;
