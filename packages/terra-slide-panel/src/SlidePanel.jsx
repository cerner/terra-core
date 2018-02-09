import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './SlidePanel.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The component to display in the main content area.
   */
  mainContent: PropTypes.node,

  /**
   * The component to display in the panel content area.
   */
  panelContent: PropTypes.node,

  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),

  /**
   * The position at which the panel will be displayed. This property honors the current direction setting. One of `start`, `end`.
   */
  panelPosition: PropTypes.oneOf(['start', 'end']),

  /**
   * The size at which the panel will be displayed. One of `small`, `large`.
   */
  panelSize: PropTypes.oneOf(['small', 'large']),

  /**
   * Whether or not, when open, the panel should be displayed with the full width of the SlidePanel.
   */
  isFullscreen: PropTypes.bool,

  /**
   * Whether or not the panel should be displayed.
   */
  isOpen: PropTypes.bool,

  /**
   * Whether or not the SlidePanel should be sized relative to its parent container.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  panelBehavior: 'overlay',
  panelPosition: 'end',
  panelSize: 'small',
};

class SlidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.setPanelNode = this.setPanelNode.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);

    this.isHidden = !props.isOpen;
  }

  componentDidMount() {
    if (this.panelNode) {
      this.panelNode.addEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen !== nextProps.isOpen && nextProps.isOpen === true) {
      this.panelNode.setAttribute('aria-hidden', 'false');
      this.isHidden = false;
    }
  }

  componentWillUnmount() {
    if (this.panelNode) {
      this.panelNode.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  setPanelNode(node) {
    this.panelNode = node;
  }

  handleTransitionEnd() {
    if (!this.props.isOpen) {
      this.panelNode.setAttribute('aria-hidden', true);
      this.isHidden = true;
    }
  }

  render() {
    const {
      mainContent,
      panelContent,
      panelBehavior,
      panelPosition,
      panelSize,
      isFullscreen,
      isOpen,
      fill,
      ...customProps
    } = this.props;

    const slidePanelClassNames = cx([
      'slide-panel',
      { 'is-open': isOpen },
      { 'is-fullscreen': isFullscreen },
      { fill },
      customProps.className,
    ]);

    return (
      <div
        {...customProps}
        className={slidePanelClassNames}
        data-slide-panel-panel-behavior={panelBehavior}
        data-slide-panel-panel-position={panelPosition}
        data-slide-panel-panel-size={panelSize}
      >
        <div className={cx(['panel'])} aria-hidden={this.isHidden ? 'true' : 'false'} ref={this.setPanelNode}>
          {panelContent}
        </div>
        <div className={cx('main')}>
          {mainContent}
        </div>
      </div>
    );
  }
}


SlidePanel.propTypes = propTypes;
SlidePanel.defaultProps = defaultProps;

export default SlidePanel;
