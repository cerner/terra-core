import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'terra-badge';

const propTypes = { text: PropTypes.string, intent: PropTypes.string, visuallyHiddenText: PropTypes.string };

const BadgeInDoc = ({
  ...props
}) => (
  <Badge text={props.text} intent={props.intent} visuallyHiddenText={props.visuallyHiddenText} />
);

BadgeInDoc.propTypes = propTypes;
export default BadgeInDoc;
