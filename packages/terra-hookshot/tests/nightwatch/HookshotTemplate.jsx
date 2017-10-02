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
  contentAttachment: PropTypes.string,
  targetAttachment: PropTypes.string,
  buttonMarginLeft: PropTypes.string,
  buttonMarginRight: PropTypes.string,
  buttonMarginTop: PropTypes.string,
  boundingWidth: PropTypes.string,
  attachmentMargin: PropTypes.number,
};

const defaultProps = {
  hookshotContentProps: { },
  id: 'hookshot',
  isOpen: false,
  contentAttachment: 'middle right',
  targetAttachment: 'middle left',
  buttonMarginTop: '55px',
  buttonMarginLeft: '220px',
  buttonMarginRight: '220px',
  boundingWidth: '540px',
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
    const {
      hookshotContentProps,
      id,
      isOpen,
      contentAttachment,
      targetAttachment,
      buttonMarginLeft,
      buttonMarginRight,
      buttonMarginTop,
      boundingWidth,
      attachmentMargin,
      ...hookshotProps
    } = this.props;
    return (
      <div id={`${id}-bounds`} style={{ border: '1px dashed grey', height: '145px', width: boundingWidth }}>
        <Hookshot
          id={id}
          content={
            <HookshotContent
              id={`${id}-content`}
              onEsc={hookshotContentProps.closeOnEsc ? this.handleRequestClose : undefined}
              onOutsideClick={hookshotContentProps.closeOnOutsideClick ? this.handleRequestClose : undefined}
              onResize={hookshotContentProps.closeOnResize ? this.handleRequestClose : undefined}
            />}
          contentAttachment={contentAttachment}
          targetAttachment={targetAttachment}
          attachmentMargin={attachmentMargin}
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById(`trigger-${id}`)}
          boundingRef={() => document.getElementById(`${id}-bounds`)}
          {...hookshotProps}
        />
        <button
          id={`trigger-${id}`}
          style={{ width: '100px', backgroundColor: 'lightGrey', marginLeft: buttonMarginLeft, marginRight: buttonMarginRight, marginTop: buttonMarginTop }}
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
