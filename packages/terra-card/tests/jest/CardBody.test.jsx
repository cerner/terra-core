import React from 'react';
import CardBody from '../../src/CardBody';

describe('CardBody', () => {
  const shallowRender = shallow(<CardBody />);

  // Snapshot Tests
  it('should render a default component', () => {
    expect(shallowRender).toMatchSnapshot();
  });

  it('should contain the class to apply horizontal padding', () => {
    const spacerElement = shallowRender.find('Spacer');
    expect(spacerElement.props().paddingLeft).toBe('medium');
    expect(spacerElement.props().paddingRight).toBe('medium');
  });

  it('should contain the class to apply vertical padding', () => {
    const spacerElement = shallowRender.find('Spacer');
    expect(spacerElement.props().paddingTop).toBe('medium');
    expect(spacerElement.props().paddingBottom).toBe('medium');
  });

  it('should contain the class to center content when prop to center content is passed', () => {
    const wrapper = shallow(<CardBody isContentCentered />);
    const contentCenteredCard = wrapper.find('.card-body');
    expect(contentCenteredCard.prop('className')).toContain('center-content');
  });

  it('should not contain the class to center content when prop to center content is not passed', () => {
    const cardBody = shallowRender.find('.card-body');
    expect(cardBody.prop('className')).not.toContain('center-content');
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const component = shallow(<CardBody />);
    expect(component).toMatchSnapshot();
  });
});
