import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'xfc';

const propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: PropTypes.string.isRequired,
  /**
   * Notifies the component that the container has been mounted. Provides a reference
   * to this component to allow triggering messages on the embedded application.
   */
  onMount: PropTypes.func,
  /**
   * Notifies the component that the container has been launched.
   */
  onLaunch: PropTypes.func,
  /**
   * Notifies the component that the container has been authorized.
   */
  onAuthorize: PropTypes.func,
  /**
   * The component can be configured with consumer frame options.
   * See xfc consumer configuration for details: https://github.com/cerner/xfc
   */
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
  /**
  * A set of event handlers keyed by the event name.
  * Note: Binding the event handler is necessary to make `this` work in the callback.
  */
  eventHandlers: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    handler: PropTypes.func,
  })),
};

class EmbeddedContentConsumer extends React.Component {
  componentDidMount() {
    // Mount the provided source as the application into the content wrapper.
    this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src, this.props.options);

    // Notify that the consumer frame has mounted.
    if (this.props.onMount) {
      this.props.onMount(this.xfcFrame);
    }

    // Attach the event handlers to the xfc frame.
    this.addEventListener('xfc.launched', this.props.onLaunch);
    this.addEventListener('xfc.authorized', this.props.onAuthorize);

    // Attach custom event handlers to the xfc frame.
    this.addEventListeners(this.props.eventHandlers);
  }

  addEventListener(eventName, eventHandler) {
    if (eventName && eventHandler) {
      this.xfcFrame.on(eventName, eventHandler);
    }
  }

  addEventListeners(customEvents) {
    (customEvents || []).forEach(e => this.addEventListener(e.key, e.handler));
  }

  render() {
    const {
      src,
      onMount,
      onLaunch,
      onAuthorize,
      options,
      eventHandlers,
      ...customProps
    } = this.props;

    return (
      <div
        {...customProps}
        ref={(element) => { this.embeddedContentWrapper = element; }}
      />
    );
  }
}

EmbeddedContentConsumer.propTypes = propTypes;

export default EmbeddedContentConsumer;
