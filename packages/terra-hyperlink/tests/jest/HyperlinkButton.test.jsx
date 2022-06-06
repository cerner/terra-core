import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderWithIntl, mountWithIntl } from '@cerner/terra-enzyme-intl';
import HyperlinkButton from '../../src/HyperlinkButton';

describe('Hyperlink Button', () => {
  // Snapshot Tests
  it('should render a default hyperlink button', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Default hyperlink button" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Disabled hyperlink button" onClick={() => {}} isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a audio hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Audio hyperlink button" onClick={() => {}} variant="audio" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a document hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Document hyperlink button" onClick={() => {}} variant="document" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a external hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="External hyperlink button" onClick={() => {}} variant="external" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a image hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Image hyperlink button" onClick={() => {}} variant="image" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a underline hidden hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Underline hidden hyperlink button" onClick={() => {}} isUnderlineHidden />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a video hyperlink', () => {
    const wrapper = renderWithIntl(<HyperlinkButton text="Video hyperlink button" onClick={() => {}} variant="video" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const component = mountWithIntl(
      <HyperlinkButton text="Default hyperlink button" onClick={() => {}} />,
    );
    expect(component).toMatchSnapshot();
  });
});
