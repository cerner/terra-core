import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';
import _ from 'lodash';

const propTypes = {
  children: PropTypes.node,
  isAlignedTop: PropTypes.bool,
  isGlyphHidden: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string,
};

class StatusViewExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      variant: StatusView.variants.NODATA,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentWillMount() {
    this.state.id = _.uniqueId();
  }

  getId(name) {
    return name + this.state.id;
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderVariantForm() {
    return (
      <form>
        <label htmlFor={this.getId('variant')}>Variant: </label>
        <select id={this.getId('variant')} name="variant" value={this.state.variant} onChange={this.handleSelectChange}>
          <option value={StatusView.variants.NODATA}>{StatusView.variants.NODATA}</option>
          <option value={StatusView.variants.NOMATCHINGRESULTS}>{StatusView.variants.NOMATCHINGRESULTS}</option>
          <option value={StatusView.variants.NOTAUTHORIZED}>{StatusView.variants.NOTAUTHORIZED}</option>
          <option value={StatusView.variants.ERROR}>{StatusView.variants.ERROR}</option>
          <option value={StatusView.variants.NOSERVICE}>{StatusView.variants.NOSERVICE}</option>
          <option value={StatusView.variants.CUSTOM}>{StatusView.variants.CUSTOM}</option>
        </select>
      </form>
    );
  }

  render() {
    const {
    children,
    isAlignedTop,
    isGlyphHidden,
    message,
    title,
    variant,
    ...customProps }
    = this.props;

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
          >
            {children}
          </StatusView>
        </div>
      </div>
    );
  }
}

StatusViewExample.propTypes = propTypes;
export default StatusViewExample;
