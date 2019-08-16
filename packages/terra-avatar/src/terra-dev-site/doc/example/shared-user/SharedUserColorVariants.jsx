import React from 'react';
import PropTypes from 'prop-types';
import { SharedUser } from 'terra-avatar';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const SharedUserColorVariants = ({
  ...props
}) => (
  <SharedUser alt="Shared User" color={props.color} />
);

SharedUserColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(SharedUserColorVariants);
