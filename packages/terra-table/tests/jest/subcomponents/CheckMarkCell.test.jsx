import React from 'react';
import CheckMarkCell from '../../src/subcomponents/CheckMarkCell';

// label: PropTypes.string.isRequired,
// isReadOnly: PropTypes.bool,
// isHidden: PropTypes.bool,
// alignmentPadding: PropTypes.string,
// isDisabled: PropTypes.bool,
// isSelectable: PropTypes.bool,
// isSelected: PropTypes.bool,
// metaData: PropTypes.object,
// onSelect: PropTypes.func,
// refCallback: PropTypes.func,
// onBlur: PropTypes.func,
// onFocus: PropTypes.func,
// onClick: PropTypes.func,
// onKeyDown: PropTypes.func,
// onMouseDown: PropTypes.func,

describe('CheckMarkCell', () => {
  // Snapshot Tests
  it('should render a CheckMarkCell', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
      />
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a CheckMarkCell as read only', () => {
    const shallowComponent = shallow(
      <CheckMarkCell
        label="test text"
        isReadOnly
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
        label="test text"
        onSelect={mockCallBack}
        refCallback={jest.fn()}
        metaData={{ test: 'value' }}
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('role="gridcell"').simulate('click');
    shallowComponent.find('role="gridcell"').simulate('keydown', { nativeEvent: { keyCode: 13 } });
    shallowComponent.find('role="gridcell"').simulate('keydown', { nativeEvent: { keyCode: 32 } });
    expect(mockCallBack.mock.calls.length).toEqual(3);
  });
});
