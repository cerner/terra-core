/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const options = { resizeConfig: { fixedHeight: '100%', fixedWidth: '100%' } };

const fillConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/embedded-content-consumer/providers/fill-provider"
    options={options}
    className="embedded-content-fill"
  />
);

export default fillConsumer;
