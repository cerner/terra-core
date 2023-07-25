import React, {
  useCallback, useLayoutEffect, useRef, useState
} from 'react';
import {
  KEY_LEFT,
  KEY_RIGHT,
} from 'keycode-js';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import styles from './TagList.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The content to be shown in the tags container.
   */
  children: PropTypes.node,
};

const TagList = (props) => {
  const {
    children,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const [containerTabindex, setContainerTabindex] = useState('-1');
  const [updatedCount, setUpdatedCount] = useState(React.Children.count(children));
  const currentTag = useRef(); // ID of the tag that will receive focus
  const filterTagsRef = useRef();
  const focusNode = useRef(0);

  // Modifies the tabindex of the tag
  const setTabIndex = (val) => {
    const currentNode = currentTag.current ? filterTagsRef.current.querySelector(`#${currentTag.current}`) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  // Sets focus to the current tag with tabindex 0
  const focusCurrentNode = () => {
    const currentNode = currentTag.current ? filterTagsRef.current.querySelector(`#${currentTag.current}`) : null;
    if (currentNode) {
      currentNode.focus();
    }
  };

  /**
 * Takes 'tag' element and tabindex 'val' as inputs and sets the tag elements tabindex.
 */
  const setTagsTabIndex = (tags, val) => {
    for (let i = 0; i < tags.length; i += 1) {
      tags[i].setAttribute('tabindex', val);
    }
  };

  // resets all tag nodes tabindex to -1, except for the one tag that receives focus.
  const resetTabIndex = useCallback(() => {
    const tags = [...filterTagsRef.current.querySelectorAll('[data-terra-tag]')];

    if (tags.length > 0 && focusNode.current < tags.length) {
      setTagsTabIndex(tags, '-1');
      currentTag.current = tags[focusNode.current].id;
      setTabIndex('0');
    }
  }, []);

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    setUpdatedCount(React.Children.count(children));

    resetTabIndex();
  }, [children, resetTabIndex]);

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

  const focusNextNode = (tags) => {
    if (focusNode.current + 1 <= tags.length) {
      setTabIndex('-1');
      if (focusNode.current + 1 < tags.length) { // focus the next available tag
        focusNode.current += 1;
        currentTag.current = children[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  const focusPreviousNode = () => {
    if (focusNode.current >= 1) {
      setTabIndex('-1');
      focusNode.current -= 1;
      currentTag.current = children[focusNode.current].props.id;
      setTabIndex('0');
      focusCurrentNode();
    }
  };
  
  const handleTagListKeyDown = (event) => {
    const tags = [...filterTagsRef.current.querySelectorAll('button, a')];

    switch (event.keyCode) {
      case KEY_RIGHT:
        event.preventDefault();
        focusNextNode(tags);
        break;
      case KEY_LEFT:
        event.preventDefault();
        focusPreviousNode(tags);
        break;
      default:
        break;
    }
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

  const renderChildren = (items) => {
    const tags = React.Children.map(items, (tag) => {
      if (React.isValidElement(tag)) {
        return React.cloneElement(tag);
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
      className={tagListClassNames}
      ref={filterTagsRef}
      role="list"
      tabIndex={containerTabindex}
    >
      {children ? renderChildren(children) : []}
    </div>
  );
};

TagList.propTypes = propTypes;

export default injectIntl(TagList);