import React, { PropTypes } from 'react';
import './ModalOverlay.scss';

const propTypes = {
  classNameOverlay: PropTypes.string,
};

const defaultProps = {
  classNameOverlay: null,
};

const ModalOverlay = ({ classNameOverlay, ...customProps }) => <div className={classNameOverlay} {...customProps} />;

ModalOverlay.propTypes = propTypes;
ModalOverlay.defaultProps = defaultProps;

export default ModalOverlay;
