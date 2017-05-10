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
  showArrow: PropTypes.bool,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
  targetOffset: PropTypes.string,
};

const defaultProps = {
  isOpen: false,
  showArrow: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {
  static arrowAlignmentFromAttachment(contentAttachment) {
    const parsedValue = PopupPresenter.parseStringPosition(value);

    if (parsedValue.vertical === 'middle' || parsedValue.horizontal === 'center') {
      return 'Center';
    } else if (parsedValue.horizontal === 'left') {
      return 'Start';
    } else {
      return 'End';
    }
  }

  static arrowPositionFromAttachment(contentAttachment) {
    const parsedValue = PopupPresenter.parseStringPosition(value);

    if (parsedValue.vertical === 'top') {
      return 'Top';
    } else if (parsedValue.vertical === 'middle') {
      if (parsedValue.horizontal === 'left') {
        return 'Start';
      }
      return 'End';
    } else {
      return 'Bottom';
    }
  }

  static parseOffset(value) {
    const parsedValue = PopupPresenter.parseStringPosition(value);
  }

  static parseStringPosition(value) {
    const [vertical, horizontal] = value.split(' ');
    return {vertical, horizontal};
  }

  static shouldDisplayArrow(showArrow, contentAttachment) {
    if (showArrow === true && contentAttachment !== 'middle center') {
      return false;
    }
    return showArrow;
  }

  static calculateArrowOffest(position, contentOffset, targetOffset) {
    const parsedContentValue = PopupPresenter.parseOffset(contentOffset); // {verticalPx, horizontalPx}
    const parsedTargetValue = PopupPresenter.parseOffset(targetOffset); // {verticalPx, horizontalPx}

    if (['top','bottom'].indexOf(position) >= 0) {
      return parsedContentValue.horizontal + parsedTargetValue.horizontal;
    }
    return parsedContentValue.vertical + parsedTargetValue.vertical;
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
      showArrow,
      ...customProps 
    } = this.props; // eslint-disable-line no-unused-vars

    let wrappedContent;
    if (isOpen && content) {
      const arrowAlignment = PopupPresenter.arrowPositionFromAttachment(contentAttachment);
      const arrowPosition = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
      const arrowPxOffset = PopupPresenter.calculateArrowOffest(arrowPosition, contentOffset, targetOffset);
      const frameProps = {
        className,
        closeOnEsc,
        closeOnOutsideClick,
        onRequestClose,
        arrowAlignment,
        arrowPosition,
        showArrow: PopupPresenter.shouldDisplayArrow(showArraow, contentAttachment),
        arrowPxOffset,
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
