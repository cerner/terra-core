import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import styles from './ActionHeaderContainer.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Child element to be displayed on the right end of the header.
   * The element passed as children will be decorated with flex attributes.
   */
  children: PropTypes.element,

  /**
   * Content to be displayed at the start of the header, placed before the title.
   */
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar.
   */
  text: PropTypes.string,

  /**
   * Content to be displayed at the end of the header.
   * The element passed as endContent will be wrapped in a div with flex attributes.
   */
  endContent: PropTypes.element,
  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing 'level' will not visually change the style of the content.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  text: undefined,
  startContent: undefined,
  endContent: undefined,
};

const ActionHeaderContainer = ({
  children, text, startContent, endContent, level, intl, ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const HeaderElement = `h${level}`;

  const content = React.Children.map(children, child => (
    React.cloneElement(child, { className: cx(['flex-collapse', children.props.className]) })
  ));

  const closeButtonId = `terra-action-header-close-button-${customProps.id}`;
  const maximizeButtonId = `terra-action-header-maximize-button-${customProps.id}`;
  const minimizeButtonId = `terra-action-header-minimize-button-${customProps.id}`;

  const visuallyHiddenComponent = (
    <>
      <VisuallyHiddenText aria-hidden id={closeButtonId} text={intl.formatMessage({ id: 'Terra.actionHeader.close.description' }, { text })} />
      <VisuallyHiddenText aria-hidden id={maximizeButtonId} text={intl.formatMessage({ id: 'Terra.actionHeader.maximize.description' }, { text })} />
      <VisuallyHiddenText aria-hidden id={minimizeButtonId} text={intl.formatMessage({ id: 'Terra.actionHeader.minimize.description' }, { text })} />
    </>
  );

  const titleElement = text ? (
    <div className={cx('title-container')}>
      <HeaderElement className={cx('title')}>
        {text}
      </HeaderElement>
    </div>
  ) : undefined;

  return (
    <div {...customProps} className={classNames(cx(['flex-header', theme.className]), customProps.className)}>
      {startContent && <div className={cx('flex-end')}>{startContent}</div>}
      <div className={cx('flex-fill')}>
        {titleElement}
      </div>
      {content}
      {endContent && <div className={cx('flex-end')}>{endContent}</div>}
      <div className={cx('hidden-label')}>{visuallyHiddenComponent}</div>
    </div>
  );
};

ActionHeaderContainer.propTypes = propTypes;
ActionHeaderContainer.defaultProps = defaultProps;

export default injectIntl(ActionHeaderContainer);
