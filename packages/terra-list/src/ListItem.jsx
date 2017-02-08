import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list-item.scss';

const propTypes = {
  content: PropTypes.element,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  hasChevron: PropTypes.bool,
};

const defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: false,
  hasChevron: false,
};

class ListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleOnClick = this.handleOnClick.bind(this);
  // }

  static classesForListItemFromProps(isSelected, isSelectable, hasChevron) {
    return classNames(['terra-ListItem',
      { 'terra-ListItem--selected': isSelected },
      { 'terra-ListItem-selectable': isSelectable },
      { 'terra-ListItem-chevron': hasChevron },
    ]);
  }

  render() {
    const { content, isSelected, isSelectable, ...customProps } = this.props;
    const listItemClasses = ListItem.classesForListItemFromProps(isSelected, isSelectable, hasChevron);
    const listItemClassNames = classNames([
      listItemClasses,
      customProps.className,
    ]);

    return (
      <div {...customProps} className={listItemClassNames}>
        {content}
      </div>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
