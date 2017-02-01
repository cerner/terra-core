import React, { PropTypes } from 'react';
import classNames from 'classnames';
import path from 'path';

import Display from './Display';

class Comment extends React.Component {

  render() {
    if (!this.props || !this.props.text.length) {
      return null;
    }
    // TODO add a comment graphic
    // commentDisplay.icon = comment icon
    // const commentIcon = <TerraIcon icon_class='icon-comment'
    //                                size='text-body'
    //                                class='terra-CompactCard-comment--icon'>;

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
