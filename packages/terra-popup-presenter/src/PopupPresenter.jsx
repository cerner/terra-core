import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import onClickOutside from 'react-onclickoutside'
import PopupFrame from './PopupFrame'
import TetherComponent from './TetherComponent'
import './PopupPresenter.scss';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  content: PropTypes.element,
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions).isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  renderElementTo: PropTypes.any,
  showArrow: PropTypes.bool,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
};

const defaultProps = {
  isOpen: false,
  showArrow: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {
  static arrowAlignmentFromAttachment(contentAttachment) {
    const parsedAttachment = PopupPresenter.parseStringPosition(contentAttachment);

    if (parsedAttachment.vertical === 'middle' || parsedAttachment.horizontal === 'center') {
      return 'Center';
    } else if (parsedAttachment.horizontal === 'left') {
      return 'Start';
    } else {
      return 'End';
    }
  }

  static arrowPositionFromAttachment(contentAttachment) {
    const parsedAttachment = PopupPresenter.parseStringPosition(contentAttachment);

    if (parsedAttachment.vertical === 'top') {
      return 'Top';
    } else if (parsedAttachment.vertical === 'middle') {
      if (parsedAttachment.horizontal === 'left') {
        return 'Start';
      }
      return 'End';
    } else {
      return 'Bottom';
    }
  }

  static parseOffset(value) {
    const parsedValue = PopupPresenter.parseStringPosition(value);
    return {vertical: parseFloat(parsedValue.vertical), horizontal: parseFloat(parsedValue.horizontal)};
  }

  static parseStringPosition(value) {
    const [vertical, horizontal] = value.split(' ');
    return {vertical, horizontal};
  }

  static shouldDisplayArrow(showArrow, contentAttachment) {
    if (showArrow === true && contentAttachment === 'middle center') {
      return false;
    }
    return showArrow;
  }

  static calculateArrowOffest(position, contentOffset, targetOffset) {
    const parsedContentValue = PopupPresenter.parseOffset(contentOffset); // {verticalPx, horizontalPx}
    const parsedTargetValue = PopupPresenter.parseOffset(targetOffset); // {verticalPx, horizontalPx}

    if (['Top','Bottom'].indexOf(position) >= 0) {
      return parsedContentValue.horizontal + parsedTargetValue.horizontal;
    }
    return parsedContentValue.vertical + parsedTargetValue.vertical;
  }

  static caculateContentOffset(contentAttachment, targetAttachment) {
    return '0 0';
  }

  render () {
    const {
      className, 
      closeOnEsc,
      closeOnOutsideClick,
      content,
      contentAttachment,
      isOpen,
      onRequestClose,
      renderElementTo,
      target,
      targetAttachment,
      showArrow,
      ...customProps 
    } = this.props; // eslint-disable-line no-unused-vars

    let wrappedContent;
    const constraintContainer = document.getElementById('terra-FakeModal') || 'window'; //follow up here
    const contentOffset = PopupPresenter.caculateContentOffset(contentAttachment, targetAttachment);
    const constraints = [
      {
        to: constraintContainer,
        attachment: 'together',
        pin: true
      }
    ];

    if (isOpen && content) {
      const arrowAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
      const arrowPosition = PopupPresenter.arrowPositionFromAttachment(contentAttachment);
      const arrowPxOffset = PopupPresenter.calculateArrowOffest(arrowPosition, contentOffset, '0 0');

      const frameProps = {
        className,
        closeOnEsc,
        closeOnOutsideClick,
        onRequestClose,
        arrowAlignment,
        arrowPosition,
        showArrow: PopupPresenter.shouldDisplayArrow(showArrow, contentAttachment),
        arrowPxOffset,
        constraintContainer,
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
      tetherOptions.contentOffset = contentOffset;
    }
    // if (targetOffset) {
    //   tetherOptions.targetOffset = targetOffset;
    // }
    if (targetAttachment) {
      tetherOptions.targetAttachment = targetAttachment;
    }
    if (renderElementTo) {
      tetherOptions.renderElementTo = renderElementTo;
    }

    tetherOptions.classes = {
      element: 'terra-PopupPresenter'
    };

    return <TetherComponent {...tetherOptions} />;
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
