/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';

const ImageExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <article>
	  <h2>Fluid Examples</h2>

	  <p>Image width and height are smaller than container. To fill the container, increase the width of the image.</p>
	  <div class="image-container1">
	    <img src="http://lorempixel.com/150/150/nature/" alt="rounded" class="terra-Image terra-Image--circle terra-Image--fluid">
	  </div>

	  <p>Image width is larger than the container. Image height is smaller than the container.</p>
	  <div class="image-container2">
	    <img src="http://lorempixel.com/150/150/nature/" alt="rounded" class="terra-Image terra-Image--circle terra-Image--fluid">
	  </div>

	  <p>Image width is smaller than the container. Image height is larger than the container.</p>
	  <div class="image-container3">
	    <img src="http://lorempixel.com/150/150/nature/" alt="rounded" class="terra-Image terra-Image--circle terra-Image--fluid">
	  </div>
	</article>
	<br />
	<br />
	<article>
	  <h2>Non Fluid Examples</h2>

	  <p>Image width and height are smaller than container.</p>
	  <div class="image-container1">
	    <img src="http://lorempixel.com/150/150/nature/" alt="rounded" class="terra-Image terra-Image--circle">
	  </div>

	  <p>Image width is larger than the container. Image height is smaller than the container.</p>
	  <div class="image-container2">
	    <img src="http://lorempixel.com/150/150/nature/" alt="rounded" class="terra-Image terra-Image--circle">
	  </div>

	  <p>Image width is smaller than the container. Image height is larger than the container.</p>
	  <div class="image-container3">
	    <img src="http://lorempixel.com/150/150/nature/" alt="rounded" class="terra-Image terra-Image--circle">
	  </div>
	</article>
	<br />
	<br />
	/* Styles specific to this demonstration */
	<style>
	   .image-container1 {
	    background-color: #444;
	    width: 200px;
	    height: 200px;
	  }

	  .image-container2 {
	    background-color: #444;
	    width: 100px;
	    height: 200px;
	  }

	  .image-container3 {
	    background-color: #444;
	    width: 200px;
	    height: 100px;
	    margin-bottom: 100px;
	  }

	  .image-container4 {
	    background-color: #444;
	    width: 100px;
	    height: 100px;
	    margin-bottom: 100px;
	  }
	</style>
	<br />
	<br />
	<h2>Circle Image Example</h2>
	<img src="http://lorempixel.com/320/320/nature/" alt="example of circle image styles" class="terra-Image terra-Image--circle">
	<br />
	<br />
	<h2>Fluid Rounded Image Example</h2>
	<img src="http://lorempixel.com/1920/480/nature/" alt="example of fluid rounded image styles" class="terra-Image terra-Image--rounded terra-Image--fluid">
	<br />
	<br />
	<h2>Rounded Image Exapmle</h2>
	<img src="http://lorempixel.com/320/320/nature/" alt="example of rounded image styles" class="terra-Image terra-Image--rounded">
	<br />
	<br />
	<h2>Thumbnail Image Example</h2>
	<img src="http://lorempixel.com/320/320/nature/" alt="example of thumbnail image styles" class="terra-Image terra-Image--thumbnail">
  </div>
);

export default ImageExamples;
