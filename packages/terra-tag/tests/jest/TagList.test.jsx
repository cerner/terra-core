import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import TagList from '../../src/TagList';

describe('TagList Component', () => {
  it('should render tagList with 2 items"', () => {
    const wrapper = shallowWithIntl(
      <TagList ariaLabel="Tag List">
        <div id="tag1">Tag 1</div>
        <div id="tag2">Tag 2</div>
      </TagList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const wrapper = shallowWithIntl(
      <TagList
        ariaLabel="Custom Tag List"
        ariaLabelledBy="label-id"
        ariaDescribedBy="description-id"
        isCollapsible
        intl={{ formatMessage: jest.fn() }} // Mocked intl prop
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
