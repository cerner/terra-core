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

    const commentIcon = <svg className="terra-Icon terra-CompactTile-comment--icon is-bidi" aria-hidden="true" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="1em" height="1em"><path d="M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z" /></svg>;

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
