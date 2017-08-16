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

it('should render the embedded content consumer to fill its parent', () => {
  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src="https://www.google.com/"
    fill
  />);

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should render the embedded content consumer with custom class names', () => {
  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src="https://www.google.com/"
    fill
    className="container"
  />);

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should validate the inputs', () => {
  const src = 'https://www.google.com/';
  const onLaunch = () => { console.log('launched'); };
  const onAuthorize = () => { console.log('authorized'); };
  const onFullScreen = () => { console.log('provider wants to go full screen'); };
  const options = { secret: 'SecretKey' };
  const customEvents = [{ key: 'eventKey', handler: () => {} }];

  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src={src}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    onFullScreen={onFullScreen}
    options={options}
    eventHandlers={customEvents}
    fill
  />);

  Consumer.init();
  const wrapper = mount(embeddedContentConsumer);

  expect(wrapper.props().src).toBe(src);
  expect(wrapper.props().onLaunch).toBe(onLaunch);
  expect(wrapper.props().onAuthorize).toBe(onAuthorize);
  expect(wrapper.props().onFullScreen).toBe(onFullScreen);
  expect(wrapper.props().options).toBe(options);
  expect(wrapper.props().eventHandlers).toBe(customEvents);
});
