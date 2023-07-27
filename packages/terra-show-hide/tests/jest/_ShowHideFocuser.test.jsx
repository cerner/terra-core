import React from 'react';
import { Focuser } from '../../src/ShowHide';

describe('Focuser', () => {
  const mockPrefix = 'Patients are requesting greater affordability and efficiency in healthcare.';
  const mockFocusableText = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care.';
  // eslint-disable-next-line react/prop-types
  const MockComponent = ({ prefix, focusableText }) => {
    const ref = React.useRef(null);
    return <p><Focuser ref={ref} prefix={prefix} focusableText={focusableText} /></p>;
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Snapshot Tests
  it('should render divider spans and a span to focus to correctly', () => {
    const paragraph = render(<MockComponent focusableText={mockFocusableText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render preview text correctly', () => {
    const paragraph = render(<MockComponent prefix={mockPrefix} focusableText={mockFocusableText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render focusable text correctly', () => {
    const paragraph = render(<MockComponent focusableText={mockFocusableText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should throw error for required focusableText prop', () => {
    try {
      shallow(<MockComponent />);
    } catch (e) {
      expect(e.message).toContain('The prop `focusableText` is marked as required');
    }
  });
});
