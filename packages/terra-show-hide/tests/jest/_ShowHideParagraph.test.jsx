import React from 'react';
import { Paragraph } from '../../src/ShowHide';

describe('Paragraph', () => {
  const mockPreview = 'Patients are requesting greater affordability and efficiency in healthcare.';
  const shortText = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate.';
  const text = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care.';
  const mockRef = 'mockRef';

  // Snapshot Tests
  it('should render divider spans and a span to focus to correctly', () => {
    const paragraph = render(<p><Paragraph ref={mockRef} text={text} /></p>);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render preview text correctly', () => {
    const paragraph = render(<p><Paragraph ref={mockRef} previewText={mockPreview} text={text} /></p>);
    expect(paragraph).toMatchSnapshot();
  });

  it('should render short text correctly', () => {
    const paragraph = render(<p><Paragraph ref={mockRef} text={shortText} /></p>);
    expect(paragraph).toMatchSnapshot();
  });
});
