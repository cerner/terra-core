import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The element id to associate to the descriptive text.
   */
  summaryId: PropTypes.string.isRequired,
};

const defaultProps = {
};

const OutlineTableView = ({
  ...customProps
}) => {
  const tableClasses = classNames(
    cx(
      'outline',
    ),
    customProps.className,
  );

  return (
    <div
      className={tableClasses}
    >
      Hello World
    </div>
  );
};

OutlineTableView.propTypes = propTypes;
OutlineTableView.defaultProps = defaultProps;

export default OutlineTableView;
