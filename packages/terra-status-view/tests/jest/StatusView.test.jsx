import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusView, { StatusViewVariants } from '../../src/StatusView';

// Catch console warnings when visuallyHiddenText prop has not been included for accessibility.
// This should be removed when visuallyHiddenText become required.
global.console = { log: jest.fn(), warn: jest.fn() };

const buttons = [
  {
    text: 'Action1',
    key: 1,
  }, {
    text: 'Action2',
    key: 2,
  },
];

// Snapshot Tests
it('should render a status view with custom glyph, title, message, and two buttons', () => {
  const statusView = (
    <StatusView customGlyph={<IconDiamond />} title="Test Title" message="Test Message" buttonAttrs={buttons} />
  );

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a no-data status view with a hidden glyph', () => {
  const statusView = (<StatusView variant={StatusViewVariants.NODATA} isGlyphHidden />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a no-matching-results status-view with top alignment', () => {
  const statusView = (<StatusView variant={StatusViewVariants.NOMATCHINGRESULTS} isAlignedTop />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a not-authorized status-view', () => {
  const statusView = (<StatusView variant={StatusViewVariants.NOTAUTHORIZED} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});

it('should render an error status-view', () => {
  const statusView = (<StatusView variant={StatusViewVariants.ERROR} />);

  const wrapper = mountWithIntl(statusView);
  expect(wrapper).toMatchSnapshot();
});
