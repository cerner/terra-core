import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  /**
   * Text to display as a subtitle
   **/
  text: PropTypes.string.isRequired,
};

const DetailViewSubtitle = ({ text, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames(['terra-DetailView-subtitle',
    attributes.className,
  ]);

  return (
    <div {...attributes}>
      {text}
    </div>
  );
};

DetailViewSubtitle.propTypes = propTypes;

export default DetailViewSubtitle;
