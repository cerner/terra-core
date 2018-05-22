import React from 'react';
import Base from '../../../Base';

const BaseNoTranslationsLoaded = () => {
  const noTranslations = (
    <Base locale="gabcdef" translationsLoadingPlaceholder={<div>No Translations</div>}>
      <div>Translations</div>
    </Base>
  );
  return noTranslations;
};

export default BaseNoTranslationsLoaded;
