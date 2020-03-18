import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../Button';

export default function ButtonWithModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogElement = useRef(null);

  useEffect(() => {
    const dialogWindow = document.activeElement;
    if (dialogElement) {
      dialogElement.current.focus();
    }
    return () => {
      setTimeout(() => {
        if (dialogWindow) {
          dialogWindow.focus();
          setIsOpen(false);
        }
      }, 200);
    };
  });

  return (
    <div>
      <Button
        id="modal-open-button"
        text="Open Modal"
        onClick={() => setIsOpen(true)}
      />
      <dialog open={isOpen}>
        This is an open dialog window
        <button ref={dialogElement} type="button">Test Button</button>
      </dialog>
    </div>
  );
}

