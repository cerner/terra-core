import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * References a visible or visually hidden text element
   * on the page that conveys information about the list
   * and how to interact with it. Maps to [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).
   * Because `aria-describedby` has the most comprehensive
   * screen reader support of `aria-describedby`, `aria-description`, and
   * `aria-details`, it should be the first choice for conveying
   * List instructions to screen readers. (Note: In some screen readers,
   * including JAWS, `aria-describedby` is not supported for non-interactable
   * elements. In these cases, use `aria-details`.)
   */
  ariaDescribedBy: PropTypes.string,
  /**
    * String that provides information about the list and how to interact
    * with it. Maps to [aria-description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description).
    * When used with the `ariaDescribedBy` prop, `ariaDescribedBy`
    * takes precedence in defining the accessible description property.
    * Because `aria-description` still has limited screen reader support
    * compared to `aria-describedby`, this prop should only be used in cases where
    * `aria-describedby` is not sufficient.
    */
  ariaDescription: PropTypes.string,
  /**
   * References a visible or visually hidden text element
   * on the page that conveys information about the list
   * and how to interact with it. Maps to
   * [aria-details](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details).
   * Can be used alongside `ariaDescribedBy` or `ariaDescription`.
   * `aria-details` is not supported in all screen reader/browser
   * combinations. Consumers should test for different screen
   * reader/browser combinations to ensure that instructions
   * are consistently read.
   */
  ariaDetails: PropTypes.string,
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
  /**
   * Whether or not the list's child items should have a border color applied.
   * One of `'none'`, `'standard'`, `'bottom-only'`.
   */
  dividerStyle: PropTypes.oneOf(['none', 'standard', 'bottom-only']),
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the ul.
   */
  refCallback: PropTypes.func,
  /**
   * Accessibility role of the list, defaults to 'none'.
   */
  role: PropTypes.string,
  /**
   * Sets the role to `'listbox'` and provides an aria-description of whether its a single or multi-select list.
   * For multi-select lists, it sets aria-multiselectable to true.
   * One of `'none'`, `'single-select'`, `'multi-select'`.
   */
  ariaSelectionStyle: PropTypes.oneOf(['none', 'single-select', 'multi-select']),
  /**
   * Whether or not the list item is draggable. List Item is draggable only when it is selectable.
   */
  isDraggable: PropTypes.bool,
  /**
   * Function callback when the Item is dropped. Callback contains the DropResult of result object and provided object, e.g. onDragEnd(result, provided).
   */
  onDragEnd: PropTypes.func,
};

const defaultProps = {
  children: [],
  dividerStyle: 'none',
  paddingStyle: 'none',
  role: 'none',
  ariaSelectionStyle: 'none',
};

const List = ({
  ariaDescribedBy,
  ariaDescription,
  ariaDetails,
  children,
  intl,
  dividerStyle,
  paddingStyle,
  refCallback,
  role,
  ariaSelectionStyle,
  isDraggable,
  onDragEnd,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const [listItem, setlistItem] = React.useState([]);

  React.useEffect(() => {
    if (!(Array.isArray(children))) {
      if (children) setlistItem([children]);
    } else {
      setlistItem(children);
    }
  }, [children]);

  const listClassNames = classNames(
    cx(
      'list',
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      { 'divider-standard': dividerStyle === 'standard' },
      { 'divider-bottom-only': dividerStyle === 'bottom-only' },
      theme.className,
    ),
    customProps.className,
  );
  let listNode = useRef();

  const handleListRef = (node) => {
    if (refCallback) {
      refCallback(node);
    }
    listNode = node;
  };
  const handleKeyDown = event => {
    const listItems = listNode.querySelectorAll('[data-item-show-focus]');
    if (event.nativeEvent.keyCode === KeyCode.KEY_END) {
      event.preventDefault();
      listItems[listItems.length - 1].focus();
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_HOME) {
      event.preventDefault();
      listItems[0].focus();
    }
  };

  const attrSpread = {};
  attrSpread.role = 'list'; // Explicitly set role='list' as it's missing in Safari
  if (role && role.length > 0 && role !== 'none') {
    attrSpread.role = role;
  }

  if (ariaSelectionStyle === 'single-select') {
    attrSpread.role = 'listbox';
    attrSpread['aria-label'] = intl.formatMessage({ id: 'Terra.list.singleSelect' });
  }

  if (ariaSelectionStyle === 'multi-select') {
    attrSpread.role = 'listbox';
    attrSpread['aria-multiselectable'] = true;
    attrSpread['aria-label'] = intl.formatMessage({ id: 'Terra.list.multiSelect' });
  }

  const reorderListItems = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result, provided) => {
    // dropped outside the list
    if (!result.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.list.cancelDrag' }, { startPosition: result.source.index }));
      return;
    }
    const items = reorderListItems(
      listItem,
      result.source.index,
      result.destination.index,
    );
    setlistItem(items);
    provided.announce(intl.formatMessage({ id: 'Terra.list.drop' }, { startPosition: result.source.index, endPosition: result.destination.index }));
    if (onDragEnd) {
      onDragEnd(result, provided);
    }
  };

  const handleDragStart = (start, provided) => {
    provided.announce(intl.formatMessage({ id: 'Terra.list.lift' }, { startPosition: start.source.index }));
  };

  const handleDragUpdate = (update, provided) => {
    if (update.destination) {
      provided.announce(intl.formatMessage({ id: 'Terra.list.drag' }, { startPosition: update.source.index, endPosition: update.destination.index }));
    }
  };

  const cloneListItem = (ListItem, provider) => React.cloneElement(ListItem, {
    isDraggable: ListItem?.props?.isSelectable,
    refCallback: provider.innerRef,
    ...provider.draggableProps,
    ...provider.dragHandleProps,
  });

  const renderListDom = () => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props
    <ul
      {...customProps}
      {...attrSpread}
      aria-describedby={ariaDescribedBy}
      aria-description={ariaDescription} // eslint-disable-line jsx-a11y/aria-props
      aria-details={ariaDetails}
      className={listClassNames}
      ref={handleListRef}
      onKeyDown={handleKeyDown}
    >
      {children}
    </ul>
  );

  const renderDraggableListDom = () => (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
      <Droppable droppableId="ListItem">
        {(provided) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props
          <ul
            {...provided.droppableProps}
            {...customProps}
            {...attrSpread}
            aria-describedby={ariaDescribedBy}
            aria-description={ariaDescription} // eslint-disable-line jsx-a11y/aria-props
            aria-details={ariaDetails}
            className={listClassNames}
            ref={(refobj) => {
              provided.innerRef(refobj);
              handleListRef(refobj);
            }}
            onKeyDown={handleKeyDown}
          >
            {listItem.map((item, index) => (
              <Draggable isDragDisabled={!(item?.props?.isSelectable)} key={item.key} draggableId={item.key} index={index}>
                {(provider) => (
                  cloneListItem(item, provider)
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );

  return (
    (isDraggable) ? renderDraggableListDom() : renderListDom()
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default injectIntl(List);
