import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import styles from './SectionHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text to be displayed on the SectionHeader.
   */
  title: PropTypes.node.isRequired,
  /**
   * Callback function triggered when the accordion icon is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Whether the accordion icon should be displayed in its 'open' or 'closed' position.
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  onClick: undefined,
  isOpen: false,
};

const SectionHeader = ({
  title,
  onClick,
  isOpen,
  ...customProps
}) => {
  if ((process.env.NODE_ENV !== 'production') && (!onClick && isOpen)) {
    // eslint-disable-next-line no-console
    console.warn('\'isOpen\' are intended to be used only when \'onClick\' is provided.');
  }

  const attributes = Object.assign({}, customProps);

  if (onClick) {
    attributes.tabIndex = '0';
  }

  const iconClassNames = cx([
    'accordion-icon',
    { 'is-open': onClick && isOpen },
  ]);

  const accordionIcon = (
    <div className={cx('accordion-icon-wrapper')}>
      <span className={iconClassNames} />
    </div>
  );

  const sectionHeaderClassNames = cx([
    'section-header',
    { 'is-interactable': onClick },
    customProps.className,
  ]);

  // allows us to set an onClick on the div
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div {...attributes} onClick={onClick} className={sectionHeaderClassNames}>
      <Arrange
        fitStart={onClick && accordionIcon}
        fill={<h2 className={cx('title')}>{title}</h2>}
      />
    </div>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions */
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
