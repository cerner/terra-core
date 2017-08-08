/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import { Link } from 'react-router';
import List from 'terra-list';
import { version } from 'terra-form/package.json';
import styles from '../../site.scss';

// Example Files
import ControlledInputDocs from './docs/ControlledInput.md';
import ControlledInput from './examples/ControlledInput';

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <div className={styles['form-markdown']}>
      <h1>Component Information</h1>
      <p> Below are links to further documentation and implementaiton of each form component.</p>
      <List className={styles['site-nav']}>
        <List.Item content={<Link to="site/form/field">Field</Link>} />
        <List.Item content={<Link to="site/form/fieldset">Feildset</Link>} />
        <List.Item content={<Link to="site/form/input">Input</Link>} />
        <List.Item content={<Link to="site/form/control">Control</Link>} />
        <List.Item content={<Link to="site/form/number-field">Number Field</Link>} />
        <List.Item content={<Link to="site/form/textarea">Textarea</Link>} />
        <List.Item content={<Link to="site/form/textarea-field">Textarea Field</Link>} />
        <List.Item content={<Link to="site/form/text-field">Text Field</Link>} />
        <List.Item content={<Link to="site/form/select">Select</Link>} />
        <List.Item content={<Link to="site/form/select-field">Select Field</Link>} />
      </List>
    </div>
    <Markdown id="controlled-input-example" src={ControlledInputDocs} componentName="ControlledInput" />
    <ControlledInput />
  </div>
);

export default FormsExamples;
