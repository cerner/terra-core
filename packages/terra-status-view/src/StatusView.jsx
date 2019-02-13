import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Divider from 'terra-divider';
import styles from './StatusView.module.scss';

const cx = classNames.bind(styles);

const variants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: PropTypes.node,

  /**
   * The glyph that is to be displayed for the `custom` variant.
   */
  customGlyph: PropTypes.node,

  /**
   *  Determines if the content should be aligned vertically at the top of the container rather than in the middle.
   */
  isAlignedTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text to display.
   */
  message: PropTypes.string,

  /**
   * The status view's title to display. Status views with variants of type `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error` will have defaulted values unless overridden with this prop.
   */
  title: PropTypes.string,

  /**
   * Determines the glyph to display, one of the following: `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error`, or `custom`.
   */
  variant: PropTypes.string,
};

const defaultProps = {
  children: [],
  customGlyph: undefined,
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: variants.ERROR,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class StatusView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showGlyph: true,
      paddingBottom: 0,
      paddingTop: 0,
    };
    this.showAndCenterItems = this.showAndCenterItems.bind(this);
  }

  componentDidMount() {
    // call after all items have rendered in the view to calculate which items
    // can be shown and center the items inside the view appropriately
    this.showAndCenterItems();
  }

  /**
   * Will calculate which items inside the status view can appear based on fixed
   * height of its container and will update the inner padding to center the items
   * with 40% of the remaining space at the top with 60% on the bottom.
   */
  showAndCenterItems() {
    let paddingTop = 0;
    let paddingBottom = 0;
    let showGlyph = false;
    let newViewHeight = 0;
    let contentHeight = 0;
    let contentWithGlyphHeight = 0;

    const viewHeight = this.innerNode.getBoundingClientRect().height;
    newViewHeight = viewHeight;

    // get the content heights of the nodes that are to be shown if have content and cannot be hidden
    const titleNodeHeight = this.titleNode.getBoundingClientRect().height;
    const actionNodeHeight = this.actionsNode ? this.actionsNode.getBoundingClientRect().height : 0;
    const messageNodeHeight = this.messageNode ? this.messageNode.getBoundingClientRect().height : 0;
    const dividerNodeHeight = this.dividerNode ? this.dividerNode.getBoundingClientRect().height : 0;
    contentHeight = (titleNodeHeight + actionNodeHeight + messageNodeHeight + dividerNodeHeight);

    contentWithGlyphHeight = contentHeight + (this.glyphNode ? this.glyphNode.getBoundingClientRect().height : 0);
    // if inner view node height is lesser than the components along with glyph inside the inner view.
    // and the height difference is very less (i.e 0.0001) then add that comparision value to the
    // the inner view height.
    if (contentWithGlyphHeight - viewHeight <= 0.0001) {
      newViewHeight += 0.0001;
    }

    if (this.glyphNode && newViewHeight >= contentWithGlyphHeight && this.innerNode.offsetWidth >= this.glyphNode.offsetWidth) {
      // if glyph exists and can fit inside the container's height and width, distribute remaining padding to center
      showGlyph = true;
      if (!this.props.isAlignedTop) {
        const remainingHeight = (viewHeight > contentWithGlyphHeight) ? (viewHeight - contentWithGlyphHeight) : 0;
        paddingTop = remainingHeight * 0.4;
        paddingBottom = remainingHeight * 0.6;
      }
    } else if (!this.props.isAlignedTop) {
      // glyph does not exist or does not fit, distribute remaining padding if any to center
      const remainingHeight = viewHeight - contentHeight;
      if (remainingHeight > 0) {
        paddingTop = remainingHeight * 0.4;
        paddingBottom = remainingHeight * 0.6;
      }
    }

    // set which components can fit into the view
    this.setState({
      showGlyph,
      paddingTop,
      paddingBottom,
    });
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

    const { intl } = this.context;

    let glyphSection;
    if (!isGlyphHidden && this.state.showGlyph) {
      if (variant === variants.CUSTOM) {
        glyphSection = (
          <div className={cx('glyph')} ref={(element) => { this.glyphNode = element; }}>
            {customGlyph}
          </div>
        );
      } else {
        glyphSection = (
          <div className={cx('glyph')} ref={(element) => { this.glyphNode = element; }}>
            <svg className={cx(variant)} />
          </div>
        );
      }
    }

    let messageSection;
    if (message) {
      messageSection = (
        <div className={cx('message')} ref={(element) => { this.messageNode = element; }}>
          {message}
        </div>
      );
    }

    let actionSection;
    if (React.Children.count(children) > 0) {
      actionSection = (
        <div className={cx('actions')} ref={(element) => { this.actionsNode = element; }}>
          {children}
        </div>
      );
    }

    let defaultTitle = title;
    if (!defaultTitle) {
      defaultTitle = (variant === StatusView.Opts.variants.CUSTOM) ? '' : intl.formatMessage({ id: `Terra.status-view.${variant}` });
    }

    let dividerSection;
    if (messageSection || actionSection) {
      dividerSection = (
        <div className={cx('divider')} ref={(element) => { this.dividerNode = element; }}>
          <Divider />
        </div>
      );
    }

    const titleSection = (
      <div className={cx('title')} ref={(element) => { this.titleNode = element; }}>
        {defaultTitle}
      </div>
    );

    const statusViewClassNames = cx([
      'outer-view',
      customProps.className,
    ]);

    const statusViewInnerStyles = {
      paddingTop: `${this.state.paddingTop}px`,
      paddingBottom: `${this.state.paddingBottom}px`,
    };

    return (
      <div
        {...customProps}
        className={statusViewClassNames}
      >
        <div
          className={cx('inner-view')}
          style={{ ...statusViewInnerStyles }}
          ref={(element) => { this.innerNode = element; }}
        >
          {glyphSection}
          <div className={cx('message-content-group')}>
            {titleSection}
            {dividerSection}
            {messageSection}
          </div>
          {actionSection}
        </div>
      </div>
    );
  }
}

StatusView.propTypes = propTypes;
StatusView.contextTypes = contextTypes;
StatusView.defaultProps = defaultProps;
StatusView.Opts = {};
StatusView.Opts.variants = variants;
export default StatusView;
