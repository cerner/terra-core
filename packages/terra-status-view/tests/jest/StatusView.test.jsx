import React from 'react';
import Button from 'terra-button';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView from '../../src/StatusView';

// Snapshot Tests
it('should render an image with a default status view', () => {
  const statusView = (<StatusView />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a single child element', () => {
  const statusView = (
    <StatusView>
      <Button text="OK" key="1" />
    </StatusView>
  );

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view with all message props given', () => {
  const statusView = (
    <StatusView variant={StatusView.Opts.variants.NODATA} title="Test Title" message="Test Message">
      <Button text="OK" key="1" />
      <Button text="Cancel" key="2" />
    </StatusView>
  );

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view that will hide the glyph from being shown', () => {
  const statusView = (<StatusView variant={StatusView.Opts.variants.NODATA} isGlyphHidden />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-matching-results status-view that will force the content to align at the top', () => {
  const statusView = (<StatusView variant={StatusView.Opts.variants.NOMATCHINGRESULTS} isAlignedTop />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a not-authorized status-view', () => {
  const statusView = (<StatusView variant={StatusView.Opts.variants.NOTAUTHORIZED} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with an error status-view', () => {
  const statusView = (<StatusView variant={StatusView.Opts.variants.ERROR} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a custom status-view', () => {
  const statusView = (<StatusView variant={StatusView.Opts.variants.CUSTOM} customGlyph={<IconDiamond />} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});
