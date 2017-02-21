import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CommentIndicator from 'terra-icon/lib/icon/themeable/comment.svg';
import Display from './Display';

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isTruncated: PropTypes.bool,
};

const defaultProps = {
  className: '',
  text: '',
  isTruncated: false,
};

const Comment = ({
    className,
    text,
    isTruncated,
    ...customProps
  }) => {
  const commentClassNames = classNames([
    'terra-CompactTile-comment',
    className,
  ]);

  const commentIcon = <CommentIndicator />;

  return (
    <Display
      text={text}
      isTruncated={isTruncated}
      icon={commentIcon}
      className={commentClassNames}
      {...customProps}
    />
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
