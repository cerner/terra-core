import React, { useState } from 'react';
import StatusView from 'terra-status-view';

const ToggleAlignmentAndGlyph = () => {
  const [isAlignedTop, setIsAlignedTop] = useState(false);
  const [isGlyphHidden, setIsGlyphHidden] = useState(false);

  const handleOnAlignChange = () => {
    setIsAlignedTop(!isAlignedTop);
  };

  const handleOnGlyphChange = () => {
    setIsGlyphHidden(!isGlyphHidden);
  };

  /* eslint-disable react/forbid-dom-props */
  return (
    <div>
      <div style={{ height: '400px', border: '1px dashed black' }}>
        <StatusView variant="error" isAlignedTop={isAlignedTop} isGlyphHidden={isGlyphHidden} />
      </div>
      <fieldset>
        <legend>Toggle alignment and glyph</legend>
        <div>
          <input id="isAlignedTop" type="checkbox" onChange={handleOnAlignChange} />
          <label htmlFor="isAlignedTop">isAlignedTop</label>
        </div>
        <div>
          <input id="isGlyphHidden" type="checkbox" onChange={handleOnGlyphChange} />
          <label htmlFor="isGlyphHidden">isGlyphHidden</label>
        </div>
      </fieldset>
    </div>
  );
};

export default ToggleAlignmentAndGlyph;
