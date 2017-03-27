import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CommentIndicator from 'terra-icon/lib/icon/IconComment';
import Display from './Display';
import './Comment.scss';

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * Whether or not the text should be truncated in display.
   */
  isTruncated: PropTypes.bool,
};

const defaultProps = {
  className: '',
  text: '',
  isTruncated: false,
};

const Comment = ({
    text,
    isTruncated,
    ...customProps
  }) => {
  const commentClassNames = classNames([
    'terra-ClinicalItemView-comment',
    customProps.className,
  ]);

  const commentIcon = <CommentIndicator />;

  return (
    <Display
      text={text}
      isTruncated={isTruncated}
      icon={commentIcon}
      {...customProps}
      className={commentClassNames}
    />
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
