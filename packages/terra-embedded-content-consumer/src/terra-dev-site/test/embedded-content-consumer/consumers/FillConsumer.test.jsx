/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';

Consumer.init();

const options = { resizeConfig: { fixedHeight: '100%', fixedWidth: '100%' } };

const fillConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/fill-provider"
    options={options}
    className="embedded-content-fill"
  />
);

export default fillConsumer;
