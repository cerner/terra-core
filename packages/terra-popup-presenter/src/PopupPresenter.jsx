import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import onClickOutside from 'react-onclickoutside'
import PopupFrame from './PopupFrame'
import TetherComponent from './TetherComponent'

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  constraints: PropTypes.array,
  content: PropTypes.element,
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions).isRequired,
  contentOffset: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
  targetOffset: PropTypes.string,
};

const defaultProps = {
  isOpen: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {
  static arrowAlignmentFromAttachment(contentAttachment) {
    const startAttachments = ['top left', 'bottom left'];
    const centerAttachments = ['top center', 'bottom center', 'middle left', 'middle right'];
    const endAttachments = ['top right', 'bottom right'];

    if (startAttachments.indexOf(contentAttachment) >= 0) {
      return 'Start';
    }
    if (centerAttachments.indexOf(contentAttachment) >= 0) {
      return 'Center';
    }
    if (endAttachments.indexOf(contentAttachment) >= 0) {
      return 'End';
    }
    return undefined;
  }

  static arrowPositionFromAttachment(contentAttachment) {
    const topAttachments = ['top left', 'top center', 'top right'];
    const startAttachments = ['middle left'];
    const endAttachments = ['middle right'];
    const bottomAttachments = ['bottom left', 'bottom center', 'bottom right'];

    if (topAttachments.indexOf(contentAttachment) >= 0) {
      return 'Top';
    }
    if (startAttachments.indexOf(contentAttachment) >= 0) {
      return 'Start';
    }
    if (endAttachments.indexOf(contentAttachment) >= 0) {
      return 'End';
    }
    if (bottomAttachments.indexOf(contentAttachment) >= 0) {
      return 'Bottom';
    }
    return undefined;
  }

  render () {
    const {
      className, 
      closeOnEsc,
      closeOnOutsideClick,
      constraints,
      content,
      contentAttachment,
      contentOffset,
      isOpen,
      onRequestClose,
      target,
      targetAttachment,
      targetOffset,
      arrowAlignment,
      arrowPosition,
      ...customProps 
    } = this.props; // eslint-disable-line no-unused-vars

    let wrappedContent;
    if (isOpen && content) {
      const frameProps = {
        className,
        closeOnEsc,
        closeOnOutsideClick,
        onRequestClose,
        arrowAlignment: PopupPresenter.arrowAlignmentFromAttachment(contentAttachment),
        arrowPosition: PopupPresenter.arrowPositionFromAttachment(contentAttachment),
        showArrow: contentAttachment !== 'middle center',
      };

      wrappedContent = (
        <WrappedPopupFrame {...frameProps}>
          {content}
        </WrappedPopupFrame>
      );
    }

    const tetherOptions = {
      contentAttachment,
      isEnabled: true,
      target,
    };

    //Optional parameters
    if (wrappedContent) {
      tetherOptions.content = wrappedContent;
    }
    if (constraints) {
      tetherOptions.constraints = constraints;
    }
    if (contentOffset) {
      tetherOptions.offset = contentOffset;
    }
    if (targetOffset) {
      tetherOptions.targetOffset = targetOffset;
    }
    if (targetAttachment) {
      tetherOptions.targetAttachment = targetAttachment;
    }

    return <TetherComponent {...tetherOptions} />;
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
