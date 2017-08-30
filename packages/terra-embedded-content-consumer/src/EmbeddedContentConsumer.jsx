import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'xfc';

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
   * The component can be configured with an authorization secret and the resize configuration.
   */
  options: PropTypes.shape({
    // The authorization secret to be used if the embedded application does not know which domain to trust.
    secret: PropTypes.string,
    resizeConfig: PropTypes.shape({
      // When set to be true, scrollbar may show up on component.
      scrolling: PropTypes.boolean,
      // When set to be true, the component autoresizes on width instead of on height.
      autoResizeWidth: PropTypes.boolean,
      // If specified (e.g. '200px'), the height will stay at the specified value.
      fixedHeight: PropTypes.string,
      // If specified (e.g. '400px'), the width of the component will stay at the specified value.
      fixedWidth: PropTypes.string,
      // Height calculation method preference. Defaults to 'bodyOffset'.
      heightCalculationMethod: PropTypes.oneOf([
        'bodyOffset',             // uses document.body.offsetHeight
        'bodyScroll',             // uses document.body.scrollHeight
        'documentElementOffset',  // uses document.documentElement.offsetHeight
        'documentElementScroll',  // uses document.documentElement.scrollHeight
        'max',                    // max of all of above options.
        'min',                    // min of all of above options.
      ]),
      // Width calculation method preference. Default to 'scroll'.
      widthCalculationMethod: PropTypes.oneOf([
        'bodyOffset',             // uses document.body.offsetHeight
        'bodyScroll',             // uses document.body.scrollHeight
        'documentElementOffset',  // uses document.documentElement.offsetHeight
        'documentElementScroll',  // uses document.documentElement.scrollHeight
        'scroll',                 // max of bodyScroll and documentElementScroll.
        'max',                    // max of all of above options.
        'min',                    // min of all of above options.
      ]),
      // When specified, the component size will be updated when necessary.
      customCalculationMethod: PropTypes.func,
    }),
  }),
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
