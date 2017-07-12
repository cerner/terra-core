import React from 'react';
import ProgressBar from '../../src/ProgressBar';

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(<ProgressBar />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ProgressBar component with tiny heightSize and 15% fill', () => {
  const wrapper = shallow(<ProgressBar heightSize="tiny" value={15} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ProgressBar component with large heightSize and 60% fill', () => {
  const wrapper = shallow(<ProgressBar heightSize="large" value={60} color="#8ccc62" />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ProgressBar component with default heightSize 50% fill and custom props and style', () => {
  const wrapper = shallow(<ProgressBar value={6} max={12} dir="rtl" />);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
describe('Default progress bar', () => {
  it('should have classes progressbar, small and zero fill value', () => {
    const wrapper = shallow(<ProgressBar color="#8ccc62" />);
    expect(wrapper.prop('className')).toContain('progress-bar small');
    expect(wrapper.prop('value')).toEqual(0);
  });
});

describe('Progress bar with default heightSize color prop', () => {
  it('should have orange color, progressbar, small classes and 50% fill value', () => {
    const wrapper = shallow(<ProgressBar value={5} max={10} color="Orange" />);
    expect(wrapper.prop('value')).toEqual(50);
    expect(wrapper.prop('max')).toEqual(100);
    expect(wrapper.prop('color')).toEqual('Orange');
  });
  it('should have green color, progressbar, small classes and 75% fill value', () => {
    const wrapper = shallow(<ProgressBar value={7.5} max={10} color="#8ccc62" />);
    expect(wrapper.prop('value')).toEqual(75);
    expect(wrapper.prop('max')).toEqual(100);
    expect(wrapper.prop('color')).toEqual('#8ccc62');
  });
  it('should have red color, progressbar, small classes and 100% fill value', () => {
    const wrapper = shallow(<ProgressBar value={10} max={10} color="rgb(255, 0, 0)" />);
    expect(wrapper.prop('value')).toEqual(100);
    expect(wrapper.prop('max')).toEqual(100);
    expect(wrapper.prop('color')).toEqual('rgb(255, 0, 0)');
  });
});

describe('Progress bar with title as custom prop', () => {
  it('value=3, max=10; should have classes progressbar, small and 30% fill value', () => {
    const wrapper = shallow(<ProgressBar title="ProgressBarTest" value={3} max={10} />);
    expect(wrapper.prop('value')).toEqual(30);
    expect(wrapper.prop('max')).toEqual(100);
    expect(wrapper.prop('title')).toEqual('ProgressBarTest');
  });
});
