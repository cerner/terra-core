import React, { useState } from 'react';
import AbstractModal from 'terra-abstract-modal';
import classNames from 'classnames/bind';
import styles from './ButtonTestCommon.module.scss';
import Button from '../../../Button';

const cx = classNames.bind(styles);

export default function ButtonWithModal() {
  const [isOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="modal">
      <AbstractModal
        ariaLabel="Terra Modal"
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        classNameModal={cx('test-background-class')}
      >
        <div>
          <h1>Terra Modal</h1>
          <h2>Subtitle</h2>
          <Button id="modal-close-button" text="Close Modal" onClick={handleCloseModal} />
        </div>
      </AbstractModal>
      <Button id="modal-open-button" text="Open Modal" onClick={handleOpenModal} />
    </div>
  );
}

