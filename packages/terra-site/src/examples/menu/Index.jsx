import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-menu/docs/README.md';
import { version } from 'terra-menu/package.json';

// eslint-disable-next-line import/extensions
import 'terra-menu';

const MenuExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1>Orientation</h1>
    <div className="terra-Menu terra-Menu--horizontal">
      <a href="/" className="terra-Menu-item">Patients</a>
      <a href="/" className="terra-Menu-item is-active">Appointment</a>
      <a href="/" className="terra-Menu-item">Doctors</a>
    </div>
    <hr />
    <div className="terra-Menu terra-Menu--vertical">
      <a href="/" className="terra-Menu-item">Patients</a>
      <a href="/" className="terra-Menu-item is-active">Appointment</a>
      <a href="/" className="terra-Menu-item">Doctors</a>
    </div>
    <br />
    <br />
    <h1>Orientation</h1>
    <div className="terra-Menu terra-Menu--horizontal">
      <a href="/" className="terra-Menu-item">Very long tab Very long tab Very long tab</a>
      <a href="/" className="terra-Menu-item is-active">Appointment</a>
      <a href="/" className="terra-Menu-item">Doctors</a>
    </div>
    <hr />
    <h2>Very long in vertical</h2>
    <div className="terra-Menu terra-Menu--vertical">
      <a href="/" className="terra-Menu-item">Patients</a>
      <a href="/" className="terra-Menu-item is-active">Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Very long tab Patients Appointment</a>
      <a href="/" className="terra-Menu-item">Doctors</a>
    </div>
  </div>

);

export default MenuExamples;
