import React from 'react';
import Notice from '../../src/Notice';

describe('Notice', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a deprecation notice with text', () => {
    const wrapper = shallow(
      <Notice variant="deprecation">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a maintenance notice with text', () => {
    const wrapper = shallow(
      <Notice variant="maintenance">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a best practice notice with text', () => {
    const wrapper = shallow(
      <Notice variant="best-practice">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a caution notice with text', () => {
    const wrapper = shallow(
      <Notice variant="caution">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a note notice with text', () => {
    const wrapper = shallow(
      <Notice variant="note">
        notice text
      </Notice>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
