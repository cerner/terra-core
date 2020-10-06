import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Notice.module.scss';

const cx = classNames.bind(styles);

const getTitle = (variant) => {
  if (variant === 'ux-recommendation') {
    return 'UX Recommendation';
  }

  if (variant === 'caution') {
    return 'Caution';
  }

  if (variant === 'deprecation') {
    return 'Deprecation Notice';
  }

  if (variant === 'maintenance') {
    return 'In Maintenance';
  }

  if (variant === 'important') {
    return 'Important';
  }

  return 'error';
};

const propTypes = {
  /**
   * The aria-level attribute specifies the heading level of the notice. If no level is present, a value of 2 is the default.
   */
  ariaLevel: PropTypes.oneOf([
    '2',
    '3',
    '4',
    '5',
    '6',
  ]),
  /**
  * The main body text of the notice. Generally a string or a p tag.
  */
  children: PropTypes.node,
  /**
  * The type of notice.
  */
  variant: PropTypes.oneOf([
    'ux-recommendation',
    'caution',
    'deprecation',
    'maintenance',
    'important',
  ]),
};

const defaultProps = {
  ariaLevel: '2',
  variant: 'important',
};

const Notice = ({
  ariaLevel,
  variant,
  children,
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('notice', variant, theme.className)}>
      <div className={cx('accessory')} aria-hidden="true" focusable="false" />
      <div role="heading" className={cx('title')} aria-level={ariaLevel}>
        <span>
          {getTitle(variant)}
        </span>
      </div>
      <div className={cx('children')}>
        {
          // Wrap any string children in a p tag.
          React.Children.map(children, element => {
            if (typeof element === 'string') {
              return <p>{element}</p>;
            }
            return element;
          })
        }
      </div>
    </div>
  );
};

Notice.propTypes = propTypes;
Notice.defaultProps = defaultProps;

export default Notice;
