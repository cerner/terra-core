import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

const propTypes = {
  children: PropTypes.node,
  customGlyph: PropTypes.node,
  isAlignedTop: PropTypes.bool,
  isGlyphHidden: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string,
};

class StatusViewTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueid(),
      variant: 'no-data',
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  getId(name) {
    return name + this.state.id;
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderVariantForm() {
    return (
      <div>
        <label htmlFor={this.getId('variant')}>Variant: </label>
        <select id={this.getId('variant')} name="variant" value={this.state.variant} onChange={this.handleSelectChange}>
          <option value="no-data"> no-data </option>
          <option value="no-matching-results"> no-matching-results </option>
          <option value="not-authorized"> not-authorized </option>
          <option value="error"> error </option>
          <option value="custom"> custom </option>
        </select>
      </div>
    );
  }

  render() {
    const {
      children,
      customGlyph,
      isAlignedTop,
      isGlyphHidden,
      message,
      title,
      variant,
      ...customProps
    } = this.props;

    const styleAttributes = Object.assign({}, customProps.style);
    styleAttributes.border = '1px solid black';

    return (
      <div>
        {this.renderVariantForm()}
        <div style={styleAttributes}>
          <StatusView
            isAlignedTop={isAlignedTop}
            isGlyphHidden={isGlyphHidden}
            variant={this.state.variant}
            title={title}
            message={message}
            customGlyph={customGlyph}
          >
            {children}
          </StatusView>
        </div>
      </div>
    );
  }
}

StatusViewTemplate.propTypes = propTypes;
export default StatusViewTemplate;
