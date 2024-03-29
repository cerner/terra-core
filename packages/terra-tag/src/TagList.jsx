/* eslint-disable object-curly-newline */
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { KEY_LEFT, KEY_RIGHT, KEY_HOME, KEY_END } from 'keycode-js';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { v4 as uuidv4 } from 'uuid';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ThemeContext from 'terra-theme-context';
import TagsUtils from './_TagsUtils';
import RollUpTag from './_RollupTag';
import styles from './Tag.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The string that labels the collection of tags, used in cases where the text label is not visible on
   * the screen and required for minimum accessibility standards. Providing this prop adds the `aria-label`
   * attribute to the Tag List container element. (Required)
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * If a visible text label is used with the collection of tags, provide a string of the ID for the html
   * element containing the visible text label. Supplying the 'ariaLabelledBy' prop will override the 'ariaLabel'
   * prop and adds the `aria-labelledby` attribute instead to the Tag List container element.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) For best practices, ensure the visible text
   * in the html element `id` provided to the Tag List `ariaLabelledby` prop matches the text provided to the
   * `ariaLabel` prop, for consistency in the case of fallback or errors.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * If additional visible information text is used, provide a string containing the IDs for html elements that
   * help describe the intent of the group of tags.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The content to be shown in the tags container.
   */
  children: PropTypes.node,
  /**
   * Indicates if the Tags container is rolled up or not.
   */
  isCollapsible: PropTypes.bool,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isCollapsible: false,
};

