import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SectionHeader from './ListSectionHeader';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the section can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Replace value `1` of `level` prop with other level values. Do Not use level as 1 as there should be only one H1 in a page.
   * Heading value `1` will be converted as heading level `2` until it is removed in the next MVB release.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the section header.
   */
  title: PropTypes.string.isRequired,
  /**
   * Whether or not the list item is draggable. List Item is draggable only when it is selectable.
   */
  isDraggable: PropTypes.bool,
  /**
   * Function callback when the Item is Lifted.
   */
  onDragStart: PropTypes.func,
  /**
   * Function callback when the Item is dragged from one position to another.
   */
  onDragUpdate: PropTypes.func,
  /**
   * Function callback when the Item is dropped.
   */
  onDragEnd: PropTypes.func,
};

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
};

const ListSection = ({
  children,
  isCollapsed,
  isCollapsible,
  isDraggable,
  onDragStart,
  onDragUpdate,
  onDragEnd,
  ...customProps
}) => {
  let sectionItems = [];
  let checkSelectableItem = false;

  if (!isCollapsible || !isCollapsed) {
    if (!(Array.isArray(children))) {
      sectionItems = (children) ? [children] : [];
    } else {
      sectionItems = children;
    }
    sectionItems.forEach((item) => {
      if (item?.type?.name === 'ListItem') {
        checkSelectableItem = item?.props?.isSelectable;
      }
    });
  }
  const theme = React.useContext(ThemeContext);
  const listClassNames = classNames(
    cx('list', 'list-fill', theme.className),
  );

  const reorderListItems = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorderListItems(
      sectionItems,
      result.source.index,
      result.destination.index,
    );
    sectionItems = items;
    if (onDragEnd) {
      onDragEnd(result);
    }
  };

  const handleDragStart = (start, provided) => {
    provided.announce(`You have lifted an item in position ${start.source.index}`);
    if (onDragStart) {
      onDragStart(start);
    }
  };

  const handleDragUpdate = (update, provided) => {
    provided.announce(`You have moved the item from position ${update.source.index} to position ${update.destination.index}`);
    if (onDragUpdate) {
      onDragUpdate(update);
    }
  };

  const cloneListItem = (ListItem, provider) => React.cloneElement(ListItem, {
    ...provider.draggableProps,
    ...provider.dragHandleProps,
    refCallback: provider.innerRef,
  });

  const renderSectionListItemsDom = () => (
    <>
      <SectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
      {sectionItems && (
        <li className={cx('list-item')}>
          <ul className={listClassNames}>
            {sectionItems}
          </ul>
        </li>
      )}
    </>
  );

  const renderDraggableListDom = () => (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
      <Droppable droppableId="listSection">
        {(provided) => (
          <div ref={provided.innerRef}>
            <SectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
            <li className={cx('list-item')}>
              <ul className={listClassNames}>
                {sectionItems.map((item, index) => (
                  <Draggable isDragDisabled={!(item?.props?.isSelectable)} key={item.key} draggableId={item.key} index={index}>
                    {(provider) => (
                      cloneListItem(item, provider)
                    )}
                  </Draggable>
                ))}
              </ul>
            </li>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );

  return (
    (isDraggable && checkSelectableItem) ? renderDraggableListDom() : renderSectionListItemsDom()
  );
};

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

export default ListSection;
