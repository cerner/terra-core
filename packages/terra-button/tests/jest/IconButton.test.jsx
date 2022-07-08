import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
/* eslint-disable  import/no-unresolved */
import DecoIconSquare from 'terra-icon/lib/icon/decorative/IconSquareSymbol';

import IconButton from '../../src/variants/_IconButton';

// Snapshot Tests
it('should render a IconButton', () => {
  const iconButton = shallow(<IconButton text="square" icon={<IconSquare a11yLabel="square" />} iconType="informative" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render a icon only IconButton', () => {
  const iconButton = shallow(<IconButton isIconOnly icon={<DecoIconSquare a11yLabel="square" />} iconType="decorative" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render an action IconButton', () => {
  const iconButton = shallow(<IconButton isIconOnly icon={<DecoIconSquare a11yLabel="square" />} iconType="decorative" variant="action" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render a utility IconButton', () => {
  const iconButton = shallow(<IconButton text="square" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="utility" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render a IconButton with type equal to iconButton', () => {
  const iconButton = shallow(<IconButton text="iconButton" icon={<IconSquare a11yLabel="square" />} iconType="informative" type="iconButton" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render a IconButton with type equal to reset', () => {
  const iconButton = shallow(<IconButton text="reset" icon={<IconSquare a11yLabel="square" />} iconType="informative" type="reset" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render a IconButton with type equal to submit', () => {
  const iconButton = shallow(<IconButton text="submit" icon={<IconSquare a11yLabel="square" />} iconType="informative" type="submit" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render text then an icon when reversed', () => {
  const iconButton = shallow(<IconButton text="text" isReversed icon={<IconSquare a11yLabel="square" />} iconType="informative" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render a IconButton with merged attributes', () => {
  /* eslint-disable react/forbid-component-props */
  const iconButton = shallow(<IconButton className="TestClass" data-mock="data" text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" style={{ height: '100px' }} />);
  expect(iconButton).toMatchSnapshot();
  /* eslint-enable react/forbid-component-props */
});

it('should render IconButton as disabled when set', () => {
  const iconButton = shallow(<IconButton isDisabled text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" />);
  expect(iconButton).toMatchSnapshot();
});

it('should render IconButton with tabIndex when set', () => {
  const iconButton = shallow(<IconButton isDisabled text="text" isReversed icon={<IconSquare a11yLabel="square" />} iconType="informative" tabIndex="-1" />);
  expect(iconButton).toMatchSnapshot();
});

// // Prop Tests
it('should have the class utility when variant is set to utility', () => {
  const iconButton = shallow(<IconButton text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="utility" />);
  expect(iconButton.prop('className')).toContain('utility');
});

it('should have the class action when variant is set to action', () => {
  const iconButton = shallow(<IconButton text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="action" />);
  expect(iconButton.prop('className')).toContain('action');
});

it('should have the class block when block is enabled', () => {
  const iconButton = shallow(<IconButton text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" isBlock />);
  expect(iconButton.prop('className')).toContain('block');
});

it('should pass in refCallback as the ref prop of the input element', () => {
  const refCallback = jest.fn();
  const iconButton = mount(<IconButton text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" refCallback={refCallback} />);
  expect(refCallback).toBeCalled();
  expect(iconButton).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const iconButton = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <IconButton text="text" icon={<IconSquare a11yLabel="square" />} iconType="informative" />
    </ThemeContextProvider>,
  );
  expect(iconButton).toMatchSnapshot();
});
