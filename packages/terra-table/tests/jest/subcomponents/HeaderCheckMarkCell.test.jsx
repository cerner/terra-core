import React from 'react';
import HeaderCheckMarkCell from '../../../src/subcomponents/_HeaderCheckMarkCell';

describe('HeaderCheckMarkCell', () => {
  // Snapshot Tests
  it('should render a HeaderCheckMarkCell', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell with child content', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
      >
        test text
      </HeaderCheckMarkCell>,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell with width inner container removed', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        removeInner
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell with alignment', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        alignmentPadding="5px"
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell as selectable', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell as selectable disabled', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
        isDisabled
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell as selectable with selection', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
        isSelected
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell as selectable with selection and disabled', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
        isSelected
        isDisabled
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell as selectable with selection and indeterminate', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
        isSelected
        isIndeterminate
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderCheckMarkCell as selectable with selection, indeterminate, and disabled', () => {
    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
        isSelected
        isIndeterminate
        isDisabled
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const mockCallBack = jest.fn();

    const shallowComponent = shallow(
      <HeaderCheckMarkCell
        label="test text"
        isSelectable
        onSelect={mockCallBack}
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
