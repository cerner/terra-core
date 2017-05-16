import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import onClickOutside from 'react-onclickoutside'
import PopupFrame from './PopupFrame'
import PopupArrow from './PopupArrow'
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

const MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

const MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

const defaultProps = {
  isOpen: false,
  showArrow: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {
  static mirroredAttachment(attachment) {
    return 'top right'; //fix this
  }

  static arrowAlignmentFromAttachment(attachment) {
    const parsedAttachment = PopupPresenter.parseStringPosition(attachment);

    if (parsedAttachment.vertical === 'middle' || parsedAttachment.horizontal === 'center') {
      return 'Center';
    } else if (parsedAttachment.horizontal === 'left') {
      return 'Start';
    } else {
      return 'End';
    }
  }

  static arrowPositionFromAttachment(attachment) {
    const parsedAttachment = PopupPresenter.parseStringPosition(attachment);

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
    return '0 14px';
  }

  constructor(props) {
    super(props);
    this.handleTetherUpdate = this.handleTetherUpdate.bind(this);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
  }

  arrowPositionFromBounds(targetBounds, presenterBounds) {
    let position;  
    if (targetBounds.top >= presenterBounds.bottom) {
      position = 'bottom';
    } else if (targetBounds.right <= presenterBounds.left) {
      position =  'left';
    } else if (targetBounds.left >= presenterBounds.right) {
      position =  'right';
    }else if (targetBounds.bottom <= presenterBounds.top) {
      position =  'top';
    }
    return position;
  }

  attachPositionFromAlignment(alignment, start, width) {
    if (alignment === 'Middle') {
      return start + width / 2;
    }else if (alignment === 'End'){
      return start + width;
    }
    return start;
  }

  setArrowPosition(position, targetBounds, popUpBounds) {
    let arrowSet = false;
    let targetAttachment = this.props.targetAttachment;
    if (!targetAttachment) {
      targetAttachment = PopupPresenter.mirroredAttachment(this.props.contentAttachment);
    }

    if (['bottom', 'top'].indexOf(position) >= 0) {

      const insetStart = popUpBounds.left + 13;
      const insetEnd = popUpBounds.left + popUpBounds.width - 13;

      const targetStart = targetBounds.left;
      const targetEnd = targetBounds.left + targetBounds.width;


      if (this.horizontalSegmentIntersected(targetBounds, popUpBounds, 13)) {
        const targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
        const targetAttachPosition = this.attachPositionFromAlignment(targetAlignment, targetBounds.left, targetBounds.width);

        const contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(this.props.contentAttachment);
        const contentAttachPosition = this.attachPositionFromAlignment(contentAlignment, popUpBounds.left, popUpBounds.width);


        let offsetValue;
        if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
          offsetValue = Math.abs(contentAttachPosition - targetAttachPosition);
        }

        this._arrowNode.style.left = offsetValue.toString() + 'px';
        arrowSet = true;
      } 
    } else {
      if (this.verticalSegmentIntersected(targetBounds, popUpBounds)) {
        let offsetValue;
        this._arrowNode.style.top = arrowOffset;
        arrowSet = true;
      }
    }

    return arrowSet;
  }

  horizontalSegmentIntersected(targetBounds, popUpBounds, arrowOffset) {
    const firstStart = popUpBounds.left + arrowOffset;
    const firstEnd = popUpBounds.left + popUpBounds.width - arrowOffset;
    const secondStart = targetBounds.left;
    const secondEnd = targetBounds.left + targetBounds.width;

    return this.segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd);
  }

  verticalSegmentIntersected(targetBounds, popUpBounds, arrowOffset) {
    const firstStart = popUpBounds.top + arrowOffset;
    const firstEnd = popUpBounds.top + popUpBounds.height - arrowOffset;
    const secondStart = targetBounds.top;
    const secondEnd = targetBounds.top + targetBounds.height;

    return this.segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd);
  }

  segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd) {
    if ((firstStart >= secondStart && firstStart<= secondEnd) || (firstEnd >= secondStart && firstEnd <= secondEnd)) {
      return true;
    } else if ((secondStart >= firstStart && secondStart<= firstEnd) || (secondEnd >= firstStart && secondEnd <= firstEnd)) {
      return true;
    }
    return false;
  }

  handleTetherUpdate(event, targetBounds, presenterBounds) {
    if (this._arrowNode) {
      const position =  this.arrowPositionFromBounds(targetBounds, presenterBounds);
      const enabledArrows = this.setArrowPosition(position, targetBounds, presenterBounds);
    }
  }

  handleTetherRepositioned(event, targetBounds, presenterBounds) {
    if (this._arrowNode) {
      const position =  this.arrowPositionFromBounds(targetBounds, presenterBounds);
      const enabledArrows = this.setArrowPosition(position, targetBounds, presenterBounds);
    }
  }

  setArrowNode(node) {
    this._arrowNode = node;
  }

  render () {
    const {
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
    const constraintContainer = document.getElementById('terra-FakeModal') || 'scrollParent'; //follow up here
    const contentOffset = PopupPresenter.caculateContentOffset(contentAttachment, targetAttachment);
    const constraints = [
      {
        to: 'scrollParent',
        pin: true
      },
      {
        to: constraintContainer,
        attachment: 'together',
      }
    ];

      // {
      //   to: 'scrollParent',
      //   pin: true
      // },
      // {
      //   to: constraintContainer,
      //   attachment: 'together',
      // }

  
    if (isOpen && content) {
      const arrowAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
      const arrowPosition = PopupPresenter.arrowPositionFromAttachment(contentAttachment);

      let arrow;
      if (PopupPresenter.shouldDisplayArrow(showArrow, contentAttachment)) {
        const arrowClassNames = classNames([
        'terra-PopupFrame-arrow',
          { [`terra-PopupFrame-arrow--align${arrowAlignment}`]: arrowAlignment },
        ]);
        arrow = <PopupArrow position={arrowPosition} arrowRefCallback={this.setArrowNode} />;
      }

      const frameProps = {
        arrow,
        content,
        closeOnEsc,
        closeOnOutsideClick,
        onRequestClose,
        arrowPosition,
        // constraintContainer,
      };

      wrappedContent = (
        <WrappedPopupFrame {...frameProps}>
          {arrow}
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
    if (targetAttachment) {
      tetherOptions.targetAttachment = targetAttachment;
    }
    if (renderElementTo) {
      tetherOptions.renderElementTo = renderElementTo;
    }
    // tetherOptions.onUpdate = this.handleTetherUpdate;
    tetherOptions.onRepositioned = this.handleTetherRepositioned;
    // tetherOptions.classPrefix = 'terra';

    return <TetherComponent {...tetherOptions} {...customProps}/>;
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
