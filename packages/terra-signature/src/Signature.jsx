import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './Signature.scss';

const LINEWIDTHS = {
  EXTRA_FINE: 1,
  FINE: 2,
  MEDIUM: 4,
  HEAVY: 6,
};

const MOUSECODES = {
  LEFTCLICK: 0,
};

const propTypes = {
  /**
   * The line width to use when drawing the signature on the canvas.
   * One of Signature.Opts.Width.EXTRA_FINE, Signature.Opts.Width.FINE, Signature.Opts.Width.MEDIUM, Signature.Opts.Width.HEAVY.
   */
  lineWidth: PropTypes.oneOf([LINEWIDTHS.EXTRA_FINE, LINEWIDTHS.FINE, LINEWIDTHS.MEDIUM, LINEWIDTHS.HEAVY]),
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
  lineWidth: LINEWIDTHS.FINE,
  lineSegments: [],
  onChange: undefined,
};

class Signature extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lineSegments: props.lineSegments, lineWidth: props.lineWidth };

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseXY = this.mouseXY.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.addLine = this.addLine.bind(this);
    this.draw = this.draw.bind(this);
    this.drawSignature = this.drawSignature.bind(this);
    this.clearSignature = this.clearSignature.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    if ('ontouchstart' in document.documentElement) {
      this.canvas.addEventListener('touchstart', this.mouseDown, false);
      this.canvas.addEventListener('touchmove', this.mouseXY, true);
      this.canvas.addEventListener('touchend', this.mouseUp, false);
      document.body.addEventListener('touchleave', this.mouseLeave, false);
      document.body.addEventListener('touchcancel', this.mouseUp, false);
    } else {
      this.canvas.addEventListener('mousedown', this.mouseDown);
      this.canvas.addEventListener('mousemove', this.mouseXY);
      document.body.addEventListener('mouseleave', this.mouseLeave, false);
      document.body.addEventListener('mouseup', this.mouseUp);
    }

    const context = this.canvas.getContext('2d');

    context.lineWidth = this.props.lineWidth;

    const style = window.getComputedStyle(this.canvas);
    const color = style.getPropertyValue('color');
    context.strokeStyle = color;

    this.updateDimensions();

    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.lineSegments !== nextProps.lineSegments) || (this.props.lineWidth !== nextProps.lineWidth)) {
      this.setState({ lineSegments: nextProps.lineSegments, lineWidth: nextProps.lineWidth });
      this.drawSignature(nextProps.lineSegments, nextProps.lineWidth);
    }
  }

  componentWillUnmount() {
    if ('ontouchstart' in document.documentElement) {
      this.canvas.removeEventListener('touchstart', this.mouseDown);
      this.canvas.removeEventListener('touchmove', this.mouseXY);
      this.canvas.removeEventListener('touchend', this.mouseUp);
      document.body.removeEventListener('touchleave', this.mouseLeave);
      document.body.removeEventListener('touchcancel', this.mouseUp);
    } else {
      this.canvas.removeEventListener('mousedown', this.mouseDown);
      this.canvas.removeEventListener('mousemove', this.mouseXY);
      document.body.removeEventListener('mouseleave', this.mouseLeave);
      document.body.removeEventListener('mouseup', this.mouseUp);
    }

    window.removeEventListener('resize', this.updateDimensions);
  }

  mouseDown(event) {
    if ('button' in event && event.button !== MOUSECODES.LEFTCLICK) {
      return;
    }
    this.setState({ lastLineSegments: [], painting: true });

    this.canvasRect = this.canvas.getBoundingClientRect();

    this.addLine(event.pageX - this.canvasRect.left, event.pageY - this.canvasRect.top, false);

    this.draw();
  }

  mouseUp(event) {
    this.setState({ painting: false });

    if (this.props.onChange) {
      this.props.onChange(event, this.state.lineSegments, this.state.lastLineSegments);
    }
  }

  mouseXY(event) {
    if (this.state.painting) {
      this.addLine(event.pageX - this.canvasRect.left, event.pageY - this.canvasRect.top, true);

      this.draw();
    }
  }

  mouseLeave(event) {
    if (this.state.painting) {
      this.setState({ painting: false });
      if (this.props.onChange) {
        this.props.onChange(event, this.state.lineSegments, this.state.lastLineSegments);
      }
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
    this.setState({
      lineSegments: [...this.state.lineSegments, newSegment],
      lastLineSegments: [...this.state.lastLineSegments, newSegment],
    });
  }


  draw() {
    const context = this.canvas.getContext('2d');

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
    const context = this.canvas.getContext('2d');

    context.lineJoin = 'round';
    context.lineWidth = lineWidth;

    // clear canvas
    context.clearRect(0, 0, this.canvasRect.width, this.canvasRect.height);

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

    const context = this.canvas.getContext('2d');

    context.clearRect(0, 0, this.canvasRect.width, this.canvasRect.height);
  }

  updateDimensions() {
    this.canvasRect = this.canvas.getBoundingClientRect();

    this.canvas.width = this.canvasRect.width;
    this.canvas.height = this.canvasRect.height;

    this.drawSignature(this.state.lineSegments);
  }

  render() {
    const { lineSegments, lineWidth, onChange, ...custProps } = this.props;

    return (
      <canvas {...custProps} className={styles.signature} ref={(node) => { this.canvas = node; }} />
    );
  }
}

Signature.propTypes = propTypes;
Signature.defaultProps = defaultProps;
Signature.Opts = {};
Signature.Opts.Width = LINEWIDTHS;

export default Signature;
