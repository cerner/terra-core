import React, {
  useContext, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ColumnResizeHandle.module.scss';
import GridContext, { GridConstants } from '../utils/GridContext';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text of the column associated with the divider.
   */
  columnText: PropTypes.string.isRequired,

  /**
   * Number that specifies the Width of the associated column in pixels.
   */
  columnWidth: PropTypes.number.isRequired,

  /**
   * Number that specifies the height of the resize handle in pixels.
   */
  height: PropTypes.number.isRequired,

  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number.isRequired,

  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number.isRequired,

  /**
   * Function that is called when onMouseDown event is triggered for the resize handle.
   */
  onResizeMouseDown: PropTypes.func.isRequired,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const ColumnResizeHandle = (props) => {
  const {
    columnText,
    columnWidth,
    height,
    minimumWidth,
    maximumWidth,
    onResizeMouseDown,
    intl,
  } = props;

  const theme = useContext(ThemeContext);
  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  // State variable to control screen reader visibility
  const [isActive, setActive] = useState(false);

  // Ref variable for native resize handle element
  const resizeHandleRef = useRef();

  const onMouseDown = (event) => {
    // Set focus to resize handle DOM element
    resizeHandleRef.current.focus();

    onResizeMouseDown(event);

    // Prevent event bubbling since necessary actions are handled by this component
    event.stopPropagation();
    // Prevent default dragging behavior
    event.preventDefault();
  };

  return (
    /* eslint-disable react/forbid-dom-props */
    <div
      ref={resizeHandleRef}
      draggable
      role="slider"
      tabIndex={isGridContext ? -1 : 0}
      aria-hidden={isGridContext ? !isActive : undefined}
      aria-valuemin={minimumWidth}
      aria-valuenow={columnWidth}
      aria-valuemax={maximumWidth}
      aria-label={columnText}
      aria-valuetext={intl.formatMessage({ id: 'Terra.table.resizeHandleValueText' }, { columnWidth })}
      style={{ height: `${height}px` }}
      onMouseDown={onMouseDown}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cx('resize-handle', theme.className)}
    />
  );
};

ColumnResizeHandle.propTypes = propTypes;
export default injectIntl(ColumnResizeHandle);
