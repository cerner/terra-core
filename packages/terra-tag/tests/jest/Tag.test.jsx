import React from 'react';
import Tag from '../../src/Tag';

describe('Tag', () => {
  const defaultRender = <Tag text="default" />;

  // Snapshot Tests
  it('should render a tag', () => {
    const tag = shallow(<Tag text="Normal" />);
    expect(tag).toMatchSnapshot();
  });

  it('should render as an anchor when provided an href', () => {
    const tag = shallow(<Tag text="href" href="MockHref" />);
    expect(tag).toMatchSnapshot();
  });

  it('should render an icon and a text', () => {
    const testElement = <img alt="icon" />;
    const tag = shallow(<Tag icon={testElement} text="text" />);
    expect(tag).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an interactive tag', () => {
    const tag = shallow(<Tag text="text" onClick={() => {}} />);
    expect(tag).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class tag', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('tag');
  });

  it('should have the class icon when icon is provided', () => {
    const testElement = <img alt="icon" />;
    const tag = shallow(<Tag icon={testElement} text="text" />);
    expect(tag.childAt(0).hasClass('icon')).toEqual(true);
  });

  it('should render as an button tag when href is not provided', () => {
    const tag = shallow(<Tag text="text" onClick={() => {}} />);
    expect(tag.is('button')).toEqual(true);
  });

  it('should render as span tag when href and Onclick is not provided', () => {
    const tag = shallow(<Tag text="text" />);
    expect(tag.is('span')).toEqual(true);
  });
});
