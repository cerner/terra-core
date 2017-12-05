import React from 'react';
import Button from 'terra-button';
import { IntlProvider } from 'react-intl';
import StatusView from '../../src/StatusView';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

// Snapshot Tests
it('should render an image with a default status view', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view with all message props given', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.NODATA} title="Test Title" message="Test Message">
      <Button text="OK" key="1" />
      <Button text="Cancel" key="2" />
    </StatusView>
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view that will hide the glyph from being shown', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.NODATA} isGlyphHidden />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-matching-results status-view that will force the content to align at the top', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.NOMATCHINGRESULTS} isAlignedTop />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a not-authorized status-view', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.NOTAUTHORIZED} />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with an error status-view', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.ERROR} />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-service status-view', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.NOSERVICE} />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a custom status-view', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView variant={StatusView.variants.CUSTOM} />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});
