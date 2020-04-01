import React from 'react';
import PropTypes from 'prop-types';
import { Generic } from 'terra-avatar';
import GenericAvatarVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/generic/GenericAvatarVariantsWrapper';

const propTypes = { color: PropTypes.string, size: PropTypes.string, variant: PropTypes.string };

const GenericAvatarVariants = ({
  ...props
}) => (
  <Generic variant={props.variant} alt={props.variant} color={props.color} size={props.size} />
);

GenericAvatarVariants.propTypes = propTypes;
export default GenericAvatarVariantsWrapper(GenericAvatarVariants);
