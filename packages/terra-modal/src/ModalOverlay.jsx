import React from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './ModalOverlay.scss';


class ModalOverlay extends React.Component {

  componentDidMount() {
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = null;
  }

  render() {
    const { ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);

    attributes.className = classNames([
      'terra-Modal-overlay',
      attributes.className,
    ]);

    return <div {...attributes} />;
  }
}

export default ModalOverlay;
