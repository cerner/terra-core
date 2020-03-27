import React from 'react';
import HeaderCell from '../../../src/subcomponents/_HeaderCell';

describe('HeaderCell', () => {
  // Snapshot Tests
  it('should render a HeaderCell', () => {
    const shallowComponent = shallow(<HeaderCell />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with child content', () => {
    const shallowComponent = shallow(<HeaderCell>test text</HeaderCell>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with child content and remove inner', () => {
    const shallowComponent = shallow(<HeaderCell removeInner>test text</HeaderCell>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const shallowComponent = shallow(<HeaderCell refCallback={jest.fn()} />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with width inner container removed', () => {
    const shallowComponent = shallow(<HeaderCell removeInner />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with width set', () => {
    const shallowComponent = shallow(<HeaderCell width={{ scalar: 2 }} />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with sortActive', () => {
    const shallowComponent = shallow(<HeaderCell isSortActive />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with sortDesc', () => {
    const shallowComponent = shallow(<HeaderCell isSortDesc />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCell with sortDesc and sortActive', () => {
    const shallowComponent = shallow(<HeaderCell isSortActive isSortDesc />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const mockCallBack = jest.fn();

    const shallowComponent = shallow(
      <HeaderCell
        onSortAction={mockCallBack}
        refCallback={jest.fn()}
        metaData={{ test: 'value' }}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('[role="columnheader"]').simulate('click');
    shallowComponent.find('[role="columnheader"]').simulate('keydown', { nativeEvent: { keyCode: 13 } });
    shallowComponent.find('[role="columnheader"]').simulate('keydown', { nativeEvent: { keyCode: 32 } });
    expect(mockCallBack.mock.calls.length).toEqual(3);
  });
});
