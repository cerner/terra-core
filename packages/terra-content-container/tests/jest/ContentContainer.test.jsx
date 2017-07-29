import React from 'react';
import ContentContainer from '../../src/ContentContainer';

const defaultVariety = <ContentContainer />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class terra-ContentContainer', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('content-container');
});

it('should render a header', () => {
  const container = <ContentContainer header={<p>Header</p>} />;
  const wrapper = shallow(container);
  expect(wrapper).toMatchSnapshot();
});

it('should render content', () => {
  const container = (
    <ContentContainer>
      <p>test content</p>
    </ContentContainer>);
  const wrapper = shallow(container);
  expect(wrapper).toMatchSnapshot();
});

it('should render as fill', () => {
  const container = <ContentContainer fill />;
  const wrapper = shallow(container);
  expect(wrapper).toMatchSnapshot();
});
