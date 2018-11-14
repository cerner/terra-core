import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { SharedUser } from 'terra-avatar/lib/index';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const SharedUserColorVariants = ({
  ...props
}) => (
  <SharedUser alt="Shared User" color={props.color} />
);

SharedUserColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(SharedUserColorVariants);
