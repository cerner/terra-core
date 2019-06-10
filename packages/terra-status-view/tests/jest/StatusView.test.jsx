import React from 'react';
import Button from 'terra-button';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView, { StatusViewVariants } from '../../src/StatusView';

// Catch console warnings when visuallyHiddenText prop has not been included for accessibility.
// This should be removed when visuallyHiddenText become required.
global.console = { log: jest.fn(), warn: jest.fn() };

// Snapshot Tests
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
    <StatusView variant={StatusViewVariants.NODATA} title="Test Title" message="Test Message">
      <Button text="OK" key="1" />
      <Button text="Cancel" key="2" />
    </StatusView>
  );

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-data status view that will hide the glyph from being shown', () => {
  const statusView = (<StatusView variant={StatusViewVariants.NODATA} isGlyphHidden />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a no-matching-results status-view that will force the content to align at the top', () => {
  const statusView = (<StatusView variant={StatusViewVariants.NOMATCHINGRESULTS} isAlignedTop />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a not-authorized status-view', () => {
  const statusView = (<StatusView variant={StatusViewVariants.NOTAUTHORIZED} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with an error status-view', () => {
  const statusView = (<StatusView variant={StatusViewVariants.ERROR} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an image with a custom status-view', () => {
  const statusView = (<StatusView variant={StatusViewVariants.CUSTOM} customGlyph={<IconDiamond />} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});
