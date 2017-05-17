import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './TetherOverlay.scss';

const propTypes = {
  displayAboveModal: PropTypes.bool,
};

const defaultProps = {
  displayAboveModal: false,
};

class TetherOverlay extends React.Component {

  componentDidMount() {
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = null;
  }

  render() {
    const { displayAboveModal, ...customProps } = this.props;

    const overlayClassNames = classNames([
      'terra-TetherOverlay',
      { 'terra-TetherOverlay--modal': displayAboveModal },
    ]);

    return <div {...customProps} className={overlayClassNames}><div className="terra-TetherOverlay-inner" /></div>;
  }
}

export default TetherOverlay;
