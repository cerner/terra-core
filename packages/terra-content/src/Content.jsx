import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Content.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-Content--default',
};

const Content = (props) => (
  <div />
);

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
