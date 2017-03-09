/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import '../src/Image.scss';

const imagecontainerStyle1 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 200,
};
const imagecontainerStyle2 = {
  backgroundColor: '#ffe4c4',
  width: 100,
  height: 200,
};
const imagecontainerStyle3 = {
  backgroundColor: '#ffe4c4',
  width: 100,
  height: 100,
  marginBottom: 100,
};


const ImageExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <article>
      <h2>Fluid Examples</h2>

      <p>Image width and height are smaller than container. To fill the container, increase the width of the image.</p>
      <div style={imagecontainerStyle1}>
        <img src="http://lorempixel.com/150/150/nature/" alt="rounded" className="terra-Image terra-Image--circle terra-Image--fluid" />
      </div>

      <p>Image width is larger than the container. Image height is smaller than the container.</p>
      <div style={imagecontainerStyle2}>
        <img src="http://lorempixel.com/150/150/nature/" alt="rounded" className="terra-Image terra-Image--circle terra-Image--fluid" />
      </div>

      <p>Image width is smaller than the container. Image height is larger than the container.</p>
      <div style={imagecontainerStyle3}>
        <img src="http://lorempixel.com/150/150/nature/" alt="rounded" className="terra-Image terra-Image--circle terra-Image--fluid" />
      </div>
    </article>
    <br />
    <br />
    <article>
      <h2>Non Fluid Examples</h2>

      <p>Image width and height are smaller than container.</p>
      <div style={imagecontainerStyle1}>
        <img src="http://lorempixel.com/150/150/nature/" alt="rounded" className="terra-Image terra-Image--circle" />
      </div>

      <p>Image width is larger than the container. Image height is smaller than the container.</p>
      <div style={imagecontainerStyle2}>
        <img src="http://lorempixel.com/150/150/nature/" alt="rounded" className="terra-Image terra-Image--circle" />
      </div>

      <p>Image width is smaller than the container. Image height is larger than the container.</p>
      <div style={imagecontainerStyle3}>
        <img src="http://lorempixel.com/150/150/nature/" alt="rounded" className="terra-Image terra-Image--circle" />
      </div>
    </article>
    <br />
    <br />
    <h2>Circle Image Example</h2>
    <img src="http://lorempixel.com/320/320/nature/" alt="example of circle styles" className="terra-Image terra-Image--circle" />
    <br />
    <br />
    <h2>Fluid Rounded Image Example</h2>
    <img src="http://lorempixel.com/1920/480/nature/" alt="example of fluid rounded styles" className="terra-Image terra-Image--rounded terra-Image--fluid" />
    <br />
    <br />
    <h2>Rounded Image Exapmle</h2>
    <img src="http://lorempixel.com/320/320/nature/" alt="example of rounded styles" className="terra-Image terra-Image--rounded" />
    <br />
    <br />
    <h2>Thumbnail Image Example</h2>
    <img src="http://lorempixel.com/320/320/nature/" alt="example of thumbnail styles" className="terra-Image terra-Image--thumbnail" />
  </div>
);

export default ImageExamples;
