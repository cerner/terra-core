import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from '../../lib/Hookshot';
import HookshotContent from './HookshotContentTemplate';

const propTypes = {
  /**
   * The hookshot contents props. Defaults to closesOnEsc=true, closeOnOutsideClick=true & closeOnResize=true.
   * onRequestClose is provided by the template.
   */
  hookshotContentProps: PropTypes.any,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
};

const defaultProps = {
  hookshotContentProps: { },
  id: 'hookshot',
  isOpen: false,
};

class HookshotTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.triggerHookshot = this.triggerHookshot.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { open: props.isOpen };
  }

  triggerHookshot() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const { hookshotContentProps, id, isOpen, ...hookshotProps } = this.props;
    return (
      <div style={{ border: '1px dashed grey', height: '145px', width: '540px' }}>
        <Hookshot
          id={id}
          content={
            <HookshotContent
              id={`${id}-content`}
              onEsc={hookshotContentProps.closeOnEsc ? this.handleRequestClose : undefined}
              onOutsideClick={hookshotContentProps.closeOnOutsideClick ? this.handleRequestClose : undefined}
              onResize={hookshotContentProps.closeOnResize ? this.handleRequestClose : undefined}
            />}
          contentAttachment="middle right"
          targetAttachment="middle left"
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById(`trigger-${id}`)}
          {...hookshotProps}
        />
        <button
          id={`trigger-${id}`}
          style={{ width: '100px', backgroundColor: 'lightGrey', marginLeft: '220px', marginRight: '220px', marginTop: '55px' }}
          onClick={this.triggerHookshot}
        >
          Trigger Hookshot
        </button>
      </div>
    );
  }
}

HookshotTemplate.propTypes = propTypes;
HookshotTemplate.defaultProps = defaultProps;

export default HookshotTemplate;
