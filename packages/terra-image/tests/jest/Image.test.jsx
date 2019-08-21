import React from 'react';
import Image from '../../src/Image';

const imagecontainerStyle1 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 200,
};

const image = <Image src="" alt="circle" variant="circle" isFluid />;

/* Default component */
it('should render a default component', () => {
  const wrapper = shallow(<Image src="" alt=" " />);
  expect(wrapper.instance().props.alt).toEqual(' ');
});

/* Default component with a height and width */
it('should render a default image component with a specified height and width', () => {
  const wrapper = shallow(<Image src="" height="200" width="300" alt="default image" />);
  expect(wrapper.instance().props.alt).toEqual('default image');
  expect(wrapper.instance().props.height).toEqual('200');
  expect(wrapper.instance().props.width).toEqual('300');
});

/* Image with a rounded variant */
it('should render a rounded image component', () => {
  const wrapper = shallow(<Image src="" variant="rounded" alt="rounded image" />);
  expect(wrapper.instance().props.alt).toEqual('rounded image');
});

/* Image with a circle variant */
it('should render a circle image component', () => {
  const wrapper = shallow(<Image src="" variant="circle" alt="circle image" />);
  expect(wrapper.instance().props.alt).toEqual('circle image');
});

/* Image with a thumbnail variant */
it('should render a thumbnail image component', () => {
  const wrapper = shallow(<Image src="" variant="thumbnail" alt="thumbnail image" />);
  expect(wrapper.instance().props.alt).toEqual('thumbnail image');
});

/* Image with fluid behavior */
it('should render a thumbail image component with fluid behavior', () => {
  const wrapper = render(<Image src="" variant="thumbnail" alt="thumbnail image" isFluid />);
  expect(wrapper).toMatchSnapshot();
});

/* Image without fluid behavior */
it('should render a thumbail image component with non-fluid behavior', () => {
  const wrapper = render(<Image src="" variant="thumbnail" alt="thumbnail image" />);
  expect(wrapper).toMatchSnapshot();
});

/* Image with fluid behavior having a parent container */
it('should render a circle image component with fluid behavior', () => {
  /* eslint-disable react/forbid-dom-props */
  const wrapper = shallow(<div style={imagecontainerStyle1}>{image}</div>);
  expect(wrapper).toMatchSnapshot();
  /* eslint-enable react/forbid-dom-props */
});

/* Image with onLoad function */
it('should render an image with the supplied onLoad function', () => {
  const onLoadFunc = () => {};
  const wrapper = shallow(<Image src="" alt=" " onLoad={onLoadFunc} />);
  expect(wrapper.instance().props.onLoad).toBe(onLoadFunc);
});

/* Image with onError function */
it('should render an image with the supplied onError function', () => {
  const onErrorFunc = () => {};
  const wrapper = shallow(<Image src="" alt=" " onError={onErrorFunc} />);
  expect(wrapper.instance().props.onError).toBe(onErrorFunc);
});

/* Placeholder image is displayed while the src image is loading */
it('should render a hidden src image and a visible placeholder image', () => {
  const wrapper = shallow(<Image src="profile.jpg" alt=" " height="75" width="75" placeholder={<div>placeholder text</div>} />);
  expect(wrapper).toMatchSnapshot();
});

/* Src image successfully loaded */
it('should render the src image', () => {
  const wrapper = shallow(<Image src="profile.jpg" alt="profile" height="75" width="75" placeholder={<div>placeholder text</div>} />);
  wrapper.setState({ isLoading: false });
  expect(wrapper).toMatchSnapshot();
});

/* Src image failed to load */
it('should render the placeholder image', () => {
  const wrapper = shallow(<Image src="profile.jpg" alt="avatar" height="75" width="75" placeholder={<div>placeholder text</div>} />);
  wrapper.setState({ isLoading: false, isError: true });
  expect(wrapper).toMatchSnapshot();
});
