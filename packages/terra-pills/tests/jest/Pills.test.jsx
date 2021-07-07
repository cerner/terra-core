import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import PillList from '../../src/PillList';
import Pill from '../../src/Pill';

/* Basic Pill */
it('should render a basic pill', () => {
  const wrapper = shallowWithIntl(<Pill label="label" />);
  expect(wrapper).toMatchSnapshot();
});

/* Basic Removable Pill */
it('should render a basic removable pill', () => {
  const wrapper = shallowWithIntl(<Pill label="label" onRemove={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

/* Disclosure Pill */
it('should render a disclosure pill', () => {
  const wrapper = shallowWithIntl(<Pill label="label" onSelect={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

/* Disclosure and Removable Pill */
it('should render a disclosure and removable pill', () => {
  const wrapper = shallowWithIntl(<Pill label="label" onSelect={() => { }} onRemove={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

/* Standard Pill List */
it('should render a standard pill list', () => {
  const wrapper = shallowWithIntl(
    <PillList ariaLabel="pill list label">
      <Pill label="pill label" />
      <Pill label="pill label" />
    </PillList>,
  );
  expect(wrapper).toMatchSnapshot();
});

/* Empty Pill List */
// it('should render an empty pill list', () => {
//   const wrapper = shallowWithIntl(
//     <PillList ariaLabel="pill list label" />,
//   );
//   expect(wrapper).toMatchSnapshot();
// });

/* Collapsible Pill List */
it('should render a standard pill list', () => {
  const wrapper = shallowWithIntl(
    <PillList ariaLabel="pill list label" isCollapsed rollUpPillOnTrigger={() => { }}>
      <Pill label="pill label" />
    </PillList>,
  );
  expect(wrapper).toMatchSnapshot();
});

/* Pill List with a Provided Visible Label */
it('should render a pill list with aria-labelledby attribute', () => {
  const wrapper = mountWithIntl(
    <div>
      <p id="test-labelledby-label">pill list labelledby label</p>
      <PillList ariaLabel="pill list label" ariaLabelledBy="test-labelledby-label">
        <Pill label="pill label" />
      </PillList>
    </div>,
  );
  expect(wrapper).toMatchSnapshot();
});

/* Pill List with Theme Context */
it('correctly applies the theme context className', () => {
  const wrapper = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <PillList ariaLabel="pill list label">
        <Pill label="pill label" />
      </PillList>
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
