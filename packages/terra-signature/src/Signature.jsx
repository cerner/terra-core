import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './Signature.scss';

const LineWidths = {
  EXTRA_FINE: 1,
  FINE: 2,
  MEDIUM: 4,
  HEAVY: 6,
};
const propTypes = {
  /**
   * The line width to use when drawing the signature on the canvas.
   * One of LineWidths.EXTRA_FINE, LineWidths.FINE, LineWidths.MEDIUM, LineWidths.HEAVY.
   */
  lineWidth: PropTypes.oneOf([LineWidths.EXTRA_FINE, LineWidths.FINE, LineWidths.MEDIUM, LineWidths.HEAVY]),
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

  constructor(props) {
    super(props);

    this.state = { lineSegments: props.lineSegments, lineWidth: props.lineWidth };

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseXY = this.mouseXY.bind(this);
    this.addLine = this.addLine.bind(this);
    this.draw = this.draw.bind(this);
    this.drawSignature = this.drawSignature.bind(this);
    this.clearSignature = this.clearSignature.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    const canvas = this.node;

    if ('ontouchstart' in document.documentElement) {
      this.node.addEventListener('touchstart', this.mouseDown, false);
      this.node.addEventListener('touchmove', this.mouseXY, true);
      this.node.addEventListener('touchend', this.mouseUp, false);
      document.body.addEventListener('touchcancel', this.mouseUp, false);
    } else {
      this.node.addEventListener('mousedown', this.mouseDown);
      this.node.addEventListener('mousemove', this.mouseXY);
      document.body.addEventListener('mouseup', this.mouseUp);
    }

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

    if (this.props.lineSegments && this.props.lineWidth) {
      this.drawSignature(this.props.lineSegments, this.props.lineWidth);
      this.setState({ lineSegments: this.props.lineSegments, lineWidth: this.props.lineWidth });
    }

    window.addEventListener('resize', () => this.updateDimensions());
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.lineSegments !== nextProps.lineSegments) ||
      (this.props.lineWidth !== nextProps.lineWidth)) {
      this.setState({ lineSegments: nextProps.lineSegments, lineWidth: nextProps.lineWidth });
      this.drawSignature(nextProps.lineSegments, nextProps.lineWidth);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('touchcancel', this.mouseUp);
    window.removeEventListener('mouseup', this.mouseUp);
  }

  mouseDown(event) {
    const canvas = this.node;

    this.setState({ painting: true });

    const rect = canvas.getBoundingClientRect();
    this.addLine(event.pageX - rect.left, event.pageY - rect.top, false);

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
      const rect = canvas.getBoundingClientRect();
      this.addLine(event.pageX - rect.left, event.pageY - rect.top, true);

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

  drawSignature(lineSegments, lineWidth) {
    const canvas = this.node;
    const context = canvas.getContext('2d');

    context.lineJoin = 'round';
    context.lineWidth = lineWidth;

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
    const { ...custProps } = this.props;

    delete custProps.lineSegments;
    delete custProps.lineWidth;
    delete custProps.onChange;

    return (
      <canvas {...custProps} className={styles.signature} ref={(node) => { this.node = node; }} />
    );
  }
}

Signature.propTypes = propTypes;
Signature.defaultProps = defaultProps;
Signature.Opts = {};
Signature.Opts.Width = LineWidths;

export default Signature;
