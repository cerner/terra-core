import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { Facility } from 'terra-avatar/lib/Avatar';
import ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const FacilityColorVariants = ({
  ...props
}) => (
  <Facility alt="Lima" color={props.color} />
);

FacilityColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(FacilityColorVariants);
