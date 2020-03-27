import React, { useRef } from 'react';
import Button from '../../../Button';

export default () => {
  const button1 = useRef();
  const button2 = useRef();

  return (
    <>
      <Button
        refCallback={(ref) => { button1.current = ref; }}
        text="Button 1 (Press to focus button 2)"
        onClick={() => { button2.current.focus(); }}
        id="button1"
      />
      <br />
      <br />
      <Button
        refCallback={(ref) => { button2.current = ref; }}
        text="Button 2 (Press to focus button 1)"
        onClick={() => { button1.current.focus(); }}
        id="button2"
      />
      <br />
      <br />
      <Button
        text="Button 3 (Press to focus this button but without focus styles)"
        id="button3"
      />
    </>
  );
};
