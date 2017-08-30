import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import './Signature.scss';

const LineWidths = {
  EXTRAFINE: 1,
  FINE: 2,
  MEDIUM: 4,
  HEAVY: 6,
};


const propTypes = {
  /**
   * The line width to use when drawing the signature on the canvas.
   * One of LineWidths.EXTRAFINE, LineWidths.FINE, LineWidths.MEDIUM, LineWidths.HEAVY.
   */
  lineWidth: PropTypes.oneOf([LineWidths.EXTRAFINE, LineWidths.FINE, LineWidths.MEDIUM, LineWidths.HEAVY]),

  /**
  * Line segments that define signature.
  */
  lineSegments: PropTypes.array,

  /**
   * A callback function to execute when a line segment is drawn. The first parameter is the event, the
   * second parameter is all the line segments, and the last parameter is the most recent line segment drawn.
   */
  onChange: PropTypes.func,

};

const defaultProps = {
  lineWidth: LineWidths.FINE,
  lineSegments: undefined,
  onChange: undefined,
};

class Signature extends React.Component {

  constructor() {
    super();

    this.state = { lineSegments: [] };
  }

  componentDidMount() {
    const canvas = this.node;

    this.node.addEventListener('mousedown', e => this.mouseDown(e));
    this.node.addEventListener('mousemove', e => this.mouseXY(e));
    document.body.addEventListener('mouseup', e => this.mouseUp(e));

    // For mobile
    this.node.addEventListener('touchstart', e => this.mouseDown(e), false);
    this.node.addEventListener('touchmove', e => this.mouseXY(e), true);
    this.node.addEventListener('touchend', e => this.mouseUp(e), false);
    document.body.addEventListener('touchcancel', e => this.mouseUp(e).bind(this), false);

    this.node.width = canvas.getBoundingClientRect().width;
    this.node.height = canvas.getBoundingClientRect().height;

    const context = this.node.getContext('2d');

    context.lineWidth = this.props.lineWidth;

    const style = window.getComputedStyle(this.node);
    const color = style.getPropertyValue('color');
    context.strokeStyle = color;

    if (this.props.lineSegments) {
      this.state.lineSegments = this.props.lineSegments;
      this.drawSignature(this.state.lineSegments);
    }

    window.addEventListener('resize', () => this.updateDimensions());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lineSegments !== nextProps.lineSegments) {
      const newState = Object.assign({}, this.state, { lineSegments: nextProps.lineSegments });
      this.drawSignature(nextProps.lineSegments);
      this.setState(newState);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateDimensions());
  }

  mouseDown(event) {
    const canvas = this.node;

    this.setState({ painting: true });
    this.addLine(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop, false);

    this.draw();
  }

  mouseUp(event) {
    this.setState({ painting: false });

    if (this.props.onChange) {
      this.props.onChange(event, this.state.lineSegments, this.state.lineSegments[this.state.lineSegments.length - 1]);
    }
  }

  mouseXY(event) {
    const canvas = this.node;

    if (this.state.painting) {
      this.addLine(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop, true);
      this.draw();
    }
  }

  addLine(x, y, dragging) {
    let newSegment;

    if (dragging) {
      const lastLineSegment = this.state.lineSegments[this.state.lineSegments.length - 1];
      newSegment = { x1: lastLineSegment.x2, y1: lastLineSegment.y2, x2: x, y2: y };
    } else {
      newSegment = { x1: x, y1: y, x2: x, y2: y };
    }

    // Record new line segment
    this.setState({ lineSegments: [...this.state.lineSegments, newSegment] });
  }


  draw() {
    const canvas = this.node;
    const context = canvas.getContext('2d');

    if (this.state.lineSegments.length > 0) {
      const lastLineSegment = this.state.lineSegments[this.state.lineSegments.length - 1];

      context.lineJoin = 'round';

      context.beginPath();
      context.moveTo(lastLineSegment.x1, lastLineSegment.y1);
      context.lineTo(lastLineSegment.x2, lastLineSegment.y2);

      context.stroke();
    }
  }

  drawSignature(lineSegments) {
    const canvas = this.node;
    const context = canvas.getContext('2d');

    context.lineJoin = 'round';
    context.lineWidth = this.props.lineWidth;

    // clear canvas
    context.clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);

    // iterate and draw all recorded line segments
    const segmentCount = lineSegments.length;
    for (let i = 0; i < segmentCount; i += 1) {
      context.beginPath();
      context.moveTo(lineSegments[i].x1, lineSegments[i].y1);
      context.lineTo(lineSegments[i].x2, lineSegments[i].y2);

      context.stroke();
    }
  }

  clearSignature() {
    this.setState({ lineSegments: [] });

    const canvas = this.node;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
  }

  updateDimensions() {
    const canvas = this.node;

    this.node.width = canvas.getBoundingClientRect().width;
    this.node.height = canvas.getBoundingClientRect().height;

    this.drawSignature(this.state.lineSegments);
  }

  render() {
    return (
      <canvas className="terra-Signature" ref={(node) => { this.node = node; }} />
    );
  }
}

Signature.propTypes = propTypes;
Signature.defaultProps = defaultProps;
Signature.Width = LineWidths;

export default Signature;
