import React, { PropTypes } from 'react';
import classNames from 'classnames';
import path from 'path';
import CommentIndicator from 'terra-icon/lib/icon/themeable/comment.svg';

import Display from './Display';

class Comment extends React.Component {

  render() {
    if (!this.props || !this.props.text.length) {
      return null;
    }
    const commentIcon = <CommentIndicator />;

    const commentAttributes = Object.assign({}, this.props.attributes);
    commentAttributes.className = classNames([
      'terra-CompactTile-comment',
      commentAttributes.className,
    ]);

    return (
      <Display
        text={this.props.text}
        isTruncated={this.props.isTruncated}
        attributes={commentAttributes}
        icon={commentIcon}
      />
    );
  }
}

Comment.propTypes = {
  text: PropTypes.string,
  isTruncated: PropTypes.bool,
  attributes: PropTypes.objectOf(PropTypes),
};

Comment.defaultProps = {
  isTruncated: false,
};

export const includePaths = path.join(__dirname, '../src/');

export default Comment;
