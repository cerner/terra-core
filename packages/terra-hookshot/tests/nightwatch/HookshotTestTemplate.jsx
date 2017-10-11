import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from '../../lib/Hookshot';
import HookshotContent from './HookshotContentTestTemplate';

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
  contentAttachment: 'middle end',
  targetAttachment: 'middle start',
  buttonMarginTop: '55px',
  buttonMarginLeft: '220px',
  buttonMarginRight: '220px',
  boundingWidth: '540px',
};

const attachmentValues = (attachment) => {
  if (attachment === 'middle start') {
    return { vertical: 'middle', horizontal: 'start' };
  } else if (attachment === 'middle end') {
    return { vertical: 'middle', horizontal: 'end' };
  } else if (attachment === 'middle center') {
    return { vertical: 'middle', horizontal: 'center' };
  } else if (attachment === 'top start') {
    return { vertical: 'top', horizontal: 'start' };
  } else if (attachment === 'top end') {
    return { vertical: 'top', horizontal: 'end' };
  } else if (attachment === 'top center') {
    return { vertical: 'top', horizontal: 'center' };
  } else if (attachment === 'bottom start') {
    return { vertical: 'bottom', horizontal: 'start' };
  } else if (attachment === 'bottom end') {
    return { vertical: 'bottom', horizontal: 'end' };
  }
  return { vertical: 'bottom', horizontal: 'center' };
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
          contentAttachment={attachmentValues(contentAttachment)}
          targetAttachment={attachmentValues(targetAttachment)}
          attachmentMargin={attachmentMargin}
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById(`trigger-${id}`)}
          boundingRef={() => document.getElementById(`${id}-bounds`)}
          {...hookshotProps}
        >
          <HookshotContent
            id={`${id}-content`}
            onEsc={hookshotContentProps.closeOnEsc ? this.handleRequestClose : undefined}
            onOutsideClick={hookshotContentProps.closeOnOutsideClick ? this.handleRequestClose : undefined}
            onResize={hookshotContentProps.closeOnResize ? this.handleRequestClose : undefined}
          />
        </Hookshot>
        <button
          id={`trigger-${id}`}
          style={{ width: '100px', height: '36px', backgroundColor: 'lightGrey', marginLeft: buttonMarginLeft, marginRight: buttonMarginRight, marginTop: buttonMarginTop }}
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
