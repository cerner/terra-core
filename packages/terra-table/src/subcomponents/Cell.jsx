import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import styles from './Cell.module.scss';
import ColumnContext from '../utils/ColumnContext';
import GridContext, { GridConstants } from '../utils/GridContext';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,

  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The cell's row position in the table. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the table. This is zero based.
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
};

const defaultProps = {
  isRowHeader: false,
  isSelected: false,
  isSelectable: false,
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
  const theme = useContext(ThemeContext);
  const gridContext = useContext(GridContext);
  const columnContext = useContext(ColumnContext);

  const [isInteractable, setIsInteractable] = useState(false);
  const [isFocusTrapEnabled, setIsFocusTrapEnabled] = useState(false);

  const isGridContext = gridContext.role === GridConstants.GRID;

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
    setIsInteractable(hasFocusableElements());
  }, []);

  /**
   * Handles the onDeactivate callback for FocusTrap component
   */
  const deactivateFocusTrap = () => {
    setIsFocusTrapEnabled(false);
    columnContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.resume-navigation' }));
  };

  const onMouseDown = ((event) => {
    if (!isFocusTrapEnabled) {
      onCellSelect({
        rowId, columnId, rowIndex, columnIndex, isShiftPressed: event.shiftKey, isCellSelectable: (!isMasked && isSelectable),
      });
    }
  });

  const handleKeyDown = (event) => {
    const key = event.keyCode;

    if (isFocusTrapEnabled) {
      switch (key) {
        case KeyCode.KEY_ESCAPE:
          deactivateFocusTrap();
          break;
        default:
      }
      event.stopPropagation();
    } else {
      switch (key) {
        case KeyCode.KEY_RETURN:
          // Lock focus into component
          if (hasFocusableElements()) {
            setIsFocusTrapEnabled(true);
            columnContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.cell-focus-trapped' }));
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
        {intl.formatMessage({ id: 'Terra.table.maskedCell' })}
      </span>
    );
  } else if (!children) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.table.blank' })}
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
      aria-selected={isGridContext ? isSelected : undefined}
      aria-label={ariaLabel}
      tabIndex={isGridContext ? -1 : undefined}
      className={className}
      {...(isRowHeader && { scope: 'row', role: 'rowheader' })}
      onMouseDown={isGridContext && onCellSelect ? onMouseDown : undefined}
      onKeyDown={isGridContext ? handleKeyDown : undefined}
      // eslint-disable-next-line react/forbid-component-props
      style={{ left: cellLeftEdge }}
    >
      <FocusTrap
        active={isFocusTrapEnabled}
        focusTrapOptions={{
          returnFocusOnDeactivate: true, clickOutsideDeactivates: true, escapeDeactivates: false, onDeactivate: deactivateFocusTrap,
        }}
      >
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div className={cx('cell-content', theme.className)} style={{ height }}>{cellContent}</div>
      </FocusTrap>
      {isInteractable && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.table.cell-interactable' })} />}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(injectIntl(Cell));
