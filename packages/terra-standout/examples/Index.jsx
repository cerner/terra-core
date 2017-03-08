/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from '../../../packages/terra-markdown/src/Markdown';
import ReadMe from '../docs/README.md';
import '../src/Standout.scss';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions

const StandoutExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h1>Standout</h1>
    <div className="terra-Standout">
      <h2>Heading</h2>
      <p>
        Nullam quis risus eget urna mollis ornare vel eu leo.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      </p>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
    </div>
    <h1>Standout Notice</h1>
    <div className="terra-Standout terra-Standout--notice">
      <h2>Heading</h2>
      <p>
        Nullam quis risus eget urna mollis ornare vel eu leo.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      </p>
    </div>
  </div>
);

export default StandoutExamples;
