import React from 'react';
import PropTypes from 'prop-types';
import { Facility } from 'terra-avatar';
import ColorVariantsWrapper from '../common/ColorVariantsWrapper';

const propTypes = { color: PropTypes.string };

const FacilityColorVariants = ({
  ...props
}) => (
  <Facility alt="Lima" color={props.color} />
);

FacilityColorVariants.propTypes = propTypes;
export default ColorVariantsWrapper(FacilityColorVariants);
