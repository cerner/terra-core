import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ThemeContext from 'terra-theme-context';
import FocusTrap from 'focus-trap-react';
import styles from './Cell.module.scss';
import ColumnContext from './utils/ColumnContext';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Boolean indicating whether the Cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating that the cell is a row header.
   */
  isRowHeader: PropTypes.bool,

  /**
   * Boolean indicating that the cell has been highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,

  /**
   * String that specifies the height of the cell. Any valid CSS value is accepted.
   */
  height: PropTypes.string,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isRowHeader: false,
  isSelected: false,
  isSelectable: true,
  isMasked: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    rowIndex,
    columnIndex,
    ariaLabel,
    isMasked,
    isRowHeader,
    isSelectable,
    isSelected,
    isHighlighted,
    children,
    onCellSelect,
    height,
    intl,
  } = props;

  const cellRef = useRef();
  const [isFocusTrapEnabled, setFocusTrapEnabled] = useState(false);
  const [isInteractable, setInteractable] = useState(false);
  const theme = useContext(ThemeContext);
  const columnContext = useContext(ColumnContext);

  /**
   * Determine if cell has focusable elements
   */
  const hasFocusableElements = () => {
    const focusableElementSelector = "a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), "
    + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
    + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

    const focusableElements = [...cellRef.current.querySelectorAll(`${focusableElementSelector}`)].filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

    return focusableElements.length > 0;
  };

  useEffect(() => {
    setInteractable(hasFocusableElements());
  }, []);

  /**
   * Handles the onDeactivate callback for FocusTrap component
   */
  const deactiveFocusTrap = () => {
    setFocusTrapEnabled(false);
    columnContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.dataGrid.resume-navigation' }));
  };

  /**
   * Handles mouse down event for cell
   */
  const onMouseDown = ((event) => {
    if (!isFocusTrapEnabled) {
      onCellSelect({
        rowId, columnId, rowIndex, columnIndex, isShiftPressed: event.shiftKey, isCellSelectable: (!isMasked && isSelectable),
      });
    }
  });

  /**
   * Keyboard event handler
   */
  const handleKeyDown = (event) => {
    const key = event.keyCode;

    if (isFocusTrapEnabled) {
      switch (key) {
        case KeyCode.KEY_ESCAPE:
          deactiveFocusTrap();
          break;
        default:
      }

      event.stopPropagation();
    } else {
      switch (key) {
        case KeyCode.KEY_RETURN:
          // Lock focus into component
          if (hasFocusableElements()) {
            setFocusTrapEnabled(true);
            columnContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.dataGrid.cell-focus-trapped' }));
            event.stopPropagation();
            event.preventDefault();
          }
          break;
        case KeyCode.KEY_SPACE:
          if (onCellSelect) {
            onCellSelect({
              rowId, columnId, rowIndex, columnIndex, isShiftPressed: event.shiftKey, isCellSelectable: (!isMasked && isSelectable),
            });
          }
          event.preventDefault(); // prevent the default scrolling
          break;
        default:
      }
    }
  };

  // Create cell content for masked and blank cells
  let cellContent;
  if (isMasked) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.dataGrid.maskedCell' })}
      </span>
    );
  } else if (!children) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.dataGrid.blank' })}
      </span>
    );
  } else {
    cellContent = children;
  }

  const className = cx('cell', {
    masked: isMasked,
    pinned: columnIndex < columnContext.pinnedColumnOffsets.length,
    selectable: isSelectable && !isMasked,
    selected: isSelected && !isMasked,
    highlighted: isHighlighted,
    blank: !children,
  }, theme.className);

  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;

  const CellTag = isRowHeader ? 'th' : 'td';
  return (
    <CellTag
      ref={cellRef}
      aria-selected={isSelected}
      aria-label={ariaLabel}
      tabIndex={-1}
      className={className}
      {...(isRowHeader && { scope: 'row', role: 'rowheader' })}
      onMouseDown={onCellSelect ? onMouseDown : undefined}
      onKeyDown={handleKeyDown}
      style={{ left: cellLeftEdge }} // eslint-disable-line react/forbid-component-props
    >
      {/* Wrap cell content with focus trap */}
      <FocusTrap
        active={isFocusTrapEnabled}
        focusTrapOptions={{
          returnFocusOnDeactivate: true, clickOutsideDeactivates: true, escapeDeactivates: false, onDeactivate: deactiveFocusTrap,
        }}
      >
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div className={cx('cell-content', theme.className)} style={{ height }}>{cellContent}</div>
      </FocusTrap>
      {isInteractable && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.dataGrid.cell-interactable' })} />}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(injectIntl(Cell));
