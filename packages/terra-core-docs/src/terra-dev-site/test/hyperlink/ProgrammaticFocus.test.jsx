import React from 'react';
import Button from 'terra-button';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <>
    <Hyperlink id="link" href="https://www.cerner.com" text="Hyperlink" />
    <br />
    <br />
    <Hyperlink id="link-button" onClick={() => {}} text="Hyperlink Button" />
    <br />
    <br />
    <Button
      text="Button 1 (Press to focus Hyperlink)"
      onClick={() => { document.getElementById('link').focus(); }}
      id="button1"
    />
    <Button
      text="Button 2 (Press to focus Hyperlink Button)"
      onClick={() => { document.getElementById('link-button').focus(); }}
      id="button2"
    />
  </>
);
