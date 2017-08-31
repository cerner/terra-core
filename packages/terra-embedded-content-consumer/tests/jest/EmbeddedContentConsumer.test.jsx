import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

// Snapshot Tests
it('should render the embedded content consumer container', () => {
  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src="https://www.google.com/"
  />);

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should render the embedded content consumer with custom class names', () => {
  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src="https://www.google.com/"
    className="container"
  />);

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should validate the inputs', () => {
  const src = 'https://www.google.com/';
  const onLaunch = () => {};
  const onAuthorize = () => {};
  const resizeConfig = { scrolling: false, fixedHeight: '100%', fixedWidth: '100%' };
  const options = { secret: 'SecretKey', resizeConfig };
  const customEvents = [{ key: 'eventKey', handler: () => {} }];

  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src={src}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    options={options}
    eventHandlers={customEvents}
  />);

  Consumer.init();
  const wrapper = mount(embeddedContentConsumer);

  expect(wrapper.props().src).toBe(src);
  expect(wrapper.props().onLaunch).toBe(onLaunch);
  expect(wrapper.props().onAuthorize).toBe(onAuthorize);
  expect(wrapper.props().options).toBe(options);
  expect(wrapper.props().options.resizeConfig).toBe(resizeConfig);
  expect(wrapper.props().eventHandlers).toBe(customEvents);
});
