import React from 'react';
import { Paragraph } from '../../src/ShowHide';

describe('Paragraph', () => {
  const mockPreview = 'Patients are requesting greater affordability and efficiency in healthcare.';
  const shortText = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate.';
  const fullText = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care.';
  // eslint-disable-next-line react/prop-types
  const MockComponent = ({ previewText, text }) => {
    const ref = React.useRef(null);
    return <p><Paragraph ref={ref} previewText={previewText} text={text} /></p>;
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Snapshot Tests
  it('should render divider spans and a span to focus to correctly', () => {
    const paragraph = render(<MockComponent text={fullText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render preview text correctly', () => {
    const paragraph = render(<MockComponent previewText={mockPreview} text={fullText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render short text correctly', () => {
    const paragraph = render(<MockComponent text={shortText} />);
    expect(paragraph).toMatchSnapshot();
  });

  it('should throw error for required text prop', () => {
    try {
      shallow(<MockComponent />);
    } catch (e) {
      expect(e.message).toContain('The prop `text` is marked as required');
    }
  });
});
