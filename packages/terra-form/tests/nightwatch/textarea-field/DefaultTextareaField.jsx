import React from 'react';
import Base from 'terra-base';
import TextareaField from '../../../lib/TextareaField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const textareaField = () => (
  <Base locale={locale}>
    <TextareaField id="default-textarea-field" />
  </Base>
);

export default textareaField;
