import React from 'react';
import Button from 'terra-button';
import intlContexts from './intl-context-setup';
import StatusView from '../../src/StatusView';

// Snapshot Tests
it('should render an image with a default status view', () => {
  const statusView = (<StatusView />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view with all message props given', () => {
  const statusView = (<StatusView variant={StatusView.variants.NODATA} title="Test Title" message="Test Message">
    <Button text="OK" key="1" />
    <Button text="Cancel" key="2" />
  </StatusView>);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view that will hide the glyph from being shown', () => {
  const statusView = (<StatusView variant={StatusView.variants.NODATA} isGlyphHidden />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-matching-results status-view that will force the content to align at the top', () => {
  const statusView = (<StatusView variant={StatusView.variants.NOMATCHINGRESULTS} isAlignedTop />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a not-authorized status-view', () => {
  const statusView = (<StatusView variant={StatusView.variants.NOTAUTHORIZED} />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with an error status-view', () => {
  const statusView = (<StatusView variant={StatusView.variants.ERROR} />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-service status-view', () => {
  const statusView = (<StatusView variant={StatusView.variants.NOSERVICE} />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a custom status-view', () => {
  const statusView = (<StatusView variant={StatusView.variants.CUSTOM} />);

  const wrapper = mount(statusView, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
});
