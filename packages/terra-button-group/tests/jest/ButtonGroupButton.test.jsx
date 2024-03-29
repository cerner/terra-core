import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Button from '../../src/ButtonGroupButton';

it('should render a default component', () => {
  const button = enzyme.shallow(<Button text="Default Button" />);
  expect(button).toMatchSnapshot();
});

it('should render as disabled', () => {
  const button = enzyme.shallow(<Button text="Disabled" isDisabled />);
  expect(button).toMatchSnapshot();
});

it('should render with icon only', () => {
  const testElement = <img alt="icon" />;
  const button = enzyme.shallow(<Button text="Icon Only" icon={testElement} />);
  expect(button).toMatchSnapshot();
});

it('should render with onBlur', () => {
  const button = enzyme.shallow(<Button text="onBlur" onBlur={() => {}} />);
  expect(button).toMatchSnapshot();
});

it('should render with onClick', () => {
  const button = enzyme.shallow(<Button text="onClick" onClick={() => {}} />);
  expect(button).toMatchSnapshot();
});

it('should render with onFocus', () => {
  const button = enzyme.shallow(<Button text="onFocus" onFocus={() => {}} />);
  expect(button).toMatchSnapshot();
});

it('should render with onKeyDown', () => {
  const button = enzyme.shallow(<Button text="onKeyDown" onKeyDown={() => {}} />);
  expect(button).toMatchSnapshot();
});

it('should render with onKeyUp', () => {
  const button = enzyme.shallow(<Button text="onKeyUp" onKeyUp={() => {}} />);
  expect(button).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const button = enzyme.mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <Button text="Default Button" />
    </ThemeContextProvider>,
  );
  expect(button).toMatchSnapshot();
});
