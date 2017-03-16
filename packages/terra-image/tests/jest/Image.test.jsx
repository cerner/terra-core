import React from 'react';
import Image from '../../src/Image';

const imagecontainerStyle1 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 200,
};

const image = <Image src="http://lorempixel.com/150/150/nature/" alt="circle" variant="circle" isFluid />;

/* Default component */
it('should render a default component', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/320/320/nature/" />);
  expect(wrapper.prop('className')).toContain('terra-Image--default');
  expect(wrapper.prop('alt')).toEqual(' ');
});

/* Default component with a height and width */
it('should render a default image component with a specified height and width', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/320/320/nature/" height={200} width={300} alt="default image" />);
  expect(wrapper.prop('className')).toContain('terra-Image--default');
  expect(wrapper.prop('alt')).toEqual('default image');
  expect(wrapper.prop('height')).toEqual(200);
  expect(wrapper.prop('width')).toEqual(300);
});

/* Image with a rounded variant */
it('should render a rounded image component', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/320/320/nature/" variant="rounded" alt="rounded image" />);
  expect(wrapper.prop('className')).toContain('terra-Image--rounded');
  expect(wrapper.prop('alt')).toEqual('rounded image');
});

/* Image with a circle variant */
it('should render a circle image component', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/320/320/nature/" variant="circle" alt="circle image" />);
  expect(wrapper.prop('className')).toContain('terra-Image--circle');
  expect(wrapper.prop('alt')).toEqual('circle image');
});

/* Image with a thumbnail variant */
it('should render a thumbnail image component', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/320/320/nature/" variant="thumbnail" alt="thumbnail image" />);
  expect(wrapper.prop('className')).toContain('terra-Image--thumbnail');
  expect(wrapper.prop('alt')).toEqual('thumbnail image');
});

/* Image with fluid behavior */
it('should render a thumbail image component with fluid behavior', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/1920/480/nature/" variant="thumbnail" alt="thumbnail image" isFluid />);
  expect(wrapper.prop('className')).toContain('terra-Image--thumbnail terra-Image--fluid');
});

/* Image without fluid behavior */
it('should render a thumbail image component with non-fluid behavior', () => {
  const wrapper = shallow(<Image src="http://lorempixel.com/1920/480/nature/" variant="thumbnail" alt="thumbnail image" />);
  expect(wrapper.prop('className')).toContain('terra-Image--thumbnail');
});

/* Image with fluid behavior having a parent container */
it('should render a circle image component with fluid behavior', () => {
  const wrapper = shallow(<div style={imagecontainerStyle1}>{image}</div>);
  expect(wrapper.node.props.style).toEqual(imagecontainerStyle1);
  expect(wrapper.unrendered.props.children).toEqual(image);
});
