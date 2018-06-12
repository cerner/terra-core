import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import styles from './List.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  content: PropTypes.element,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: PropTypes.bool,
  /**
   * Function callback for the ref of the li.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: undefined,
  hasChevron: undefined,
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.refHandler = this.refHandler.bind(this);
    this.adjustWidths = this.adjustWidths.bind(this);

    this.state = { contentMaxWidth: '100%' };
  }

  componentDidMount() {
    if (this.innerNode && this.chevron) {
      this.adjustWidths();
    }
  }

  adjustWidths() {
    const maxWidth = this.innerNode.offsetWidth - this.chevron.offsetWidth;
    this.setState({ contentMaxWidth: maxWidth });
  }

  refHandler(element) {
    this.innerNode = element;

    if (this.props.refCallback) {
      this.props.refCallback(element);
    }
  }

  render() {
    const {
      content,
      isSelected,
      isSelectable,
      hasChevron,
      refCallback,
      ...customProps
    } = this.props;

    const listItemClassNames = cx([
      'list-item',
      { selected: isSelected },
      { 'is-selectable': isSelectable },
      customProps.className,
    ]);

    if (hasChevron) {
      const chevron = (
        <span ref={(element) => { this.chevron = element; }} className={cx('chevron')}>
          <ChevronRight height="0.8em" width="0.8em" />
        </span>
      );

      return (
        <li {...customProps} role="option" aria-selected={isSelected} className={listItemClassNames} ref={this.refHandler}>
          <div className={cx('chevron-parent')}>
            {chevron}
            <div style={{ maxWidth: this.state.contentMaxWidth }}>
              {content}
            </div>
          </div>
        </li>
      );
    }

    return (
      <li {...customProps} className={listItemClassNames} ref={refCallback}>
        {content}
      </li>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