const TagList = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    intl,
    isCollapsible,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const [updatedCount, setUpdatedCount] = useState(React.Children.count(children));
  const [rollUpCount, setRollUpCount] = useState(React.Children.count(children));
  const [isCollapsed, setIsCollapsed] = useState(isCollapsible);
  const currentTag = useRef(); // ID of the tag that will receive focus
  const filterTagsRef = useRef();
  const focusNode = useRef(0);
  const isRollUpRemoved = useRef(false);
  const containerHint = useRef(ariaLabel);

  // Identifies the number of tags that needs to be hidden/rolled up
  const generateRollUp = useCallback(() => {
    const startIndex = TagsUtils.getRollUpIndex(filterTagsRef);
    if (isCollapsed) {
      setUpdatedCount(startIndex);
      setRollUpCount(React.Children.count(children) - startIndex);
    } else if (startIndex === React.Children.count(children)) {
      setRollUpCount(0);
    }
  }, [children, isCollapsed]);

  // Modifies the tabindex of the tag
  const setTabIndex = (val) => {
    if (currentTag.current) {
      currentTag.current.setAttribute('tabIndex', val);
    }
  };

  // Sets focus to the current tag with tabindex 0
  const focusCurrentNode = () => {
    if (currentTag.current) {
      currentTag.current.focus();
    }
  };

  // resets all tag nodes tabindex to -1, except for the one tag that receives focus.
  const resetTabIndex = useCallback(() => {
    const tags = [...filterTagsRef.current.querySelectorAll('[data-terra-tag]')];
    const rollUpTag = filterTagsRef.current.querySelector('[data-terra-rollup-tag]');

    // if there is a roll Up tag, set tabindex to -1
    if (rollUpTag) {
      TagsUtils.setRollUpTagTabIndex(rollUpTag, '-1');
    }

    if (tags.length > 0 && focusNode.current < tags.length) {
      TagsUtils.setTagsTabIndex(tags, '-1');
      currentTag.current = tags[focusNode.current];
      setTabIndex('0');
    } else if (isCollapsible && isCollapsed && rollUpTag) { // if the first tag is rollUp tag, set rollUp tag tabindex 0
      currentTag.current = rollUpTag;
      setTabIndex('0');
    }
  }, [isCollapsed, isCollapsible]);

  const handleFocusOnRollUpTrigger = useCallback(() => {
    const tags = [...filterTagsRef.current.querySelectorAll('[data-terra-tag]')];
    // To focus the immediate focusable tag after the rollUp tag is selected
    if (isCollapsible && !isCollapsed && tags.length > 0) {
      if (tags.length === React.Children.count(children)) {
        setTabIndex('-1');
        currentTag.current = tags[focusNode.current];
        setTabIndex('0');
        if (isRollUpRemoved.current) { // if the rollup tag was triggered with keyboard focus the node
          focusCurrentNode();
          isRollUpRemoved.current = false;
        }
      }
    }
  }, [children, isCollapsed, isCollapsible]);

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    setUpdatedCount(React.Children.count(children));
    setRollUpCount(React.Children.count(children));

    if (isCollapsible) {
      generateRollUp();
    }

    resetTabIndex();
    handleFocusOnRollUpTrigger();
  }, [children, isCollapsible, resetTabIndex, handleFocusOnRollUpTrigger, generateRollUp]);

  useLayoutEffect(() => {
    let observer = new ResizeObserver((entries) => {
      handleResize(entries);
    });
    observer.observe(filterTagsRef.current.parentNode);

    return () => {
      observer.disconnect();
      observer = null;
    };
  }, [children, handleResize]);

  const focusNextNode = (tags, rollUpTag) => {
    if (focusNode.current + 1 <= tags.length) {
      setTabIndex('-1');
      // if the next tag is roll up tag, focus the roll up tag
      if (rollUpTag && focusNode.current + 1 === tags.length) {
        currentTag.current = rollUpTag;
      } else if (focusNode.current + 1 < tags.length) { // focus the next available tag
        focusNode.current += 1;
        currentTag.current = tags[focusNode.current];
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = (tags, rollUpTag) => {
    if (currentTag.current === rollUpTag || focusNode.current >= 1) {
      setTabIndex('-1');
      if (rollUpTag && currentTag.current === rollUpTag) { // If rollup tag, then focus the roll up tag
        focusNode.current = tags.length - 1;
        currentTag.current = tags[focusNode.current];
      } else {
        focusNode.current -= 1;
        currentTag.current = tags[focusNode.current];
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const handleTagListKeyDown = (event) => {
    const tags = [...filterTagsRef.current.querySelectorAll('[data-terra-tag]')];
    const rollUpTag = filterTagsRef.current.querySelector('[data-terra-rollup-tag]');

    switch (event.keyCode) {
      case KEY_RIGHT:
        event.preventDefault();
        focusNextNode(tags, rollUpTag);
        break;
      case KEY_LEFT:
        event.preventDefault();
        focusPreviousNode(tags, rollUpTag);
        break;
      case KEY_HOME:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = 0;
        currentTag.current = tags[focusNode.current];
        setTabIndex('0');
        focusCurrentNode();
        break;
      case KEY_END:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = tags.length - 1;
        currentTag.current = tags[focusNode.current];
        setTabIndex('0');
        focusCurrentNode();
        break;
      default:
        break;
    }
  };

  // set the focus to current tag if the tag is clicked with mouse
  const handleOnTagSelect = (event) => {
    const tags = [...filterTagsRef.current.querySelectorAll('[data-terra-tag]')];
    setTabIndex('-1');
    focusNode.current = tags.findIndex((tag) => tag.id === event.currentTarget.id);
    currentTag.current = tags.find((tag) => tag.id === event.currentTarget.id);
    setTabIndex('0');
    focusCurrentNode();
  };

  const handleOnSelectRollUp = (event) => {
    const tags = [...filterTagsRef.current.querySelectorAll('[data-terra-tag]')];
    if (isCollapsible && isCollapsed) {
      if (event.type === 'keydown' || event.type === 'click') {
        isRollUpRemoved.current = true;
        focusNode.current = tags.length;
      } else {
        setTabIndex('-1');
        focusNode.current = tags.length;
      }
    }
    setIsCollapsed(!isCollapsed);
  };

  const handleTagListOnblur = () => setContainerTabindex('-1');

  const filterTagsProps = {};
  filterTagsProps.onKeyDown = handleTagListKeyDown;
  filterTagsProps.onBlur = handleTagListOnblur;

  const tagListClassNames = classNames(
    cx([
      'tags-group',
      theme.className,
    ]),
    customProps.className,
  );

  const tagGroupInteractionHintID = `terra-tags-group-interaction-hint-${uuidv4()}`;
  const tagGroupAriaDescribedBy = ariaDescribedBy ? `${ariaDescribedBy} ${tagGroupInteractionHintID}` : tagGroupInteractionHintID;
  let tagGroupInteractionHint = intl.formatMessage({ id: 'Terra.tags.hint.tagList' }, { numberOfTags: React.Children.count(children) });
  const navigationHint = intl.formatMessage({ id: 'Terra.tags.tagList.navigation.hint' });
  tagGroupInteractionHint = `${tagGroupInteractionHint} ${navigationHint}`;
  if (isCollapsible && (rollUpCount > 0) && isCollapsed) {
    tagGroupInteractionHint += `, ${intl.formatMessage({ id: 'Terra.tags.hint.rollupNotVisible' }, { tagsNotVisibleCount: rollUpCount })}`;
  }

  const renderChildren = (items) => {
    const tags = React.Children.map(items, (tag) => {
      if (React.isValidElement(tag)) {
        return React.cloneElement(tag, {
          onSelect: handleOnTagSelect,
        });
      }
      return undefined;
    });

    const reducedArray = tags.splice(0, updatedCount);
    return reducedArray;
  };

  return (
    <div
      {...customProps}
      {...filterTagsProps}
      aria-label={!ariaLabelledBy ? `${containerHint.current}` : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={tagGroupAriaDescribedBy}
      className={tagListClassNames}
      ref={filterTagsRef}
      role="group"
      tabIndex={containerTabindex}
    >
      <VisuallyHiddenText
        id={tagGroupInteractionHintID}
        text={tagGroupInteractionHint}
        aria-hidden="true"
      />
      {children ? renderChildren(children) : []}
      {(isCollapsible && rollUpCount > 0) && (
        <RollUpTag
          isCollapsed={isCollapsed}
          onSelectRollUp={handleOnSelectRollUp}
          rollupCount={rollUpCount}
        />
      )}
    </div>
  );
};

TagList.defaultProps = defaultProps;
TagList.propTypes = propTypes;

export default injectIntl(TagList);
