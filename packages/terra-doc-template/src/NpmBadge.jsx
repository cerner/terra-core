import React from 'react';
import classNames from 'classnames/bind';
import styles from './NpmBadge.module.scss';

const cx = classNames.bind(styles);

const NpmBadge = (props) => {
  /* eslint-disable react/prop-types */
  const { packageName, packageUrl, packageVersion } = props;
  /* eslint-enable react/prop-types */

  return packageVersion
    ? (
      <div className={cx('badge-container')}>
        <a className={cx('badge')} href={packageUrl || `https://www.npmjs.org/package/${packageName}/v/${packageVersion}`}>
          <span className={cx('badge-name')}>
            {packageUrl ? 'package' : 'npm'}
          </span>
          <span className={cx('badge-version')}>
            {`v${packageVersion}`}
          </span>
        </a>
      </div>
    )
    : (
      <a href={`https://www.npmjs.org/package/${packageName}`}>
        <img src={`https://badgen.net/npm/v/${packageName}`} alt="NPM version" />
      </a>
    );
};

export default NpmBadge;
