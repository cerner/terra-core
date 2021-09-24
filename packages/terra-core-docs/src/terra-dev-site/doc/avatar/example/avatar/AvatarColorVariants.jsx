import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'terra-avatar';
import ColorVariantsWrapper from '../common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const AvatarColorVariants = ({
  ...props
}) => (
  <Avatar alt="Joe Shane" initials="JS" color={props.color} />
);

AvatarColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(AvatarColorVariants);
