import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './PopupFrame.scss';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

class PopupFrame extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  }

  render() {
    const { children, onClickOutside, enableOnClickOutside, disableOnClickOutside, ...customProps } = this.props;
    const frameClassNames = classNames([
      'terra-PopupFrame',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={frameClassNames}>
        {children}
      </div>
    );
  }
}

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

export default PopupFrame;
