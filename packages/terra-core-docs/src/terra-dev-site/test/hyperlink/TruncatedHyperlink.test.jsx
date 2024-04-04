/* eslint-disable react/forbid-dom-props */
import React from 'react';
import Hyperlink from 'terra-hyperlink';

const styles = {
  truncated: {
    width: '150px',
    height: '50px',
    borderStyle: 'dashed',
    marginBottom: '10px',
  },
};

export default () => (
  <div role="main">
    <div style={styles.truncated}>
      Basic Test
      <Hyperlink id="basic-hyperlink1" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div style={styles.truncated}>
      <Hyperlink id="basic-hyperlink2" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>

    <div style={styles.truncated}>
      External Test
      <Hyperlink id="external-hyperlink1" href="https://www.cerner.com" variant="external" text="External Hyperlink that is really long and will get truncated" />
    </div>
    <div style={styles.truncated}>
      <Hyperlink id="external-hyperlink2" href="https://www.cerner.com" variant="external" text="External Hyperlink that is really long and will get truncated" />
    </div>

    <div style={styles.truncated}>
      Button Test
      <Hyperlink id="button-hyperlink1" href="https://www.cerner.com" onClick={() => {}} text="Button Hyperlink that is really long and will get truncated" />
    </div>
    <div style={styles.truncated}>
      <Hyperlink id="button-hyperlink2" href="https://www.cerner.com" onClick={() => {}} text="Button Hyperlink that is really long and will get truncated" />
    </div>

    <div style={styles.truncated}>
      Document Test
      <Hyperlink id="document-hyperlink1" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Document Hyperlink that is really long and will get truncated" />
    </div>
    <div style={styles.truncated}>
      <Hyperlink id="document-hyperlink2" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Document Hyperlink that is really long and will get truncated" />
    </div>
  </div>
);
