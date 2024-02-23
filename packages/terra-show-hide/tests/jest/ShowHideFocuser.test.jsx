import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ShowHideFocuser from '../../src/ShowHideFocuser';

describe('ShowHideFocuser', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  const mockPrefix = 'Patients are requesting greater affordability and efficiency in healthcare.';
  const mockFocusableText = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care.';
  // eslint-disable-next-line react/prop-types
  const MockComponent = ({ prefix, focusableText }) => {
    const ref = React.useRef(null);
    return <p><ShowHideFocuser ref={ref} prefix={prefix} focusableText={focusableText} /></p>;
  };

  // Snapshot Tests
  it('should render divider spans and a span to focus to correctly', () => {
    const paragraph = enzyme.render(<MockComponent focusableText={mockFocusableText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render preview text correctly', () => {
    const paragraph = enzyme.render(<MockComponent prefix={mockPrefix} focusableText={mockFocusableText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render focusable text correctly', () => {
    const paragraph = enzyme.render(<MockComponent focusableText={mockFocusableText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should throw error for required focusableText prop', () => {
    try {
      enzyme.shallow(<MockComponent />);
    } catch (e) {
      expect(e.message).toContain('The prop `focusableText` is marked as required');
    }
  });
});
