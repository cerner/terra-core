import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './DetailView.scss';

const propTypes = {
  /**
   * The title to display
   **/
  title: PropTypes.string,

  /**
   * List of subtitle strings
   **/
  subtitles: PropTypes.arrayOf(PropTypes.string),

  /**
   * Display for visualization data
   **/
  graph: PropTypes.element,

  /**
   * Array of elements to display detail information
   **/
  details: PropTypes.arrayOf(PropTypes.element),

  /**
   * Text to be displayed at the footer of the view
   **/
  footer: PropTypes.string,

  /**
   * Indicates if sections should be devided
   **/
  isDivided: PropTypes.bool,
};

const defaultProps = {
  title: '',
  subtitles: [],
  details: [],
  isDivided: true,
};

const DetailView = ({ title, subtitles, graph, details, footer, isDivided, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames(['terra-DetailView',
    attributes.className,
  ]);

  let divider = null;
  let dividedDetails = [];

  const subtitleElements = subtitles.map((subtitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className="terra-DetailView-subtitle" key={i}>{subtitle}</div>
  ));

  if (isDivided) {
    divider = (<hr className="terra-DetailView-divider" />);

    for (let i = 0; i < details.length; i += 1) {
      dividedDetails.push(details[i]);
      dividedDetails.push(divider);
    }
  } else {
    dividedDetails = details;
  }

  return (
    <div {...attributes}>
      <div className="terra-DetailView-title">
        <h1 className="terra-DetailView-primaryText">{title}</h1>
        {subtitleElements}
      </div>
      {divider}
      {graph}
      {divider}
      {dividedDetails}
      <div className="terra-DetailView-footerText">
        {footer}
      </div>
    </div>
  );
};

DetailView.propTypes = propTypes;

DetailView.defaultProps = defaultProps;

export default DetailView;

