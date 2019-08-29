import React from 'react';
import PropTypes from 'prop-types';
import { Generic } from 'terra-avatar';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const GenericUserColorVariants = ({
  ...props
}) => (
  <Generic variant="single-user" alt="Single User" color={props.color} />
);

GenericUserColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(GenericUserColorVariants);
