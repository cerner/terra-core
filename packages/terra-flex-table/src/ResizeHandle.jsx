import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './ResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifer for the ResizeHandle. This value will be provided to the `onResizeStop` function prop as a parameter for
   * identification purposes.
   */
  id: PropTypes.string.isRequired,
  /**
   * Function called upon release of the ResizeHandle. The id, as well as the new ResizeHandle position, will be provided
   * as arguments. Parameters: `onResizeStop(resizeHandleId, positionDelta)`
   */
  onResizeStop: PropTypes.func,
};

class ResizeHandle extends React.Component {
  /**
   * Click events that occur on the ResizeHandle are not propagated. This prevents clicks on the ResizeHandle from registering
   * as clicks on the elements over which the ResizeHandle is rendered.
   */
  static preventClickEvent(event) {
    event.stopPropagation();
  }

  constructor(props) {
    super(props);

    this.handleDragMove = this.handleDragMove.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragMove(event, data) {
    const handleNode = data.node;

    this.resizeHandleDragPosition += data.deltaX;

    handleNode.style.transform = `translate3d(${this.resizeHandleDragPosition}px, 0, 0)`;
  }

  handleDragStart(event, data) {
    const handleNode = data.node;

    this.resizeHandleDragPosition = 0;

    handleNode.classList.add(cx('dragging'));
  }

  handleDragStop(event, data) {
    const { id, onResizeStop } = this.props;
    const handleNode = data.node;

    handleNode.classList.remove(cx('dragging'));
    handleNode.style.transform = '';

    if (onResizeStop) {
      onResizeStop(id, this.resizeHandleDragPosition);
    }
  }

  render() {
    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
      <DraggableCore
        onStart={this.handleDragStart}
        onStop={this.handleDragStop}
        onDrag={this.handleDragMove}
      >
        <div className={cx('resize-handle')} onClick={ResizeHandle.preventClickEvent} />
      </DraggableCore>
      /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    );
  }
}

ResizeHandle.propTypes = propTypes;

export default ResizeHandle;
