import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

class ToggleAlignmentAndGlyph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAlignedTop: false,
      isGlyphHidden: false,
    };
    this.handleOnAlignChange = this.handleOnAlignChange.bind(this);
    this.handleOnGlyphChange = this.handleOnGlyphChange.bind(this);
  }

  handleOnAlignChange() {
    this.setState(prevState => ({
      isAlignedTop: !prevState.isAlignedTop,
    }));
  }

  handleOnGlyphChange() {
    this.setState(prevState => ({
      isGlyphHidden: !prevState.isGlyphHidden,
    }));
  }

  /* eslint-disable react/forbid-dom-props */
  render() {
    return (
      <div>
        <div style={{ height: '400px', border: '1px dashed black' }}>
          <StatusView variant="error" isAlignedTop={this.state.isAlignedTop} isGlyphHidden={this.state.isGlyphHidden} />
        </div>
        <fieldset>
          <legend>Toggle alignment and glyph</legend>
          <div>
            <input id="isAlignedTop" type="checkbox" onChange={this.handleOnAlignChange} />
            <label htmlFor="isAlignedTop">isAlignedTop</label>
          </div>
          <div>
            <input id="isGlyphHidden" type="checkbox" onChange={this.handleOnGlyphChange} />
            <label htmlFor="isGlyphHidden">isGlyphHidden</label>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ToggleAlignmentAndGlyph;
