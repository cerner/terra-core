import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'terra-avatar';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const AvatarColorVariants = ({
  ...props
}) => (
  <Avatar alt="User" initials="JS" color={props.color} />
);

AvatarColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(AvatarColorVariants);
