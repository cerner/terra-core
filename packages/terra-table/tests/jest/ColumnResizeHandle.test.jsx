import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import ColumnResizeHandle from '../../src/subcomponents/ColumnResizeHandle';

describe('ColumnResizeHandle', () => {
  it('renders a default column resize handle', () => {
    const mockResizeMouseDown = jest.fn();

    // Mount component in test to allow event simulation
    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        columnText="Vitals"
        columnWidth={200}
        height={500}
        minimumWidth={60}
        maximumWidth={300}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    );

    // Validate resize handle component
    const resizeHandle = wrapper.find('.resize-handle');
    expect(resizeHandle).toHaveLength(1);
    expect(resizeHandle.props()['aria-label']).toBe('Vitals');
    expect(resizeHandle.props()['aria-valuenow']).toBe(200);
    expect(resizeHandle.props()['aria-valuemin']).toBe(60);
    expect(resizeHandle.props()['aria-valuemax']).toBe(300);
    expect(resizeHandle.props().tabIndex).toEqual(-1);
    expect(resizeHandle.props().style.height).toBe('500px');

    // Simulate onMouseDown event
    resizeHandle.invoke('onMouseDown')(
      {
        stopPropagation: () => {},
        preventDefault: () => {},
      },
      9000,
    );

    // Validate mock function was called from simulated onMouseDown event
    expect(mockResizeMouseDown).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
