import React from 'react';
import Row from '../../../src/subcomponents/_Row';

describe('Row', () => {
  // Snapshot Tests
  it('should render a Row', () => {
    const shallowComponent = shallow(<Row>test content</Row>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row with divider style - vertical', () => {
    const shallowComponent = shallow(<Row dividerStyle="vertical">test content</Row>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row with divider style - horizontal', () => {
    const shallowComponent = shallow(<Row dividerStyle="horizontal">test content</Row>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row with divider style - both', () => {
    const shallowComponent = shallow(<Row dividerStyle="both">test content</Row>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row with stripe', () => {
    const shallowComponent = shallow(<Row isStriped>test content</Row>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row as selectable', () => {
    const shallowComponent = shallow(
      <Row
        isSelectable
      >
        test content
      </Row>,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row as selectable disabled', () => {
    const shallowComponent = shallow(
      <Row
        isSelectable
        isDisabled
      >
        test content
      </Row>,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row as selectable with selection', () => {
    const shallowComponent = shallow(
      <Row
        isSelectable
        isSelected
      >
        test content
      </Row>,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Row as selectable with selection and disabled', () => {
    const shallowComponent = shallow(
      <Row
        isSelectable
        isSelected
        isDisabled
      >
        test content
      </Row>,
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const mockCallBack = jest.fn();

    const shallowComponent = shallow(
      <Row
        isSelectable
        onSelect={mockCallBack}
        refCallback={jest.fn()}
        metaData={{ test: 'value' }}
      >
        test content
      </Row>,
    );
    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('[role="row"]').simulate('click');
    shallowComponent.find('[role="row"]').simulate('keydown', { nativeEvent: { keyCode: 13 } });
    shallowComponent.find('[role="row"]').simulate('keydown', { nativeEvent: { keyCode: 32 } });
    expect(mockCallBack.mock.calls.length).toEqual(3);
  });
});
