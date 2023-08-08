import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SubsectionHeader from './ListSubsectionHeader';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the subsection is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the subsection can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the subsection header.
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

const ListSubsection = ({
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

  const handleDragStart = (start) => {
    if (onDragStart) {
      onDragStart(start);
    }
  };

  const handleDragUpdate = (update) => {
    if (onDragUpdate) {
      onDragUpdate(update);
    }
  };

  const cloneListItem = (ListItem, provider) => React.cloneElement(ListItem, {
    ...provider.draggableProps,
    ...provider.dragHandleProps,
    refCallback: provider.innerRef,
  });

  const renderSubSectionListItemsDom = () => (
    <>
      <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
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
      <Droppable droppableId="listSubSection">
        {(provided) => (
          <div ref={provided.innerRef}>
            <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
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
    (isDraggable && checkSelectableItem) ? renderDraggableListDom() : renderSubSectionListItemsDom()
  );
};

ListSubsection.propTypes = propTypes;
ListSubsection.defaultProps = defaultProps;

export default ListSubsection;
