import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Divider from 'terra-divider';
import styles from './StatusView.scss';

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
   * The glyph that is to be displayed for the StatusView.Opts.variants.CUSTOM variant.
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
   * The status view's title to display. Status views with variants of type StatusView.Opts.variants.NODATA,
   * StatusView.Opts.variants.NOMATCHINGRESULTS, StatusView.Opts.variants.NOTAUTHORIZED,
   * StatusView.Opts.variants.ERROR will have defaulted values unless overridden with this prop.
   */
  title: PropTypes.string,

  /**
   * Determines the glyph to display, one of the following: StatusView.Opts.variants.NODATA,
   * StatusView.Opts.variants.NOMATCHINGRESULTS, StatusView.Opts.variants.NOTAUTHORIZED,
   * StatusView.Opts.variants.ERROR, or StatusView.Opts.variants.CUSTOM.
   */
  variant: PropTypes.oneOf(Object.values(variants)),
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
      return new Error('Please add locale prop to Base component to load translations');
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
    const viewHeight = this.innerNode.offsetHeight;

    let paddingTop = 0;
    let paddingBottom = 0;
    let showGlyph = false;

    // get the content heights of the nodes that are to be shown if have content and cannot be hidden
    let componentsHeight = this.titleNode.offsetHeight;
    if (this.actionsNode) {
      componentsHeight += this.actionsNode.offsetHeight;
    }
    if (this.messageNode) {
      componentsHeight += this.messageNode.offsetHeight;
    }
    if (this.dividerNode) {
      componentsHeight += this.dividerNode.offsetHeight;
    }

    if (this.glyphNode && viewHeight >= componentsHeight + this.glyphNode.offsetHeight) {
      // if have a glyph to show and can fit inside the containers height, distribute remaining padding to center
      showGlyph = true;
      if (!this.props.isAlignedTop) {
        const remainingHeight = viewHeight - (componentsHeight + this.glyphNode.offsetHeight);
        paddingTop = remainingHeight * 0.4;
        paddingBottom = remainingHeight * 0.6;
      }
    } else if (!this.props.isAlignedTop) {
      // glyph does not exist or does not fit, distribute remaining padding if any to center
      const remainingHeight = viewHeight - componentsHeight;
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
      'status-view',
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
          className={cx('status-view-inner')}
          style={{ ...statusViewInnerStyles }}
          ref={(element) => { this.innerNode = element; }}
        >
          {glyphSection}
          <div className={cx('message-content-group')} >
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
