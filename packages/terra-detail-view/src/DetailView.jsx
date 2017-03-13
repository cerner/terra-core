import React, { PropTypes } from 'react';
import classNames from 'classnames';
import DetailViewSubtitle from './DetailViewSubtitle';
import './DetailView.scss';

const propTypes = {
  /**
   * The title display for the view
   **/
  title: PropTypes.element,

  /**
   * List of subtitle displays
   **/
  subtitles: PropTypes.arrayOf(PropTypes.element),

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
  divided: PropTypes.bool,
};

const defaultProps = {
  subtitles: [],
  details: [],
  divided: true,
};

const DetailView = ({ title, subtitles, graph, details, footer, divided, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames(['terra-DetailView',
    attributes.className,
  ]);

  let divider = null;
  let dividedDetails = [];

  if (divided) {
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
        <div className="terra-DetailView-primaryText">{title}</div>
        {subtitles}
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

DetailView.Subtitle = DetailViewSubtitle;

export default DetailView;

