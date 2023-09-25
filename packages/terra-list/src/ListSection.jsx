import React, {
  useRef, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { injectIntl } from 'react-intl';
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
   * Function callback when the Item is dropped. Callback contains the DropResult of result object and provided object, e.g. onDragEnd(result, provided).
   */
  onDragEnd: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
  onDragEnd,
  intl,
  ...customProps
}) => {
  const [listItemNodes, setlistItemNodes] = useState(children);
  let listSectionItemNode = useRef();

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

  const theme = useContext(ThemeContext);
  const listClassNames = classNames(
    cx('list', 'list-fill', theme.className),
  );

  const handleListItemsRef = (nodes) => {
    listSectionItemNode = nodes;
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
    if (listSectionItemNode) {
      const listitems = listSectionItemNode.querySelectorAll('[data-item-show-focus]');
      if (listitems && listitems[result.source.index]) {
        listitems[result.source.index].focus();
      }
    }
    provided.announce(intl.formatMessage({ id: 'Terra.list.drop' }, { startPosition: (result.source.index + 1), endPosition: (result.destination.index + 1) }));
    if (onDragEnd) {
      onDragEnd(result, provided);
    }
  };

  const cloneListItem = (ListItem, provider) => React.cloneElement(ListItem, {
    isDraggable: ListItem?.props?.isSelectable,
    refCallback: (refobj) => {
      provider.innerRef(refobj);
    },
    ...provider.draggableProps,
    ...provider.dragHandleProps,
  });

  const renderSectionListItemsDom = () => (
    <>
      <SectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
      {listItemNodes && (
        <li className={cx('list-item')}>
          <ul className={listClassNames}>
            {listItemNodes}
          </ul>
        </li>
      )}
    </>
  );

  const handleDragStart = (start, provided) => {
    provided.announce(intl.formatMessage({ id: 'Terra.list.lift' }, { startPosition: (start.source.index + 1) }));
  };

  const handleDragUpdate = (update, provided) => {
    if (update.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.list.drag' }, { startPosition: (update.source.index + 1), endPosition: (update.destination.index + 1) }));
    }
  };

  const renderDraggableListDom = () => (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
      <Droppable
        droppableId="listSection"
        renderClone={(provided, snapshot, rubric) => (
          cloneListItem(listItemNodes[rubric.source.index], provided)
        )}
      >
        {(provided) => (
          <div ref={provided.innerRef}>
            <SectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
            <li className={cx('list-item')}>
              <ul
                ref={(refobj) => handleListItemsRef(refobj)}
                className={listClassNames}
              >
                {listItemNodes.map((item, index) => (
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
    (isDraggable) ? renderDraggableListDom() : renderSectionListItemsDom()
  );
};

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

export default injectIntl(ListSection);
