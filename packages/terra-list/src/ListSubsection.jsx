import React, {
  useRef, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
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
   * Function callback when the Item is dropped. Callback contains the DropResult of result object and provided object, e.g. onDragEnd(result, provided).
   */
  onDragEnd: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
  /**
   * z-index value for the list item (li element). Defaults to 6001 which is greater value than terra-modal-manager z-index value.
   */
  zIndex: PropTypes.number,
};

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
  zIndex: 6001,
};

const ListSubsection = ({
  children,
  isCollapsed,
  isCollapsible,
  isDraggable,
  onDragEnd,
  intl,
  zIndex,
  ...customProps
}) => {
  const [listItemNodes, setlistItemNodes] = useState(children);
  let listSubSectionItemNode = useRef();
  const isListItemDropped = useRef();
  const draggedItemindex = useRef();

  /* eslint-disable-next-line no-param-reassign */
  delete customProps?.isTabFocusDisabled;

  useEffect(() => {
    if (!isCollapsible || !isCollapsed) {
      if (Array.isArray(children)) {
        setlistItemNodes(children);
      } else if (children) {
        setlistItemNodes([children]);
      }
    } else {
      setlistItemNodes([]);
    }
  }, [children, isCollapsible, isCollapsed]);

  useEffect(() => {
    if (isListItemDropped.current) {
      const listItems = listSubSectionItemNode && listSubSectionItemNode.querySelectorAll('[data-item-show-focus]');
      if (listItems[draggedItemindex.current]) {
        listItems[draggedItemindex.current].focus();
      }
      isListItemDropped.current = false;
    }
  }, [listItemNodes]);

  const theme = useContext(ThemeContext);
  const listClassNames = classNames(
    cx('list', 'list-fill', theme.className),
  );

  const handleListItemsRef = (nodes) => {
    listSubSectionItemNode = nodes;
  };

  const handleKeyDown = event => {
    const listItems = listSubSectionItemNode.querySelectorAll('[data-item-show-focus]');
    const currentIndex = Array.from(listItems).indexOf(event.target);
    const lastIndex = listItems.length - 1;

    switch (event.nativeEvent.keyCode) {
      case KeyCode.KEY_END:
        event.preventDefault();
        listItems[listItems.length - 1].focus();
        break;
      case KeyCode.KEY_HOME:
        event.preventDefault();
        listItems[0].focus();
        break;
      case KeyCode.KEY_UP: {
        event.preventDefault();
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
        listItems[previousIndex].focus();
        break;
      }
      case KeyCode.KEY_DOWN: {
        event.preventDefault();
        const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
        listItems[nextIndex].focus();
        break;
      }
      default:
        break;
    }
    event.stopPropagation();
  };

  const reorderListItems = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result, provided) => {
    // dropped outside the list
    if (!result.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.list.cancelDrag' }, { startPosition: (result.source.index + 1) }));
      return;
    }
    const items = reorderListItems(
      listItemNodes,
      result.source.index,
      result.destination.index,
    );
    setlistItemNodes(items);
    draggedItemindex.current = result.destination.index;
    provided.announce(intl.formatMessage({ id: 'Terra.list.drop' }, { startPosition: (result.source.index + 1), endPosition: (result.destination.index + 1) }));
    if (onDragEnd) {
      onDragEnd(result, provided);
    }
  };

  const handleDragStart = (start, provided) => {
    isListItemDropped.current = true;
    provided.announce(intl.formatMessage({ id: 'Terra.list.lift' }, { startPosition: (start.source.index + 1) }));
  };

  const handleDragUpdate = (update, provided) => {
    if (update.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.list.drag' }, { startPosition: (update.source.index + 1), endPosition: (update.destination.index + 1) }));
    }
  };

  const getStyleforDrag = (ListItem, snapshot, provider) => {
    const styleProperties = provider.draggableProps.style;
    if (styleProperties && snapshot && snapshot.isDragging) {
      styleProperties.zIndex = zIndex;
    }
    return styleProperties;
  };

  const cloneListItem = (ListItem, provider, snapshot) => React.cloneElement(ListItem, {
    isDraggable: ListItem?.props?.isSelectable,
    refCallback: (refobj) => {
      provider.innerRef(refobj);
    },
    ...provider.draggableProps,
    ...provider.dragHandleProps,
    style: getStyleforDrag(ListItem, snapshot, provider),
  });

  const renderSubSectionListItemsDom = () => (
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    <>
      <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
      {listItemNodes && (
      <li className={cx('list-item')}>
        <ul className={listClassNames} ref={(refobj) => handleListItemsRef(refobj)} onKeyDown={handleKeyDown}>
          {listItemNodes}
        </ul>
      </li>
      )}
    </>
  );

  window['__react-beautiful-dnd-disable-dev-warnings'] = true;

  const renderDraggableListDom = () => (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
      <Droppable
        droppableId="listSubSection"
        renderClone={(provided, snapshot, rubric) => (
          cloneListItem(listItemNodes[rubric.source.index], provided, snapshot)
        )}
      >
        {(provided) => (
          /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
          <div ref={provided.innerRef}>
            <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
            <li className={cx('list-item')}>
              <ul
                className={listClassNames}
                onKeyDown={handleKeyDown}
                ref={(refobj) => handleListItemsRef(refobj)}
              >
                {listItemNodes.map((item, index) => (
                  <Draggable isDragDisabled={!(item?.props?.isSelectable)} key={item.key} draggableId={item.key} index={index}>
                    {(provider, snapshot) => (
                      cloneListItem(item, provider, snapshot)
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
    (isDraggable) ? renderDraggableListDom() : renderSubSectionListItemsDom()
  );
};

ListSubsection.propTypes = propTypes;
ListSubsection.defaultProps = defaultProps;

export default injectIntl(ListSubsection);
