import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Consumer } from 'xfc';
import styles from './EmbeddedContentConsumer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: PropTypes.string.isRequired,
  /**
   * Notifies the component that the container has been launched.
   */
  onLaunch: PropTypes.func,
  /**
   * Notifies the component that the container has been authorized.
   */
  onAuthorize: PropTypes.func,
  /**
   * Allows launching another provider application in full screen.
   */
  onFullScreen: PropTypes.func,
  /**
   * The component can be configured with an authorization secret.
   * secret - The authorization secret to be used if the embedded application does not know which domain to trust.
   */
  options: PropTypes.shape({
    /**
     * The authorization secret to be used if the embedded app does not know which domain to trust.
     */
    secret: PropTypes.string,
  }),
  /**
  * A set of event handlers keyed by the event name.
  */
  eventHandlers: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    handler: PropTypes.func,
  })),
  /**
   * Whether or not the container should expanded to fill its parent.
   */
  fill: PropTypes.bool,
};

class EmbeddedContentConsumer extends React.Component {
  componentDidMount() {
    // Mount the provided source as the application into the content wrapper.
    this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src, this.props.options);

    // Attach the event handlers to the xfc frame.
    this.addEventListener('xfc.launched', this.props.onLaunch);
    this.addEventListener('xfc.authorized', this.props.onAuthorize);
    this.addEventListener('xfc.fullscreen', this.props.onFullScreen);

    // Attach the custom event handlers to the xfc frame.
    this.addEventListeners(this.props.eventHandlers);
  }

  addEventListener(eventName, eventHandler) {
    if (eventName && eventHandler) {
      this.xfcFrame.on(eventName, eventHandler);
    }
  }

  addEventListeners(customEvents) {
    if (customEvents) {
      customEvents.forEach((event) => {
        this.xfcFrame.on(event.key, event.handler);
      });
    }
  }

  render() {
    const {
      src,
      onLaunch,
      onAuthorize,
      onFullScreen,
      options,
      eventHandlers,
      fill,
      ...customProps
    } = this.props;

    const contentLayoutClassNames = cx([
      { fill },
      customProps.className,
    ]);

    return (
      <div
        className={contentLayoutClassNames}
        ref={(element) => { this.embeddedContentWrapper = element; }}
      />
    );
  }
}

EmbeddedContentConsumer.propTypes = propTypes;

export default EmbeddedContentConsumer;
