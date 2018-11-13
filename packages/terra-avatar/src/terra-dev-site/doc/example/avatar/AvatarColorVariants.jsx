import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { Avatar } from 'terra-avatar/lib/Avatar';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const AvatarColorVariants = ({
  ...props
}) => (
  <Avatar alt="User" color={props.color} />
);

AvatarColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(AvatarColorVariants);
