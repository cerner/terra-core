import React from 'react';
import Button from 'terra-button';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <>
    <Hyperlink id="link" href="https://www.cerner.com">Hyperlink</Hyperlink>
    <br />
    <br />
    <Button
      text="Button 1 (Press to focus Hyperlink)"
      onClick={() => { document.getElementById('link').focus(); }}
      id="button1"
    />
  </>
);
