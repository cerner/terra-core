import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The header passed to the table
   */
  headerCells: PropTypes.arrayOf(PropTypes.element),
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the table.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the table should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  headerCells: [],
  paddingStyle: 'none',
  fill: false,
};

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);
    this.initializeResize = this.initializeResize.bind(this);
    this.removeResize = this.removeResize.bind(this);
    this.bodyRef = React.createRef();
    this.headerRef = React.createRef();
    this.animationFrameID = null;
    this.offset = 0;
  }

  componentDidMount() {
    if (this.props.fill && this.bodyRef.current) {
      this.initializeResize();
    }
  }

  componentDidUpdate() {
    if (this.props.fill && this.bodyRef.current) {
      this.initializeResize();
    } else {
      this.removeResize();
    }
  }

  componentWillUnmount() {
    if (this.props.fill && this.bodyRef.current) {
      this.removeResize();
    }
  }

  initializeResize() {
    if (!this.resizeListenerAdded) {
      this.resizeObserver = new ResizeObserver(() => {
        const offset = this.bodyRef.current.offsetWidth - this.bodyRef.current.clientWidth;
        if (this.offset !== offset) {
          this.offset = offset;
          this.animationFrameID = window.requestAnimationFrame(() => {
            this.animationFrameID = null;
            this.updateSize(this.offset);
          });
        }
      });
      this.resizeObserver.observe(this.bodyRef.current);
      this.resizeListenerAdded = true;
    }
  }

  removeResize() {
    if (this.resizeListenerAdded) {
      window.cancelAnimationFrame(this.animationFrameID);
      this.resizeObserver.disconnect(this.bodyRef.current);
      this.resizeListenerAdded = false;
    }
  }

  updateSize(width) {
    if (this.headerRef.current) {
      this.headerRef.current.style.paddingRight = `${width}px`;
    }
  }

  render() {
    const {
      children,
      fill,
      headerCells,
      paddingStyle,
      refCallback,
      ...customProps
    } = this.props;
    const attrSpread = {};
    if (paddingStyle !== 'none') {
      attrSpread['data-table-padding'] = paddingStyle;
    }

    let header;
    let makeInline = false;
    if (headerCells.length) {
      makeInline = headerCells.every(cell => (cell.props.width && cell.props.width.static));
      header = (
        <div className={cx(['header'])} role="rowgroup" ref={this.headerRef}>
          <div className={cx(['header-content'])} role="row">
            {headerCells}
          </div>
        </div>
      );
    }

    const tableClassNames = cx([
      'table',
      { fill },
      { 'is-inline': makeInline },
      customProps.className,
    ]);

    return (
      <div {...customProps} {...attrSpread} className={tableClassNames} ref={refCallback} role="grid">
        {header}
        <div className={cx(['body'])} role="rowgroup" ref={this.bodyRef}>
          {children}
        </div>
      </div>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
