import React from 'react';
import CheckMarkCell from '../../../src/subcomponents/_CheckMarkCell';

describe('CheckMarkCell', () => {
  // Snapshot Tests
  it('should render a CheckMarkCell', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell as read only', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        isIcon
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell with alignment', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        alignmentPadding="5px"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell as selectable', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        isSelectable
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell as selectable disabled', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        isSelectable
        isDisabled
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell as selectable with selection', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        isSelectable
        isSelected
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell as selectable with selection and disabled', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        isSelectable
        isSelected
        isDisabled
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const mockCallBack = jest.fn();

    const shallowComponent = shallow(
      <CheckMarkCell
        isSelectable
        label="test text"
        onSelect={mockCallBack}
        refCallback={jest.fn()}
        metaData={{ test: 'value' }}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('[role="gridcell"]').simulate('click');
    shallowComponent.find('[role="gridcell"]').simulate('keydown', { nativeEvent: { keyCode: 13 } });
    shallowComponent.find('[role="gridcell"]').simulate('keydown', { nativeEvent: { keyCode: 32 } });
    expect(mockCallBack.mock.calls.length).toEqual(3);
  });
});
