import React from 'react';
import Button from 'terra-button';
import Hyperlink from 'terra-hyperlink';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';

export default () => (
  <>
    <Hyperlink text="Hyperlink" id="link" href="https://www.cerner.com" />
    <br />
    <br />
    <HyperlinkButton id="link-button" onClick={() => {}} text="Hyperlink Button" />
    <br />
    <br />
    <Button
      text="Button 1 (Press to focus Hyperlink)"
      onClick={() => { document.getElementById('link').focus(); }}
      id="button1"
    />
    <br />
    <br />
    <Button
      text="Button 2 (Press to focus Hyperlink Button)"
      onClick={() => { document.getElementById('link-button').focus(); }}
      id="button2"
    />
  </>
);
